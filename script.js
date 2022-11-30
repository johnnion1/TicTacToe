const playerFactory = (name, mark) => {
        return {name, mark}
}

const myModule = (function() {

        let _gameBoard = {
                board: [null, 'X', null, 'O', 'X', null, null, 'O', null],
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
// updatefield() or reloadboard() etc    tile[data-index].innerHTML = _gameBoard.board[index]; 

*/

                addClickListener: () => {
                        _gameBoard.cacheDom.tiles.forEach(tile => {
                                tile.setAttribute('tileIndex', _gameBoard.cacheDom.tiles.indexOf(tile));
                                });
                       _gameBoard.cacheDom.tiles.forEach(tile => {
                                console.log( tile.getAttribute('tileIndex'))
                        tile.textContent = _gameBoard.board[tile.getAttribute('tileIndex')]
                        tile.addEventListener('click', () => {
                                  console.log('checkSpace(ind):   ' + _gameBoard.checkSpace(tile.getAttribute('tileIndex')));
                         /*  if ( _gameBoard.checkSpace(index) ) {
                                game.setMark(index, 'Trolol');
                                console.log('Works')
                        }
                         else { console.log('no posíble') } */
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
        };
        
        const game = {
                startGame: () => {
                        _displayController();
                },
                newPlayer: () => {
                        // FUNCTION:     make name input div appear 
                        //  get input -> addplayer(input)=
                        _players.addPlayer();
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
        