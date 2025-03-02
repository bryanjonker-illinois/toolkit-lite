import { LitElement, html, css } from 'lit';
import styles from './footer.css';

class Footer extends LitElement {
    static get styles() {
        return styles;
    }

    renderWordmark() {
        return html`
<svg class="wordmark" role="img" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 300.9 78.2" xml:space="preserve">
    <title>University of Illinois Urbana-Champaign</title>
    <g class="block-i">
        <path class="block-i__outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1h12zM42.1 60.2h9v15H3v-15h9c1.7 0 3-1.3 3-3V21.1c0-1.7-1.3-3-3-3H3V3h48.1v15h-9c-1.7 0-3 1.3-3 3v36.1c0 1.7 1.4 3.1 3 3.1"/>
        <path class="block-i__fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3" />
    </g>
    <g class="wordmark__text">
        <path class="wordmark__university-of" d="M101 15.9c-3.4 0-5.5-1.9-5.5-5.6V3.1h2.8v7.2c0 2.1 1 3.1 2.7 3.1 1.7 0 2.7-1 2.7-3V3.1h2.8v7.1c.1 3.9-2.1 5.7-5.5 5.7zM123.4 15.7l-6.1-8v8h-2.7V3.1h2.6l5.9 7.8V3.1h2.7v12.7h-2.4zM134 15.7V3.1h2.8v12.7H134zM151.2 15.8h-2.5L143.6 3h3.1l3.3 9 3.3-8.9h3l-5.1 12.7zM163.2 15.7V3.1h9.6v2.5H166v2.6h6v2.5h-6v2.7h6.9v2.5h-9.7zM188.1 15.7l-2.7-4.1h-2.2v4.1h-2.8V3.1h5.8c3 0 4.8 1.6 4.8 4.2 0 2-1.1 3.3-2.7 3.9l3.1 4.5h-3.3zm.1-8.3c0-1.2-.8-1.8-2.2-1.8h-2.8v3.6h2.8c1.4 0 2.2-.7 2.2-1.8zM203 15.9c-1.9 0-3.9-.7-5.4-2l1.6-2c1.1.9 2.3 1.5 3.8 1.5 1.1 0 1.8-.5 1.8-1.2s-.4-1.1-2.6-1.6c-2.6-.7-4.2-1.4-4.2-3.9 0-2.3 1.8-3.8 4.4-3.8 1.8 0 3.4.6 4.7 1.6l-1.4 2.1c-1.1-.8-2.2-1.2-3.3-1.2-1.1 0-1.6.5-1.6 1.1 0 .8.5 1.1 2.7 1.7 2.6.7 4 1.6 4 3.8.1 2.5-1.8 3.9-4.5 3.9zM215.1 15.7V3.1h2.8v12.7h-2.8zM231.5 5.7v10.1h-2.8V5.7h-3.9V3.1h10.5v2.6h-3.8zM249.3 10.7v5h-2.8v-5L241.6 3h3.3l3 5.1L251 3h3.2l-4.9 7.7zM276.9 16c-3.9 0-6.7-2.9-6.7-6.5S273 3 276.9 3s6.7 2.9 6.7 6.5c0 3.5-2.8 6.5-6.7 6.5zm3.8-6.6c0-2.2-1.6-4-3.8-4-2.2 0-3.8 1.8-3.8 3.9 0 2.2 1.6 4 3.8 4 2.2.1 3.8-1.7 3.8-3.9zM293.9 5.6v2.7h6v2.5h-6v4.9h-2.8V3.1h9.6v2.5h-6.8z"/>
        <path class="wordmark__illinois" d="M96.6 57.6V25.2h7.1v32.4h-7.1zM112.2 57.6V25.2h7.1v25.9h16.2v6.5h-23.3zM140.8 57.6V25.2h7.1v25.9h16.2v6.5h-23.3zM169.5 57.6V25.2h7.1v32.4h-7.1zM207.8 57.6L192.1 37v20.6h-7V25.2h6.6l15.2 20v-20h7v32.4h-6.1zM237.8 58.2c-10 0-17.2-7.5-17.2-16.7v-.1c0-9.2 7.3-16.8 17.3-16.8s17.2 7.5 17.2 16.7v.1c0 9.2-7.3 16.8-17.3 16.8zm9.8-16.8c0-5.6-4.1-10.2-9.8-10.2-5.7 0-9.7 4.5-9.7 10.1v.1c0 5.6 4.1 10.2 9.8 10.2 5.8 0 9.7-4.6 9.7-10.2zM262 57.6V25.2h7.1v32.4H262zM289 58.1c-4.9 0-9.9-1.7-13.8-5.2l4.2-5.1c2.9 2.4 6 3.9 9.7 3.9 2.9 0 4.7-1.2 4.7-3.1v-.1c0-1.8-1.1-2.7-6.5-4.1-6.5-1.7-10.7-3.5-10.7-9.9v-.1c0-5.9 4.7-9.8 11.4-9.8 4.7 0 8.8 1.5 12 4.1l-3.7 5.4c-2.9-2-5.7-3.2-8.4-3.2s-4.2 1.3-4.2 2.8v.1c0 2.1 1.4 2.8 7 4.3 6.6 1.7 10.3 4.1 10.3 9.7v.2c-.1 6.4-5 10.1-12 10.1z"/>
        <path class="wordmark__urbana-champaign" d="M96.6 71.7V67h1.8v4.6c0 1.3.7 2 1.8 2s1.8-.7 1.8-2V67h1.8v4.6c0 2.5-1.4 3.7-3.6 3.7-2.3 0-3.6-1.2-3.6-3.6zM110.4 67h3.7c1 0 1.8.3 2.4.8.5.5.7 1.1.7 1.9 0 1.3-.7 2.1-1.8 2.5l2 2.9h-2.1l-1.8-2.6h-1.4v2.6h-1.8V67zm3.6 4c.9 0 1.4-.5 1.4-1.2 0-.8-.5-1.2-1.4-1.2h-1.8V71h1.8zM123.7 67h3.8c.9 0 1.7.3 2.1.7.4.4.6.8.6 1.4 0 .9-.5 1.4-1.1 1.8.9.4 1.5.9 1.5 2 0 1.5-1.2 2.2-3.1 2.2h-3.9V67zm4.7 2.5c0-.5-.4-.8-1.2-.8h-1.8v1.7h1.7c.8-.1 1.3-.3 1.3-.9zm-.9 2.3h-2.1v1.8h2.1c.8 0 1.3-.3 1.3-.9.1-.5-.3-.9-1.3-.9zM139.8 67h1.7l3.5 8.2h-1.9l-.7-1.8h-3.5l-.7 1.8h-1.8l3.4-8.2zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM151.1 67h1.7l3.8 5v-5h1.8v8.2h-1.5l-4-5.2v5.2h-1.8V67zM167.9 67h1.7l3.5 8.2h-1.9l-.7-1.8H167l-.7 1.8h-1.8l3.4-8.2zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM178.6 70.7h3.6v1.7h-3.6v-1.7zM187.8 71.1c0-2.3 1.8-4.2 4.3-4.2 1.5 0 2.5.5 3.2 1.3l-1.1 1.3c-.6-.6-1.3-.9-2.1-.9-1.4 0-2.4 1.1-2.4 2.5s1 2.6 2.4 2.6c.9 0 1.5-.4 2.1-1l1.1 1.2c-.8.9-1.8 1.5-3.4 1.5-2.3-.1-4.1-1.9-4.1-4.3zM201.6 67h1.8v3.2h3.3V67h1.8v8.2h-1.8v-3.3h-3.3v3.3h-1.8V67zM218.1 67h1.7l3.5 8.2h-1.9l-.7-1.8h-3.5l-.7 1.8h-1.8l3.4-8.2zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM229.4 67h1.9l2.1 3.5 2.1-3.5h1.9v8.2h-1.8v-5.3l-2.3 3.5-2.3-3.5v5.3h-1.8V67zM244.4 67h3.3c1.9 0 3.1 1.2 3.1 2.8 0 1.9-1.5 2.9-3.3 2.9h-1.4v2.5h-1.8V67zm3.2 4.2c.9 0 1.4-.5 1.4-1.2 0-.8-.6-1.2-1.5-1.2h-1.4v2.5h1.5zM259 67h1.7l3.5 8.2h-1.9l-.7-1.8h-3.5l-.7 1.8h-1.8L259 67zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM270.4 67h1.8v8.2h-1.8V67zM278.7 71.1c0-2.3 1.8-4.2 4.3-4.2 1.5 0 2.4.4 3.2 1.1l-1.1 1.4c-.6-.5-1.2-.8-2.1-.8-1.3 0-2.3 1.2-2.3 2.5 0 1.5 1 2.6 2.5 2.6.7 0 1.2-.2 1.7-.5V72H283v-1.6h3.5v3.5c-.8.7-2 1.3-3.5 1.3-2.5.1-4.3-1.6-4.3-4.1zM293.1 67h1.7l3.8 5v-5h1.8v8.2h-1.5l-4-5.2v5.2h-1.8V67z"/>
    </g>
</svg>
        `;
    }

    render() {
        return html`
<div class="footer">
    <div class="main section">
        <div class="section-inner">
            <div class="info">
                <div class="campus-wordmark">
                    <a href="https://illinois.edu/">${this.renderWordmark()}</a>
                </div>
                <div class="site">
                    <slot name="contact"></slot>
                </div>
                <div class="social">
                    <slot name="social"></slot>
                </div>
                <div class="parent">
                    <slot name="parent"></slot>
                </div>
            </div>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
    <div class="links section">
        <div class="section-inner">
            <slot name="links"></slot>
        </div>
    </div>
</div>
</div>
        `;
    }
}

customElements.define('il-footer', Footer);
