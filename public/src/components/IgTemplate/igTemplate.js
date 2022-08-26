class IgTemplate extends HTMLElement {
  //Metodo para declarar que atributos/parametros
  //vamos a utilizar en nuestra clase
  static get observedAttributes() {
    return ['username', 'location', 'caption', 'mainimg', 'profileicon'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  //Se ejecuta cuando la clase está
  //montado en nuestra pagina/html
  connectedCallback() {
    this.render();
  }

  //Metodo que se encarga de ejecutarse
  //si algun valor cambia
  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/Igtemplate/style.css">
    <section>
    <div class="page">
      <div class="above">
        <div class="userInform">
          <div class="userImg">
        <img src="${this.profileicon}" alt="" class="cover">
        </div>
        <h3>${this.username}<br><span>${this.location}</span></h3>
    </div>
    <div>
    <img src="../assets/three-dots.png" alt="" class="menu">
    </div>
</div>
<div class="mainPics">
    <img class="cover" src="${this.mainimg}"/>
</div>
<div class="theButton">
    <div class="left">
        <img src="./assets/like-icon.png" alt="" class="btnLike">
        <img src="./assets/comment-icon.png" alt="" class="btnComment">
        <img src="./assets/share-icon.png" alt="">
    </div>
    <div class="rigth">
        <img src="./assets/save-icon.png" alt="" class="btnSave">
    </div>
</div>
<h4 class="likes">420.389 likes</h4>
<h4 class="captions"><b>${this.username} </b>${this.caption}</h4>
<h4 class="comments">View all 348 comments</h4>
<div class="addComment">
    <div class="userImg">
        <img src="${this.profileicon}" alt="">
    </div>
    <input type="text" class="theComment" placeholder="Add a comment..."></input>
</div>
<h5 class="time">28 minutes ago</h5>
</div>
    </section>` 
  }
}

customElements.define('ig-template', IgTemplate);
export default IgTemplate;
