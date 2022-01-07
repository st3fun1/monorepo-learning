const template = document.createElement('template');
template.innerHTML = `
  <style>
    #count {
        color: red;
    }
  </style>

  <p>button clicked <span id="count">0</span> times </p>

  <button id="btCounter" type="button">Click Here</button>
`;

export class DemoCounterElement extends HTMLElement {

  private _count = 0;
  get count(): number {
    return this._count;
  }

  set count(val: number) {
    this._count = val
    this.update(this._count);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    const btCounter = this.shadowRoot?.getElementById('btCounter');
    if (btCounter) {
      btCounter.onclick = () => this.increment();
    }

  }

  increment() {
    this.update(++this.count);
  }

  update(count: number) {
    const countEl = this.shadowRoot?.getElementById('count')
    if (countEl) {
      countEl.innerHTML = count.toString();
    }
  }
}

customElements.define('custom-counter', DemoCounterElement);
