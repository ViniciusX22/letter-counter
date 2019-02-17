class LettersView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        return `
            <thead>
                <tr>
                    <th class="has-text-centered" colspan="${model.letters.getOrElse([null]).length + 1}">Letras</th>
                </tr>
                <tr>
                    <th></th>
                    ${model.letters.getOrElse(['-']).map(letter =>
                        `<th class="has-text-centered">${letter}</th>`
                    ).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="has-text-centered" title="Quantidade">N°</th>
                    ${model.amount.getOrElse(['-']).map(amt =>
                        `<td class="has-text-centered">${amt}</td>`
                    ).join('')}
                </tr>
                <tr>
                    <th class="has-text-centered" title="Frequência">%</th>
                    ${model.frequence.getOrElse([0.0]).map(freq =>
                        `<td class="has-text-centered" title="${freq}">${freq.toFixed(1)}</td>`
                    ).join('')}
                </tr>
            </tbody>
        `;
    }
}