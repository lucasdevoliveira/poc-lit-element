import { LitElement, html, css } from 'lit-element'
import '../../components/super-header/super-header.js'
import '../../components/super-input/super-input.js'
import '../../components/super-button/super-button.js'
import '../../styles/reset-styles.js'
import { buttonStyles } from '../../styles/reset-styles.js';

class AccountPage extends LitElement {
  static get styles() {
    return [
      buttonStyles,
      css`
        main {
          padding: 0 26px;
        }
        .text-center {
          text-align: center;
        }
        .separator {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px 0 0 0;
        }
        .separator > p {
          margin: 0;
          padding: 0 15px;
          font-size: 18px;
        }
        .separator hr {
          width: 100%;
          border-color: #ccc;
          border-top: 1px;
        }
        .separator-2 {
          border: solid 1px #dddddd;
          margin: 15px 0 0 0;
        }
        .text-bold {
          font-weight: bold;
          color: #50525f;
        }
        .text-privacity {
          margin: 15px 0 0 0;
        }
        .text-has-account {
          margin: 15px 0 0 0;
        }
      `
    ];
  }

  constructor() {
    super();
  }
  
  render() {
    return html`
      <super-header></super-header>
      <main>
        <h1 class="text-center">Criar conta</h1>
        <p class="text-center">Atenção: um e-mail válido é a garantia de acesso aos seus ingressos.</p>
        <super-button facebook value="ACESSAR COM FACEBOOK"></super-button>
        <div class="separator">
          <hr>
          <p>OU</p>
          <hr>
        </div>
        <super-input 
          type="text"
          placeholder="Nome completo">
        </super-input>
        <super-input 
          type="text"
          placeholder="Senha">
        </super-input>
        <super-input 
          type="text"
          placeholder="E-mail">
        </super-input>
        <super-input 
          type="text"
          placeholder="Confirmar E-mail">
        </super-input>
        <super-button value="CADASTRAR"></super-button>
        <p class="text-center text-privacity">Ao me cadastrar, concordo com os <a href="#">Termos de uso</a> e <a href="#">Política de Privacidade</a> da Sympla.</p>
        <hr class="separator-2">
        <p class="text-has-account text-center text-bold">Já possui uma conta? <a href="#">Faça login!</a></p>
      </main>
    `;
  }
}

customElements.define('account-page', AccountPage);