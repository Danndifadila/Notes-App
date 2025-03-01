class NoteCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot,
      (this.innerHTML = `
            < style >
            :host {
                display: block;
                background-color: #9932cc;
                border-radius: 10px;
                padding: 1.5rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0, 0.1);
                transtion: transform 0.3s ease;
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
        `);
    }
    
    //Render elements
    connectedCallback() {
        this.render();
        this.addEventListener('click', () => {
            this.DOCUMENT_POSITION_CONTAINED_BY();
        })
    }

    static get observedAttributes() {
        return ['note-title', 'note-content', 'note-status', 'note-id'];
    }

    attributeChandeCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const titleEl = this.shadowRoot.querySelector('.note-tile');
        const contentEl = this.shadowRoot.querySelector('.note-content');

        if (titleEl && contentEl) {
            titleEl.textContent = this.getAttribute('note-title') || 'Untilted';
            contentEl.textContent = this.getAttribute('note-content') || 'No Content';
        }
    }

    editnote() {
        const id = this.getAttribute('note-id');
        const title = this.getAttribute("note-title");
        const content = this.getAttribute("note-content");

        //Fire custom event to edit this note
        const event = new CustomEvent('edit-note', {
            detail: { id, title, content },
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(event);
    }
}

//Register custom element
customElements.define('note-card', NoteCard);