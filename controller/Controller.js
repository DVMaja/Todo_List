import Megjelenit from "../view/MegjelenitView.js";
import Urlap from "../view/UrlapView.js";
import Model from "../model/Model.js";

//import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "../adatok.js";

class Controller {
    constructor() {
        const SZULOELEM = $(".tarolo");

        const FORMSZULOELEM = $(".ujadat");
        new Urlap({ tevekenyseg: "", hatarido: "" }, FORMSZULOELEM);
        // |osztály példánya
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(), SZULOELEM);
        //az osztály példánynak van tagfüggvénye

        $(window).on("torol", (event) => {
            console.log(event.detail);
        })

        $(window).on("ujadatHozzaAdasa", (event) => {
            console.log(event.detail);
            // át kell adni az adatot a modellnek
            //meghívjuk  az ujAdat metodust

            MODEL.ujAdat(event.detail);
            //újraPéldnyosítjuk a megjelenit osztályt
            SZULOELEM.empty();

            new Megjelenit(MODEL.getList(), SZULOELEM);
        })
    }
}
export default Controller