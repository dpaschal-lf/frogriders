

$(document).ready( initializeApp );
var game = null;

function initializeApp(){
    var frogriderConfig = {
        height: 9,
        width: 9,
        frogCounts: {
            'yellow': 10,
            'red': 11,
            'blue': 14,
            'brown': 21
        }
    }
    // debugger;
    game = new Frogriders( frogriderConfig );
    game.makeGameBoard();
}