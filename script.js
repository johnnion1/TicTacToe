const playerFactory = (name, mark) => {
        return {name, mark}
}

const myModule = (function() {

        let _gameBoard = {
                board: [null, null, null, null, null, null, null, null, null],
                cacheDom: {
                        container: document.querySelector('#container'),
                        playerDisplay: document.querySelector('#playerDisplay'),
                        gameBoardSelect: document.querySelector('#gameBoard'),
                        startButton: document.querySelector('#startButton'),
                        tiles: Array.from(document.querySelectorAll('.tile')),
                },
                checkSpace: (coordinate) => {
                        if (_gameBoard.board[coordinate] == null) { return true }
                        else { return false };
                },
                        // returns true if space at coordinate is empty
                        
/* 
        in _gameBoard:
        addeventlistener to fields ('click', => {
               if   checkSpace(data-index)
                setmark(data-index, game.getActivePlayerMark())
        })
// updatefield() or updateTiles() etc    tile[data-index].innerHTML = _gameBoard.board[index]; 

*/              
                patterns: [
                [0,1,2], 
                [3,4,5], 
                [6,7,8], 
                [0,3,6], 
                [1,4,7], 
                [2,5,8], 
                [0,4,8], 
                [2,4,6], 
                ],

                patternChecker: (pattern) => {
                        for(let i = 0; i < pattern.length -1 ; i++ ) {
                        if( _gameBoard.board[pattern[i]] !== null ) {

                                let nextNumber = pattern[i + 1];
                                let overnextnumber = pattern[i + 2]
                              //  console.log(_gameBoard.board[pattern[i]] + ', next one: ' + _gameBoard.board[nextNumber]);
                               if(_gameBoard.board[pattern[i]] == _gameBoard.board[nextNumber] && _gameBoard.board[nextNumber] == _gameBoard.board[overnextnumber]) {
                                return true; }
                               }
                        }
                },

                winChecker: () => {
                        _gameBoard.patterns.forEach(pattern => {
                        if (_gameBoard.patternChecker(pattern)) {alert('WINER')}
                        })                        
                },




                //isSameMark tests:
                //for (let patNumber = 0, i < pattern.length, i++)? 
                //or forEach??

                 /*  (while (unneccessary bc returns true or false anyway? -- that's .every i think)
                  pattern.forEach(patNumber => { 
                 board[patnum] == getActivePlayerMark
                        
                  }  
                */
                             //   while _gameBoard.board[]


                      /*  if (array.forEach(item => { item ? true: false;})) */
                       //the whole clause suould equal true if array[0] == array[1] == array[2] 
                        
              /*   for (let pattern = 0; pattern < _gameBoard.patterns.length; pattern++) {
                       let result =  pattern.forEach(num => _gameBoard.board[num] == 'X')
                       console.log(result)
                }          */
                
                  
                  /* )
                  for (let pattern = 0; pattern < _gameBoard.patterns.length; pattern++) {
                       let result =  pattern.forEach(num => _gameBoard.board[num] == 'X')
                       console.log(result)
                }          */
                
               /*  let result = pattern.every(patter => _gameBoard.board[patter.pat] == 'X'/* game.getActivePlayerMark() */
        
                
                       //reduce: gameboard.board.reduce(spot =>)
                       //(patterns -> objects?) pattern.every ((for every pattern.number)) => _gameBoard.board[pattern.number] == activePlayerMark();


                gameBoardChecker: () => {
                        patterns.forEach(pattern => {
                                pattern.forEach(spotNumber, index => {

                                })
                                
                        })
                        console.log()
                },

                addClickListener: () => {
                        _gameBoard.cacheDom.tiles.forEach(tile => {
                                tile.setAttribute('tileIndex', _gameBoard.cacheDom.tiles.indexOf(tile));
                                });
                                
                       _gameBoard.cacheDom.tiles.forEach(tile => {
                        let field =  tile.getAttribute('tileIndex');
                                console.log( field)
                        tile.textContent = _gameBoard.board[field]
                        tile.addEventListener('click', () => {
                                  console.log('checkSpace(ind):   ' + _gameBoard.checkSpace(field));
                        if ( _gameBoard.checkSpace(field)) {
                                game.setMark(field, game.getActivePlayerMark());
                                console.log('Works')
                                tile.textContent = _gameBoard.board[field];
                                _gameBoard.winChecker();
                        }
                         else { alert ('no posíble') }
                         })
                        })

                },
                
                        

                

/* loadBoard: () => {
        create fields with for() loop over gameboard.board
}, */

/* updateField: (coordinate) => {
        
}, */
        };
      
        const _renderTiles = (function () {
                _gameBoard.cacheDom.startButton.addEventListener('click', () => {
                game.startGame();
        });
        })();

        const _displayController = () => {

                _gameBoard.addClickListener();
               /*  let executed = false;
                if (!executed) {
                        // add click listener()
                executed = true;
                }
                console.log(_gameBoard.board);

 */

        };


        const _players = {
                player1: null,
                player2: null,
                activePlayer: 1,
        };
        
        const game = {
                startGame: () => {
                        _displayController();
                        game.addPlayer();
                        game.addPlayer();
                },
                newPlayer: () => {
                        // FUNCTION:     make name input div appear 
                        //  get input -> addplayer(input)=
                        /* _players.addPlayer(playerName.input); */
                },
                setMark: (coordinate, playerMark) => {
                        _gameBoard.board.splice(coordinate, 1, playerMark); 
                },
                
                addPlayer: () => {
                        let selectName = null;
                        if ( _players.player1 !== null && _players.player2 !== null ) {
                                alert ('Only 2 players in this game!');
                                return;
                        } 
                        else if (_players.player1 !== null) {
                                selectName = prompt("Player two, what's your name?", "Turner");
                                _players.player2 = playerFactory(selectName, 'O');
                        } 
                        else {
                        selectName = prompt("Player One, what's your name?", "Underberg");
                        _players.player1 = playerFactory(selectName, 'X');
                        }
                },
                getActivePlayerMark: () => {   //change to getActivePlayer() --> return _players.player1 or player2
                        if (_players.activePlayer == 1) {
                                _players.activePlayer++;
                                return _players.player1.mark;
                                
                        } else {
                               _players.activePlayer--; 
                               return _players.player2.mark; 
                        }
                },
                
        }

       
return {
        game,
        _players,
        _gameBoard,
}
})();








































                /* 
                for (let i = 0; i < _gameBoard.board.length; i++) {
                        let field = _gameBoard.cacheDom.tiles;
                        field.textContent = _gameBoard.board[i];
                        field.setAttribute('class', 'field');
                        field.setAttribute('data-index', i);
                        _gameBoard.addClickListener(field, i);
                        _gameBoard.cacheDom.gameBoardSelect.appendChild(field);
                } */



/* 
const playerFactory = (name) => Object.assign(Object.create(playerProto), {
        name
});
 */
/* const playerProto = {
        setMark: (mark, coordinate) => {
                this._gameBoard.checkSpace(coordinate);
                console.log(mark, coordinate);
        },
        setPlayerMark: () => {
                this.mark = 'X';
                if (Object.keys(_players).length === 0) {
                this.mark = 'O';
                }
        } 

} */






  /* Confused: used    Object Literal Module   pattern but is different
        watch videos
        
         const cacheDom = {
               this.container = document.querySelector('#container');
               this.playerDisplay = container.find('#playerDisplay')
        } */
        