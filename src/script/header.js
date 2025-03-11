class MainHearder extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <h1>
            My Notes 
        </h1>
        `;
  }
}

customElements.define("main-header", MainHearder);
