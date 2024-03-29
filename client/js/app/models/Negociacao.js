class Negociacao {
  // onde se define os atributos de uma classe
  constructor(data, quantidade, valor) {
    // o _ é uma convenção dizendo que as propiedades só podem ser acessadas pela própria classe
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;

    // this é uma variável implícita para quando um método ou construtor for chamado ter acesso a instância trabalhada
    // Object.freeze é razo por isso mesmo congelando as propriedades do objeto, os métodos podem ser alterados 
    Object.freeze(this);
  }

  // métodos acessadores
  get data() {
    // cria uma nova data baseada na data da negociação
    // por ser outro objeto, a alteração acontece na cópia e não na propiedade original
    return new Date(this._data.getDate());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}