import { LitElement, html, css } from 'lit-element';
import { resets } from '../../styles/base/resets';

class SuperButton extends LitElement {
  static get styles() {
    return [
      resets,
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
    };
  }

  render() {
    return html`
      <button>${this.value}</button>
    `;
  }
}

customElements.define('super-button', SuperButton);
