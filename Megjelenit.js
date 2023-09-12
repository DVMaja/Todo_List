import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
    #list = [];

    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append(`<table class="table table-striped table-bordered">`);
        this.tablaElem = szuloElem.children("table");

        //console.log(this.tablaElem);
        this.megjelenites();
    }

    megjelenites() {
        /** az objektumból jelenítsd meg a táblásatba az összes kulcsot.
        * minden sorban legyen egy töröl és egy kész gomb
        * a kész gobra kattintva a vonatkozó tevékenység színe legyen zöld
        * töröl gombra kattintva  a vonatkozó tevékenység tünjön e a listából.
        */
        let txt = "";


        this.#list.forEach(elem => {
            new MegjelenitSor(elem, this.tablaElem);

            /**Ebből külön osztály*/
            /* txt += "<tr>";
            for (const key in elem) {
                const element = elem[key];
                //txt += `<td>${elem["tevekenyseg"]}</td>`;
                txt += `<td>${elem[key]}</td>`;
            }
            txt += `<td><span class="kesz">✔️</span><span class="torol">❌</span></td>`;
            txt += "</tr>"; */
        });
    }

}
export default Megjelenit;