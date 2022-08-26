import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <ig-template 
        username="User profile" 
        location="Location"
        caption="Caption as you want" 
        mainimg="./assets/loading-img.jpg"
        profileicon="./assets/account.png">
        </ig-template>

        <br>

        <ig-template 
        username="a.solarte1" 
        caption="Final MIC 2022" 
        location="Estadio de Palamós"
        mainimg="./assets/mainImg.png"
        profileicon="./assets/profile-icon.png">
        </ig-template>
        `
    }
}

customElements.define("app-container",AppContainer);