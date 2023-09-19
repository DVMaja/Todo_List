class Urlap {
    #adat = {};

    constructor(adat, szuloElem) {
        this.szuloElem = szuloElem;
        //this.szuloElem.html("<form>");//html elem
        this.formElem = this.szuloElem.children("form");
        this.#adat = adat;//objektum
        //this.#urlapLetrehoz();

        //this.submitGomb = this.formElem.children("div").children("#submit");

        //this
    }

    #urlapLetrehoz() {
        let txt = "";

        for (const key in this.#adat) {
            txt += `<div class="form-group">
            <label for="${key}"> ${this.#adat[key]}</label>
            <input> type="text" class="form-control" id="${key}" name="${key}" </input>
            </div>`;
        }
        txt += `<div>`
        
        this.formElem.html(txt);

    }

    adatgyujt() {
        //
    }

    esemenyTrigger() {
        const esemenyem = new CustomEvent("esemeny", { detail: this.#adat });
        window.dispatchEvent(esemenyem);
    }
}
export default Urlap;