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
                        tiles: document.querySelectorAll('.tile'),
                },
                checkSpace: (coordinate) => {
                        if (_gameBoard.board[coordinate] == null) { return true }
                        else { return false };
                         },
                        // returns true if space at coordinate is empty
                        
                addClickListener: () => {
                        let tileArray = Array.from(_gameBoard.cacheDom.tiles);
                        tileArray.forEach(tile => {
                                tile.setAttribute('ind', tileArray.indexOf(tile));
                                console.log(tile.ind);
 // TO updatefield()/ reloadboard()    tile.innerHTML = _gameBoard.board[index]; 
                                tile.addEventListener('click', () => {
                                        
                                        console.log(tile.ind)
                         /*       console.log(_gameBoard.checkSpace(index));
                         if ( _gameBoard.checkSpace(index) ) {
                                game.setMark(index, 'Trolol');
                                console.log('Works')
                        }
                         else { console.log('no posíble') }
                         }  */
                        })
                        })
                        },

                        /*             loadBoard: () => {
                        create fields with for() loop over gameboard.board
                }, */
                
                /* updateField: (coordinate) => {
                        
                }, */

                /* 
        in gameboard:
        addeventlistener to fields ('click', => {
               if   checkSpace(data-index)
                setmark(data-index, game.getActivePlayerMark())
        })

        Where game.getActivePlayerMark() is either 'X' or 'Y' based on
        _players.{player}.mark

        */

        };
      
        const _renderTiles = (function () {
                _gameBoard.cacheDom.startButton.addEventListener('click', () => {
                game.startGame();
        });
        })();

        const _displayController = () => {
                let executed = false;
                if (!executed) {
                        /* add click listener()
                         */
                }
                console.log(_gameBoard.board);



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
        