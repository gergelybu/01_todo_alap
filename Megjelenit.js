import megjSor from "./megjSor.js";

class TodoView {
  #LISTA = {};
  constructor(LISTA, szuloElem) {
    this.#LISTA = LISTA;
    this.szuloElem = szuloElem;
    szuloElem.append('<table class="table table-striped table-dark">');
    this.tablaElem = szuloElem.children("table");
    let txt = this.htmlOsszeallit(LISTA);
    this.szuloElem.html(txt);
  }

  htmlOsszeallit() {
    for (let index = 0; index < this.#LISTA.length; index++) {
      new megjSor(this.#LISTA[index], this.tablaElem);
    }
  }
}

export default TodoView;
