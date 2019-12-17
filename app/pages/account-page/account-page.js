import { LitElement, html } from 'lit-element';
import '../../components/super-header/super-header';
import '../../components/super-input/super-input';
import '../../components/super-button/super-button';
import { resets } from '../../styles/base/resets';
import { helpers } from '../../styles/base/helpers';

class AccountPage extends LitElement {
  static get styles() {
    return [resets, helpers];
  }

  render() {
    return html`
      <super-header></super-header>
      <main>
        <h1 class="text-center">Criar conta</h1>
        <p class="text-center">Atenção: um e-mail válido é a garantia de acesso aos seus ingressos.</p>
        <super-button facebook value="ACESSAR COM FACEBOOK"></super-button>
        <div class="separator">
          <hr />
          <p>OU</p>
          <hr />
        </div>
        <super-input type="text" placeholder="Nome completo"></super-input>
        <super-input type="text" placeholder="Senha"></super-input>
        <super-input type="text" placeholder="E-mail"></super-input>
        <super-input type="text" placeholder="Confirmar E-mail"></super-input>
        <super-button value="CADASTRAR"></super-button>
        <p class="text-center text-privacity">
          Ao me cadastrar, concordo com os <a href="#">Termos de uso</a> e <a href="#">Política de Privacidade</a> da
          Sympla.
        </p>
        <hr class="separator-2" />
        <p class="text-has-account text-center text-bold">Já possui uma conta? <a href="#">Faça login!</a></p>
      </main>
    `;
  }
}

customElements.define('account-page', AccountPage);
