export class LikeButton {

    private _onState = false;

    constructor( private _likes : number){

    }

    get likes (){
        return this._likes
    }

    set likes (value : number){
        this._likes = value;
    } 

    click(){
        this._likes += (!this._onState) ? 1 : -1;
        this._onState = !this._onState;
        return this._likes

    }



}