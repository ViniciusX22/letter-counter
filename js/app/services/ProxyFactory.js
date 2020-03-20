class ProxyFactory {
  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      get(target, prop) {
        if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
          return function() {
            let retorno = Reflect.apply(target[prop], target, arguments);
            acao(target);
            return retorno;
          };
        }

        return Reflect.get(...arguments);
      },

      set(target, prop) {
        let retorno = Reflect.set(...arguments);
        if (props.includes(prop)) acao(target);
        return retorno;
      }
    });
  }

  static _ehFuncao(func) {
    return typeof func == typeof Function;
  }
}
