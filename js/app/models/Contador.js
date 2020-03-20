class Contador {
  constructor(text) {
    this._text = text;
  }

  set texto(texto) {
    this._text = texto;
  }

  getNumCaracteres() {
    // retorna o número de caracteres
    return this._text.length;
  }

  getNumLetras() {
    // retorna o número de letras
    return this.getLetras().length;
  }

  getCaracteres() {
    // retorna os caracteres como um array
    return this._text.split("");
  }

  getLetras() {
    // retorna uma string com apenas as letras
    return this._text
      .split("")
      .filter(
        letra =>
          (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) ||
          (letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122) ||
          (letra.charCodeAt(0) >= 128 && letra.charCodeAt(0) <= 165)
      )
      .join("")
      .toLowerCase();
  }

  getNumCaractere(char) {
    // retorna o número 'char' no texto
    return this._text.split("").filter(c => c == char).length;
  }

  getNumLetra(letra) {
    // retorna o número 'letra' no texto
    return this._text
      .replace(/\s/g, "")
      .split("")
      .filter(l => l.toLowerCase() == letra.toLowerCase()).length;
  }

  getNumLetrasAll() {
    // retorna um objeto contendo a quantidade de cada letra
    return this.getLetras()
      .split("")
      .sort((l1, l2) => l1.charCodeAt(0) - l2.charCodeAt(0))
      .reduce((letras, letra) => {
        if (!letras.hasOwnProperty(letra.toUpperCase()))
          letras[letra.toUpperCase()] = 0;
        letras[letra.toUpperCase()]++;
        return letras;
      }, {});
  }

  getPorcentagemCaractere(char) {
    // retorna a porcentagem de 'char' no texto
    return parseFloat(
      ((this.getNumCaractere(char) / this.getNumCaracteres()) * 100).toFixed(2)
    );
  }

  getPorcentagemLetra(letra) {
    // retorna a porcentagem de 'letra' no texto (em relação ao total de letras)
    return parseFloat(
      ((this.getNumLetra(letra) / this.getNumLetras()) * 100).toFixed(2)
    );
  }

  getPorcentagemLetras() {
    // retorna um objeto contendo a porcentagem de cada letra no texto (em relação ao total de letras)
    return this.getLetras()
      .split("")
      .reduce((letras, letra) => {
        if (!letras.hasOwnProperty(letra.toUpperCase())) {
          letras[letra.toUpperCase()] = this.getPorcentagemLetra(letra);
        }
        return letras;
      }, {});
  }
}
