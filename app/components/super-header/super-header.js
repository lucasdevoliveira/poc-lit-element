import { LitElement, html, css } from 'lit-element';

class SuperHeader extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        header {
          width: 100%;
          height: 56px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 0 4px 0 rgba(0, 0, 0, 0.12);
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .back-button {
          left: 0;
          position: absolute;
          height: 24px;
          margin: 0 0 0 26px;
        }
      `
    ];
  }

  render() {
    return html`
      <header>
        <div class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#0083FF" fill-rule="nonzero" d="M20 11v2H7.8l5.6 5.6L12 20l-8-8 8-8 1.4 1.4L7.8 11z" />
          </svg>
        </div>
        <img alt="Logo da Sympla" width="85" src="../../app/images/logo.svg" />
      </header>
    `;
  }
}

customElements.define('super-header', SuperHeader);
