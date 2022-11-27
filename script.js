const myModule = (function() {

        let _gameBoard = {
                board: [null, null, null, null, null, null, null, null, null]
        };
        const cacheDom = {
                container: document.querySelector('#container'),
        }
        const _displayController = () => {
                console.log(_gameBoard.board);
        };
        const game = {

        setMark:  function(coordinate, playerMark) {
                _gameBoard.board.splice(coordinate, 1, playerMark); 
                _displayController();
        }  

        }
return {
        cacheDom,
        game,
}
})();

const playerFactory = (name) => {
        
       /* const prototype = myModule;
        const name = name; 
        return Object.assign({}, prototype, name) */
}