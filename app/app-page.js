import { LitElement, html, css } from 'lit-element';
import './pages/account-page/account-page';

class AppPage extends LitElement {
  static get styles() {
    return [
      css`
        * {
          margin: 0px;
          padding: 0px;
        }
        :host {
          display: block;
        }
      `
    ];
  }

  static get properties() {
    return {
      active: {
        type: Boolean
      }
    };
  }

  render() {
    return html`
      <account-page></account-page>
    `;
  }
}

customElements.define('app-page', AppPage);
