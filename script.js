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
                        console.log(coordinate);
                }

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
                        _gameBoard.cacheDom.gameBoardSelect.appendChild(field);

                }
        };

        const _players = {
                player1: null,
                player2: null,
                addPlayer: () => {
                        let selectName = null;
                        if (_players.player1 !== null) {
                                selectName = prompt("Player two, what's your name?");
                                _players.player2 = playerFactory(selectName, 'O');
                        } else {
                        selectName = prompt("Player One, what's your name?");
                        _players.player1 = playerFactory(selectName, 'X');
                        }
                },
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
                        _displayController();
                },
        }

       
return {
        game,
        _players
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
        