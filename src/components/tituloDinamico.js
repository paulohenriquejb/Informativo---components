class tituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow =  this.attachShadow({ mode: "open"})

        //base component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo")
      



        // estilizar o componet
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color:white;
            text-align:Center;
        }

        `

        //enviar para o shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style);

    }
}

customElements.define('titulo-dinamico',tituloDinamico)