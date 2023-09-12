import Megjelenit from "./Megjelenit.js";

//import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";

$(function name() {
    console.log("main.js csatlakoztatva")
    const SZULOELEM = $(".tarolo");
    const TODOLISTA = new Megjelenit(TODOLIST2, SZULOELEM);

    $(window).on("torol", (event) =>{
        console.log(event.detail);
    })
    
})
