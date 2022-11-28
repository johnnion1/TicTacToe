const myModule = (function() {

        let _gameBoard = {
                board: [null, 'X', null, 'O', 'X', null, null, 'O', null]
        };
        /* Confused: used    Object Literal Module   pattern but is different
        watch videos
        
         const cacheDom = {
               this.container = document.querySelector('#container');
               this.playerDisplay = container.find('#playerDisplay')
        } */
        const _cacheDom = {
                container: document.querySelector('#container'),
                playerDisplay: document.querySelector('#playerDisplay'),
                gameBoardSelect: document.querySelector('#gameBoard'),
                startButton: document.querySelector('#startButton'),
        };
        
        const _renderTiles = (function () {
                _cacheDom.startButton.addEventListener('click', () => {
                game.startGame();
        });
        })();

        const _displayController = () => {
                console.log(_gameBoard.board);
                for (let i = 0; i < _gameBoard.board.length; i++) {
                        let field = document.createElement('div');
                        field.textContent = _gameBoard.board[i];
                        _cacheDom.gameBoardSelect.appendChild(field);

                }
        };
        const game = {
        startGame: () => {
                _displayController();
        },
        setMark:  function(coordinate, playerMark) {
                _gameBoard.board.splice(coordinate, 1, playerMark); 
                _displayController();
        }  

        }
return {
        game,
}
})();

const playerFactory = (name) => {
        
       /* const prototype = myModule;
        const name = name; 
        return Object.assign({}, prototype, name) */
}