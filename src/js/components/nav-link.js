import {LitElement, html, css} from 'lit-element';

class NavigationLink extends LitElement {
    static get properties() {
        return {
          compact: {type: Boolean, default: false, attribute: false},
          href: {type: String, attribute: true},
          label: {type: String, attribute: true}
        };
    }

    static get styles() {
        return css`
li {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
}
::slotted(a) {
  display: block;
  padding: 10px 20px;
  font: 700 16px/18px var(--il-source-sans);
  color: inherit; 
  text-decoration: none;
}
::slotted(a:hover),
::slotted(a:focus) {
  color: var(--il-altgeld);
  text-decoration: underline;
  background-color: white;
  outline: 0;
}
        `;
    }

    constructor() {
      super();
      document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
    }

    handleContentLoaded(evt) {
      this.compact = this.getNavigation().compact;
      this.getNavigation().addEventListener('compact', evt => this.compact = evt.detail);
    }

    getNavigation() {
      let parent = this.parentElement;
      while (parent) {
        if (parent.nodeName === 'IL-NAV') {
          return parent;
        }
        parent = parent.parentElement;
      }
      return undefined;
    }
      
    render() {
      const view = this.compact ? 'compact' : 'full';
      return html`<li class=${view}>
            <slot>
                <a href=${this.href}>${this.label}</a>
            </slot>
        </li>`
    }
}

customElements.define('il-nav-link', NavigationLink);
