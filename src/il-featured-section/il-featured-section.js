import {LitElement, html} from "lit";
import styles from "./il-featured-section.styles";

export class FeaturedSectionComponent extends LitElement {
  static styles = styles;

  render() {
    return html`
      <section>
        <div class="background" role="presentation">
          <slot name="background"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </section>`
  }
}

customElements.define('il-featured-section', FeaturedSectionComponent);