# Lit + TypeScript + Material Web + Webpack Project

This project is a web application built with **Lit** and **TypeScript**, bundled using **Webpack**, and integrates **Material Web Components** for the UI.

## Features

- **Lit** for building fast, lightweight web components.
- **TypeScript** for type-safe JavaScript development.
- **Material Web Components** for beautiful, accessible UI elements.
- **Webpack** for bundling and managing development and production builds.
- **Live reload** for a smooth development experience.

## Getting Started

### Prerequisites

To get started, you need to have **Node.js** installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/avnerma/ts-lit-material-wp.git
   cd yourproject
   ```

2. **Install the dependencies**:
   Make sure you're in the project directory, and run the following command to install the required dependencies:
   ```bash
   npm install
   ```

### Development

During development, you can use the Webpack Dev Server for live reloading and hot module replacement.

1. **Run the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser**:
   Webpack Dev Server will automatically open your default browser, but if not, you can manually open:
   ```
   http://localhost:8080
   ```

3. **Make changes**:
   Any changes made in the source files (`src/`) will trigger a live reload, updating the browser automatically.

### Building for Production

To create a production-ready build, Webpack will minify and optimize the output.

1. **Build the project for production**:
   ```bash
   npm run build
   ```

2. The bundled files will be output into the `dist/` directory, ready for deployment.

### Using Lit and Material Web

This project demonstrates how to create a custom Lit component and integrate Material Web Components. The custom element `<my-element>` is defined in `my-element.ts` and uses Material Web's button component (`md-filled-button`).

#### Example Custom Element (Lit Component)

The custom component is created using Lit, and it can be easily reused:

```html
<my-element name="Lit"></my-element>
```

The component includes a Material Web button, which you can interact with.

#### Example `my-element.ts`:

```ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/button/filled-button.js';

@customElement('my-element')
export class MyElement extends LitElement {
  
  @property({ type: String }) name = 'World';

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <md-filled-button @click=${this.handleClick}>Click me</md-filled-button>
    `;
  }

  handleClick() {
    alert(`Hello, ${this.name}!`);
  }
}
```

### Dependencies

- **[Lit](https://lit.dev/)** - A simple library for building fast, lightweight web components.
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript.
- **[Material Web Components](https://github.com/material-components/material-web)** - Material Design components for the web.
- **[Webpack](https://webpack.js.org/)** - A powerful bundler for JavaScript, CSS, and HTML.

### Scripts

- **`npm run dev`** - Starts the Webpack development server with live reload.
- **`npm run build`** - Bundles the project for production.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
