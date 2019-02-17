class CharacterView extends View{

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        return model.value;
    }
}