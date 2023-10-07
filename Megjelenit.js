class TodoView {
  constructor(LISTA, szuloElem) {
    this.LISTA = LISTA;
    this.szuloElem = szuloElem;
    let txt = this.htmlOsszeallit(LISTA);
    this.szuloElem.html(txt);
  }

  htmlOsszeallit() {
    let txt = "<table>";
    for (let index = 0; index < this.LISTA.length; index++) {
      const element = this.LISTA[index];
      txt += `<tr><td>${element}</td></tr>`;
    }
    txt += "</table>";
    return txt;
  }
}

export default TodoView;
