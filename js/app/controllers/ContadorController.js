class ContadorController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._contador = new Contador();

        this._totalChar = new Bind(
            new Character(),
            new CharacterView($("#total-caracteres")),
            'value'
        );
        this._totalLetter = new Bind(
            new Character(),
            new CharacterView($("#total-letras")),
            'value'
        );
        this._letras = new Bind(
            new Letters(),
            new LettersView($("#letras")),
            'frequence'
        );

        this._texto = $("#texto");
    }

    contabilizaTexto() {
        this._contador.texto = this._texto.value;

        this._totalChar.value = this._contador.getNumCaracteres();
        this._totalLetter.value = this._contador.getNumLetras();

        this._letras.letters = Maybe.of(Object.keys(this._contador.getNumLetrasAll()));
        this._letras.amount = Maybe.of(Object.keys(this._contador.getNumLetrasAll())
            .map(letra => this._contador.getNumLetra(letra)));
        this._letras.frequence = Maybe.of(Object.keys(this._contador.getNumLetrasAll())
            .map(letra => this._contador.getPorcentagemLetra(letra)));
        
        loading(false);
    }
}