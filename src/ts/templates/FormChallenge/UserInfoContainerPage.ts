// Fetch the HTML file and inject its content
//TODO export this later
async function injectHTML(
  filePath: string,
  targetElement: HTMLTemplateElement | null,
) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load HTML file: ${response.statusText}`);
    }

    const htmlContent = await response.text(); // Get HTML as string

    if (targetElement) {
      const contentConvertedStart = htmlContent.search('script');
      const HtmlContentConverted = htmlContent.slice(
        0,
        contentConvertedStart - 1,
      );
      targetElement.innerHTML = HtmlContentConverted.toString(); // Inject into innerHTML
    }
  } catch (error) {
    console.error('Error injecting HTML:', error);
  }
}

class UserInfoContainerPageTemplate extends HTMLElement {
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
    await injectHTML('userInfoContainerPage.html ', template);
    // console.log(template.innerHTML);

    const content = template.content;
    this.shadow.appendChild(content.cloneNode(true));

    // console.log('Custom element Done');
  }
}

customElements.define(
  'user-info-container-page-template',
  UserInfoContainerPageTemplate,
);
