import { html, css, LitElement } from 'lit';
import { Image } from 'astro:assets';

export class MyCard extends LitElement {
  static styles = css`
    .card {
      display: flex;
      flex-direction: column;
      height: 160px;
      width: 200px;
      border: 2px solid black;
      border-radius: 5px;
      background-color: lightgrey;
    }

    .card img {
      width: 100%;
      height: 80px;
      border-radius: 5px 5px 0 0;
    }

    .card h2 {
      text-align: center;
      border-top: 2px solid black;
      margin-top: 0.5rem;
      font-size: 1.5rem;
    }
  `;

  constructor() {
    super();
    this.imageUrl = '';
    this.title = '';
    this.link = '';
  }

  render() {
    return html`
      <div class="card">
        <image src="${this.imageUrl}" alt="" />
        <h2><a href="${this.link}">${this.title}</a></h2>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);
