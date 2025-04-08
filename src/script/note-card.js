class NoteCard extends HTMLElement {
    constructor() {
        super();
        // Open shadow DOM
        this.attachShadow({ mode: "open" });

        // Styling
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
            :host {
                display: block;
                background-color: #9932cc;
                border-radius: 10px;
                padding: 1.5rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0, 0.1);
                transition: transform 0.3s ease;
                cursor: pointer;
                color: white;
            }

            :host(:hover) {
                transform: translateY(-5px);
            }

            :host([note-status="invalid"]){
                border: 2px solid #ff4136;
            }

            .note-title {
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
                font-weight: bold;
            }

            .note-content {
                font-size: 0.9rem;
                line-height: 1.5;
            }
            </style>
            <div class="note-title"></div>
            <div class="note-content"></div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    //Render elements when entering shadow DOM
    connectedCallback() {
        this.render();
        this.addEventListener("click", () => {
            this.editNote();
        });
    }

    static get observedAttributes() {
        return ["note-title", "note-content", "note-status", "note-id"];
    }

    attributeChandeCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const titleEl = this.shadowRoot.querySelector(".note-title");
        const contentEl = this.shadowRoot.querySelector(".note-content");

        if (titleEl && contentEl) {
            titleEl.textContent = this.getAttribute("note-title") || "Untilted";
            contentEl.textContent =
                this.getAttribute("note-content") || "No Content";
        }
    }

    editNote() {
        const title = this.getAttribute("note-title");
        const body = this.getAttribute("note-content");

        //Fire custom event to edit this note
        const event = new CustomEvent("edit-note", {
            detail: { title, body },
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(event);
    }
}

//Register custom element
customElements.define("note-card", NoteCard);
