class AddButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        //   Styling
        const template = document.createElement("template");
        template.innerHTML = `
        <style>
            :host {
                display: flex;
                justify-content: center;
                width: 60px;
                height: 60px;
                background-color: #dc3545;
                border-radius: 1.1rem;
                font-size: 2rem;
                cursor: pointer;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                transition: transform 0.3s ease, background-color 0.3 ease;
            }

            :host(:hover) {
                transform: scale(1.1);
            }

            :host([button-state="active"]) {
                background-color: #2ecc40;
            }
        </style>
        <slot>+</slot>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.addEventListener("click", () => {
            const event = new CustomEvent("add-note", {
                bubbles: true,
                composed: true,
            });

            this.dispatchEvent(event);

            //Visual feedback
            this.setAttribute("button-state", "active");
            setTimeout(() => {
                this.setAttribute("button-state", "idle");
            }, 300);
        });
    }
}

// Register custom element
customElements.define("add-button", AddButton);
