class Character {

    constructor(char=0) {
        this._char = char;
    }

    get value() {
        return this._char;
    }

    set value(char) {
        this._char = char;
    }
}