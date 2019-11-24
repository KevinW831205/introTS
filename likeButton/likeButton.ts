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
        if(this._onState){
            this._likes --;
            this._onState = false;
            return this._likes;
        } else {
            this.likes ++;
            this._onState = true;
            return this.likes;
        }
    }



}