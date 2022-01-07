const template = document.createElement('template');

template.innerHTML = `
  <style>

    h1 {
      color: red;
    }

  </style>
  <h1>Welcome From <span id="title"></span>!</h1>
`;

export class TitleElement extends HTMLElement {
  public static observedAttributes = ['title'];
  _color = 'red';

  get color() {
    return this._color;
  }

  set color(value: string) {
    console.log(value)
    if (value) {
      this._color = value;
      this.updateTextColor();
    }
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('Appended and connected to document');
  }

  disconnectedCallback() {
    console.log('Disconnected from document');
  }

  updateTextColor() {
    const h1 = this.shadowRoot?.querySelector('h1');
    console.log('color', this.color)
    if (h1) {
      h1.style.color = this.color;
    }
  }

  attributeChangedCallback(name: string, old: string, value:string) {
    console.log(`Element's attribute ${name} was ${old} is now ${value}`);

    const titleEl = this.shadowRoot?.getElementById('title')
    if (titleEl) {
      titleEl.innerHTML = this.title;
    }
  }

}

customElements.define('custom-title', TitleElement);
