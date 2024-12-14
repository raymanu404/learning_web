class AddressInfoContainerPageTemplate extends HTMLElement {
  constructor() {
    super();
    const mainNavTemplate = document.createElement('template');
    mainNavTemplate.innerHTML = `
    //   <style>
  
    //     header ul {
    //       margin: 0;
    //     }

    //     .main-navigation {
    //       height: 50px;
    //       display: flex;
    //       align-items: center;
    //     }
    //   </style>

    //   <header>
    //     <section class="main-navigation">
    //       <nav aria-label="Main Navigation">
    //         <slot name="main-nav-content-legend"> 
    //         </slot>
    //       </nav>
    //     </section>
    //   </header>
    `;

    const templateContent = mainNavTemplate.content;
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}

customElements.define(
  'address-info-container-page-template',
  AddressInfoContainerPageTemplate,
);
