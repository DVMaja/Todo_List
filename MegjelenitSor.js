class MegjelenitSor {

    #adat = [];

    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.TablaElem = szuloElem;
        this.#sor();
        this.sorElem = this.TablaElem.children("tr:last-child");

        let valtoztatando = this.sorElem.children("td");

        this.pipaElem = this.sorElem.children("td").children(".kesz");
        this.pipaElem.on("click", () => {
            //console.log(this.pipaElem);            
            //console.log(valtoztatando);
            valtoztatando.css('background-color', 'green');
        })

        this.megseElem = this.sorElem.children("td").children(".megse");
        this.megseElem.on("click", () => {
            //console.log(this.megseElem);
            valtoztatando.css('background-color', 'transparent');

        })

        this.torolElem = this.sorElem.children("td").children(".torol");
        this.torolElem.on("click", () => {
            //console.log(this.torolElem); slice
            valtoztatando.empty(this); //törli az aktuálisat a this miatt

            this.#esemenyTrigger("torol");
        })

    }


    #sor() {
        let txt = "";
        txt += "<tr>";

        for (const key in this.#adat) {
            const element = this.#adat[key];
            //txt += `<td>${elem["tevekenyseg"]}</td>`;
            txt += `<td>${element}</td>`;
        }
        txt += `<td><span class="kesz">✔️</span>
                <span class="megse">❌</span>
                <span class="torol">🗑️</span></td>`;

        txt += "</tr>";
        this.TablaElem.append(txt);
    }

    #esemenyTrigger(esemenynev) {
        const esemenyem = new CustomEvent(esemenynev, { detail: this });
        window.dispatchEvent(esemenyem);
    }


}

export default MegjelenitSor;