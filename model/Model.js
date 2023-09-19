import { TODOLIST2 } from "../adatok.js";


class Model {
    #list = [];

    constructor(list) {
        this.#list = TODOLIST2;
    }

    ujAdat(obj) {
        //hozzáfüzze a listájához
        this.#list.push(obj);
    }

    getList() {
        //ez  a program aktuália állapota
        return this.#list;
    }
}
export default Model
/**újabb metódusok amlyek a kész  töröl, stbt beállítja*
 * törli*
 * adatok js ben legyen egy id/ index*/