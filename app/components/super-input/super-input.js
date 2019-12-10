import { LitElement, html, css } from 'lit-element';
import { buttonStyles } from '../../styles/reset-styles.js';

class SuperInput extends LitElement {
  static get styles() {
    return [
      buttonStyles,
      css`
        :host {
          display: block;
          margin: 20px 0 0 0;
        }
        .container {
          border-radius: 3px;
          border: solid 1px #8d909a;
          display: flex;
          padding: 12px;
        }
        input {
          width: 100%;
          border: 0;

        }
      `
    ];
  }

  static get properties() {
    return {
      type: String,
      placeholder: String
    }
  }

  constructor() {
    super();
  }
  
  render() {
    return html`
      <div class="container">
        <input type=${this.type} placeholder=${this.placeholder}>
      </div>
    `;
  }
}

customElements.define('super-input', SuperInput);