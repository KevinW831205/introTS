"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton(_likes) {
        this._likes = _likes;
        this._onState = false;
    }
    Object.defineProperty(LikeButton.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        set: function (value) {
            this._likes = value;
        },
        enumerable: true,
        configurable: true
    });
    LikeButton.prototype.click = function () {
        if (this._onState) {
            this._likes--;
            this._onState = false;
            return this._likes;
        }
        else {
            this.likes++;
            this._onState = true;
            return this.likes;
        }
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
