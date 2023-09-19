import MegjelenitSor from "./MegjelenitSorView.js";

class Megjelenit {
    #list = [];

    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append(`<table class="table table-striped table-bordered">`);
        this.tablaElem = szuloElem.children("table");
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
        });
    }

}
export default Megjelenit;