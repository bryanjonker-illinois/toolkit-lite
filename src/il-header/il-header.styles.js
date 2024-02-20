import {css} from "lit";

export default css`
  :host {
    display: block;
    position: relative;
  }
  .header {
    font-family: var(--il-font-sans);
    position: relative;
    box-sizing: border-box;
    border-top: .5rem solid var(--il-orange);
    container-type: inline-size;
    background-color: white;
  }
  .stripe {
    position: relative;
    box-sizing: border-box;
    padding-left: var(--il-page-padding-left);
    padding-right: var(--il-page-padding-left);
  }
  .top.stripe {
    margin-top: -.5rem;
    display: flex;
    padding-bottom: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .bottom.stripe {
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid var(--il-cloud-1);
  }
  .navigation.stripe {
    box-sizing: border-box;
    margin-bottom: -2px;
  }
  .full-width.container:first-child {
    margin-top: -.5rem;
  }
  .branding-and-featured-links {
    display: flex;
    padding: 0 .625rem 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .branding {
    display: block;
    margin-left: -.625rem;
  }
  .branding a {
    all: initial;
    display: block;
    cursor: pointer;
  }
  .branding a:focus {
    outline: 2px dotted var(--il-blue);
  }
  .branding .elements {
    position: relative;
    max-width: 100%;
    height: 3.1875rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .block-i {
    display: block;
    position: relative;
    width: 2.75rem;
    height: 3.1875rem;
    background-color: var(--il-blue);
  }
  .block-i svg {
    display: block;
    position: absolute;
    top: .5rem;
    left: .625rem;
    width: 1.5rem;
    height: 2.1875rem;
  }
  .block-i svg .outline {
    fill: white;
  }
  .block-i svg .fill {
    fill: var(--il-orange);
  }
  .wordmark {
    position: relative;
    height: 3.1875rem;
    display: block;
    padding: 0 .5rem;
    color: var(--il-blue);
    text-transform: uppercase;
    white-space: nowrap;
    text-decoration: none;
    letter-spacing: .056875rem;
    font: 700 .875rem/3.1875rem var(--il-font-montserrat);
  }
  .featured-links {
    padding: 1.125rem 0 0 1.875rem;
  }
  .identity-and-search {
    padding: 0 .625rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .compact .branding {
    padding: 0 1.25rem;
  }
  .compact .identity-and-menu-toggle {
    padding: 0 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .menu-toggle button {
    background-color: var(--il-blue);
    color: white;
    border: 0;
    border-radius: .1875rem;
    padding: .75rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: .6875rem;
  }
  .menu-toggle button:hover {
    background-color: var(--il-orange);
    cursor: pointer;
  }
  .menu-toggle .icon {
    display: block;
    position: relative;
    width: 1.125rem;
    height: 1rem;
  }
  .menu-toggle .icon svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    fill: white;
  }
  .menu-toggle .label {
    display: block;
    color: white;
    font: 700 1.25rem/1 var(--il-font-sans);
    text-transform: uppercase;
  }
  
  .menu {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
  }
  .menu .navigation.stripe {
    padding: 0;
  }
  .menu .featured-links {
    padding: 0;
  }

  @container (min-width: 30rem) {
    .menu {
      width: 30rem;
    }
  }
`