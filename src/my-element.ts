import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/button/filled-button.js';
// Import JSON data
import data from './data.json';

@customElement('my-element')
export class MyElement extends LitElement {

  @property({ type: String }) name = data.title;

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>${this.name}</h1>
      <p>${data.description}</p>
      <md-filled-button @click=${this.handleClick}>Click me</md-filled-button>
    `;
  }

  handleClick() {
    alert(`Hello, ${this.name}!`);
  }
}
