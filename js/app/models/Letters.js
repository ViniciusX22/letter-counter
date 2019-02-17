class Letters {

    constructor(letters, count, freq) {
        this._letters = Maybe.of(letters);
        this._count = Maybe.of(count);
        this._freq = Maybe.of(freq);
    }

    get amount() {
        return this._count;
    }

    get frequence() {
        return this._freq;
    }

    get letters() {
        return this._letters;
    }

    set amount(count) {
        this._count = count;
    }

    set frequence(freq) {
        this._freq = freq;
    }

    set letters(letters) {
        this._letters = letters;
    }
}