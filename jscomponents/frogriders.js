

class Frogriders{
    constructor( options ){
        this.options = options;
        this.boardArray = [];
        this.gameBoardDom = $("#gameBoard");

        this.getFrogSourceArray();
    }
    getFrogSourceArray(){
        var sourceArray = [];
        for( var color in this.options.frogCounts){
            for( var count = 0; count < this.options.frogCounts[color]; count++){
                sourceArray.push( color );
            }
        }
        return sourceArray;
    }
    makeGameBoard(){
        var sourceColors = this.getFrogSourceArray();
        for( var row = 0; row < this.options.height; row++){
            this.boardArray[row] = [];
            for( var col = 0; col < this.options.width; col++){
                var location = {
                    x: col, y: row
                }
                var cell = new Cell( location );
                this.boardArray[row][col]= cell ;
                var cellDomObject = cell.render();
                this.gameBoardDom.append(cellDomObject);
                var randomColorIndex = Math.floor(sourceColors.length * Math.random());
                var randomColor = sourceColors[ randomColorIndex ];
                cell.addFrog( randomColor );
                sourceColors.splice( randomColorIndex , 1 );
            }
        }
    }
}