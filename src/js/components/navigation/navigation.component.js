import { LitElement, html } from 'lit';
import KeyboardIntent from './keyboardIntent';
import Link from './link';
import styles from './navigation.css';

class Navigation extends LitElement {

  // Class methods

  static get properties() {
    return {
      hasCurrentSection: { type: Boolean, default: false, attribute: false },
      view: { type: String, default: 'bar', attribute: true, reflect: true }
    };
  }

  static get styles() {
    return styles;
  }

  // Constructor

  constructor() {
    super();
    this.view = 'bar';
    document.addEventListener('DOMContentLoaded', this.handleContentLoaded.bind(this));
  }

  // Property getters/setters

  get view() {
    return this._view;
  }

  set view(newView) {
    const previousView = this._view;
    if (newView !== previousView) {
      this._view = newView;
      this.requestUpdate('view', previousView);
      this.updateComplete.then(() => {
        const evt = new CustomEvent('viewChange', { detail: { view: newView, previous: previousView } });
        this.dispatchEvent(evt);
      });
    }
  }

  // Lifecycle methods



  // Event handlers

  handleContentLoaded(evt) {
    this.getAllLinks().forEach(a => {
      //a.ilNavLink = new Link(a);
      a.addEventListener('keydown', this.handleLinkKeydown.bind(this));
    })
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.determineViewMode();
        this.positionContents();
      }
    })
    resizeObserver.observe(this);
    this.positionContents();
  }

  handleLinkKeydown(evt) {
    const intent = new KeyboardIntent(evt);
    if (intent.isGoToNext()) {
      this.moveFocusToNext();
    }
  }

  // Object methods

  collapseAllSectionsExcept(section) {
    this.getAllSections().forEach(s => {
      if (s.expanded && !(s === section || s.contains(section))) {
        s.collapse();
      }
    });
  }

  determineViewMode() {
    // TODO TODO
  }

  getAllLinks() {
    return this.querySelectorAll('a');
  }

  getAllLinksAsArray() {
    return [...this.getAllLinks()];
  }

  getAllSections() {
    return this.querySelectorAll('il-nav-section');
  }

  getAllSectionsAsArray() {
    return [...this.getAllSections()];
  }

  getTopLevelSections() {
    return this.getAllSectionsAsArray().filter(s => s.isTopLevel());
  }

  moveFocusToNext() {
    const focused = document.activeElement;
    const links = this.getAllLinksAsArray();
    console.debug(links.indexOf(focused));
  }

  positionContents() {
    // TODO TODO
    return;
    this.getTopLevelSections().forEach(s => s.positionSelf());
  }

  setCurrentSection(section) {
    this.getAllSections().forEach(s => {
      s.current = s === section;
    })
    this.hasCurrentSection = this.getAllSectionsAsArray().some(s => s.current);
  }

  render() {
    return html`
        <nav class=${this.view} aria-label='main menu'>
          <div class="container">
            <slot></slot>
          </div>
        </nav>`
  }
}

customElements.define('il-nav', Navigation);
