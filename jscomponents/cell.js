

class Cell{
    constructor( location ){
        this.location = location;
        this.domElement = {
            container: null,
            contents: null
        }
        this.occupant = null;
    }
    addFrog( color ){
        var frog = new Frog( color );
        this.occupant = frog;
        var frogDom = frog.render();
        this.domElement.contents.append( frogDom );
    }
    render(){
        this.domElement.container = $("<div>").addClass('frogCell');
        this.domElement.contents = $("<div>").addClass('frogCellContents');
        this.domElement.container.append( this.domElement.contents);
        return this.domElement.container;
    }
}