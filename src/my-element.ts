import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// Import a Material Web component
import '@material/web/button/filled-button.js';

@customElement('my-element')
export class MyElement extends LitElement {
  
  @property({ type: String }) name = 'World';

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    mwc-button {
      margin-top: 20px;
    }
  `;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <!-- Use Material Web Components -->
      <md-filled-button @click=${this.handleClick}>Click me</md-filled-button>
    `;
  }

  handleClick() {
    alert(`Hello, ${this.name}!`);
  }
}
