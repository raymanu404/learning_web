//DEFINE CUSTOM TEMPLATE ELEMENT
customElements.define('star-rating',
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const starRating = document.getElementById('star-rating-template2').content;
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(starRating.cloneNode(true));
  }
});

class CustomCard extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const cardTemplate = document.getElementById('card-template').content;
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.appendChild(cardTemplate.cloneNode(true));
  }
}

class CustomStarRatingV2 extends HTMLElement {
  constructor(){
    super();
      const customStarRatingTemplate = document.getElementById('star-rating-template2')
      const customStarRatingTemplateContent = customStarRatingTemplate.content
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.appendChild(customStarRatingTemplateContent.cloneNode(true));
  }
}
class RandomTemplate extends HTMLElement {
  constructor(){
    super();
    const randomTemplate = document.getElementById('random-template').content
      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.appendChild(randomTemplate.cloneNode(true));
  }
}

class CustomNotesTemplate extends HTMLElement{
  constructor(){
    super()
    const template = document.getElementById('notes-template')
    const templateContent = template.content
    const shadowRoot =  this.attachShadow({mode: 'open'});

    shadowRoot.appendChild(templateContent.cloneNode(true));

  }
}

class CustomExampleTemplate extends HTMLElement{
  constructor(){
    super()
    const template = document.getElementById('example-container-template')
    const templateContent = template.content
    const shadowRoot =  this.attachShadow({mode: 'open'});

    shadowRoot.appendChild(templateContent.cloneNode(true));

  }
}


class SectionTemplate extends HTMLElement{
  constructor(){
    super()
    const template = document.getElementById('section-template')
    const templateContent = template.content
    const shadowRoot =  this.attachShadow({mode: 'open'});

    shadowRoot.appendChild(templateContent.cloneNode(true));

  }
}


customElements.define('card-template', CustomCard);
customElements.define('custom-star-rating', CustomStarRatingV2);
customElements.define('random-template', RandomTemplate);
customElements.define('notes-template', CustomNotesTemplate);
customElements.define('example-template', CustomExampleTemplate);
customElements.define('section-template', SectionTemplate);