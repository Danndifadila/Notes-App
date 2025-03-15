class Loading extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: open });
  }
}

customElements.define("loading", Loading);
