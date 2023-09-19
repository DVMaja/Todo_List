import Megjelenit from "../view/MegjelenitView.js";
import Urlap from "../view/UrlapView.js";

//import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "../adatok.js";

class Controller {
    constructor() {
        const SZULOELEM = $(".tarolo");

        const FORMSZULOELEM = $(".ujadat");
        new Urlap({ tevekenyseg: "", hatarido: "" }, FORMSZULOELEM);

        new Megjelenit(TODOLIST2, SZULOELEM);

        $(window).on("torol", (event) => {
            console.log(event.detail);
        })
    }
}
export default Controller