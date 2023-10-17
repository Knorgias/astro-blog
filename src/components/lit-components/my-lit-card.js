import { html, css, LitElement } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

export class MyLitCard extends LitElement {
  static styles = css`
      :host {
        --_content-before-bg-color: #168989;
        --_border-width: 2px;
        --_primary-color: red;
      }

      .card {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        border-radius: 5px;
        color: black;
        width: 208px;
        border-radius: 5px;
        
        /*typography*/
        font-size: 16px;
        text-align: center;
        border-width: var(--_border-width);
      }
      
      .card-part {
        box-sizing: border-box;
        padding: 1.4rem;
        border-width: var(--_border-width);
        border-style: solid;
        border-color: var(--_primary-color);

        text-align: center;
        margin-top: -2px;
      }
      
      .card-part__header {
         font-weight: bold;
         color: var(--_primary-color);
         position: relative;
         border-top-left-radius: inherit;
         border-top-right-radius: inherit;
      }
      
      .card-part__header:after {
        content: '🐞';
        font-size: 2rem;
        position: absolute;
        top: -1.4rem;
        left: 50%;
        transform: translateX(-50%);
      }
      .card-part__header:before {
        content: 'S';
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--_content-before-bg-color);
        color: white;
        border-radius: 50%;
        width: 1.8rem;
        height: 1.8rem;
        font-size: 0.7rem;
        position: absolute;
        text-align: bottom;
        top: -0.7rem;
        left: 0%;
        transform: translateX(-50%);
      }
      
      .card-part__body {
        height: 200px;
        font-size: .7rem;
      }
      
      .card-part__body > ul {
        list-style-type: none;
        line-height: 1.5;
        padding: 0;
      }
      
      .card-part__footer {
        position: relative;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
      }
  `;

  static properties = {
    headerContent: { type: String },
    bodyContent: { type: String },
    bodyList: { type: Array },
    footerContent: { type: String },
    primaryColor: { type: String },
    defaultStyle: { type: Boolean },
  };

  constructor() {
    super();
    this.headerContent = "My Card's header";
    this.bodyContent =
      'Components not behaving according to requirements or specification';
    this.bodyList = [
      'Detect fixes or performance upgrade',
      'Documentation error fixes',
      'OJ Figma Library Fixes',
    ];
    this.footerContent = "My Card's footer";
    this.defaultStyle = true;
  }

  __renderHeader() {
    const cardPartStyles = this.__generateCardPartStyles();
    return html`
       <div style=${styleMap(
         cardPartStyles
       )} class="card-part card-part__header">${this.headerContent}</div>
    `;
  }

  __renderBody() {
    const cardPartStyles = this.__generateCardPartStyles();
    return html`
       <div style=${styleMap(cardPartStyles)} class="card-part card-part__body">
          <span>${this.bodyContent}</span>
          <ul>
            ${this.bodyList.map(
              (item, index) => html`
                  <li>${item}</li>
                `
            )}
          </ul>
       </div>
    `;
  }

  __renderFooter() {
    const cardPartStyles = this.__generateCardPartStyles();
    return html`
       <div style=${styleMap(
         cardPartStyles
       )} class="card-part card-part__footer">${this.footerContent}</div>
    `;
  }

  __generateCardPartStyles() {
    return {
      borderColor: this.defaultStyle ? 'black' : 'red',
    };
  }

  render() {
    return html`
      <div class="card">
        ${this.__renderHeader()}
        ${this.__renderBody()}
        ${this.__renderFooter()}
      </div>
    `;
  }
}
customElements.define('my-lit-card', MyLitCard);
