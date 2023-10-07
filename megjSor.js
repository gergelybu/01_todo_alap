class megjSor {
  #adat = {};
  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.szuloElem = szuloElem;
    this.sor();
    this.sorElem=this.szuloElem.children("tr:last-child")
    //rákattintani a pipára
    this.pipaElem = $(".kesz:last");

    this.pipaElem.on("click", ()=>{
        console.log(this)
        this.sorElem.css("background-color", "green")
    })

    this.torolElem = $(".torol:last");
    this.torolElem.on("click", ()=>{
        console.log(this)
        this.sorElem.css("background-color", "black")
    })
  }

  sor() {
    let txt = "<tr>";
    for (const key in this.#adat) {
      txt += `<td>${this.#adat[key]}</td>`;
    }
    txt += `<td><span class="kesz">✔️</span> <span class="torol">🗑️</span></td>`;
    txt += "</tr>";
    this.szuloElem.append(txt);
  }
}

export default megjSor;
