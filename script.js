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
                checkGameState: () => { //if Array.from(i)
                        let i = 0;
                        if (_gameBoard.board[i] == _gameBoard.board[++i] == _gameBoard.board[++i]) {
                                alert('win!')
                        } else { console.log('not registered')}
                },

                areIdentical: (array) => {
                        for(let i = 0; i < array.length + 1; i++) {
                                if( array[i] == array[i++] == array[i++]) {
                                        console.log(i, 'yes');

                                }else console.log(i, 'no');
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
        