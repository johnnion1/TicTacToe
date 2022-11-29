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
                },
                checkSpace: (coordinate) => {
                        if (_gameBoard.board[coordinate] == null) { return true };
                         },
                        // returns true if space at coordinate is empty
                        
                addClickListener: (element, fieldIndex) => {
                        element.addEventListener('click', () => {
                       console.log(_gameBoard.checkSpace(fieldIndex))
                       if ( _gameBoard.checkSpace(fieldIndex) ) {
                        game.setMark(fieldIndex, 'Trolol');
                        }
                        else { console.log('no posíble') }
                  })
                },
                

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
                console.log(_gameBoard.board);
                for (let i = 0; i < _gameBoard.board.length; i++) {
                        let field = document.createElement('div');
                        field.textContent = _gameBoard.board[i];
                        field.setAttribute('class', 'field');
                        field.setAttribute('data-index', i);
                        _gameBoard.addClickListener(field, i);
                        _gameBoard.cacheDom.gameBoardSelect.appendChild(field);
                }
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
                /* updateField: (coordinate) => {
                        
                } */
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
        