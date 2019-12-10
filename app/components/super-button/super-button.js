import { LitElement, html, css } from 'lit-element';
import { buttonStyles } from '../../styles/reset-styles.js';

class SuperButton extends LitElement {
  static get styles() {
    return [
      buttonStyles,
      css`
        :host {
          display: block;
        }
        :host([facebook]) button {
          background: #3b5998;
        } 

        button {
          width: 100%;
          height: 45px;
          border-radius: 4px;
          background: #58c22e;
          color: #fff;
          font-weight: bold;
          margin: 20px 0 0 0;
          font-size: 14px;
        }
      `
    ];
  }

  static get properties() {
    return {
      value: String
    }
  }

  constructor() {
    super();
  }
  
  render() {
    return html`
      <button>${this.value}</button>
    `;
  }
}

customElements.define('super-button', SuperButton);