

class Frog{
    constructor( color ){
        this.color = color;
        this.domElement = null;
    }
    render(){
        this.domElement = $("<div>").text('frog');
        if(this.color===undefined){
            this.domElement.css('color', 'transparent')
        } else {
            this.domElement.css('color', this.color);
        }
        return this.domElement;
    }
}