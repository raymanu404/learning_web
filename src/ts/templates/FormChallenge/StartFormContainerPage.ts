import { injectHTML } from '../../common/utils.js';

class StartFormContainerPageTemplate extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  // Lifecycle method called when the element is added to the DOM (same like in react)
  async connectedCallback() {
    // console.log('Custom element added to DOM');
    const template = document.createElement('template');

    // Inject HTML content into the element
    await injectHTML('final_form_pages/startFormContainerPage.html ', template);
    // console.log(template.innerHTML);

    const content = template.content;
    this.shadow.appendChild(content.cloneNode(true));

    // console.log('Custom element Done');
  }
}

customElements.define(
  'start-form-container-page-template',
  StartFormContainerPageTemplate,
);