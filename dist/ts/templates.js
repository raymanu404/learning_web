"use strict";
class StarRatingTemplate extends HTMLElement {
    constructor() {
        super();
        const starRatingTemplate = document.createElement("template");
        starRatingTemplate.innerHTML = `
    <style>
    
      rating {
        display: inline-flex;
      }

      /* make the current radio visually hidden */
      input[type="radio"] {
        appearance: none;
        margin: 0;
        box-shadow: none;
        /* remove shadow on invalid submit */
      }

      /* generated content is supported on input. */
        input[type="radio"]::after {
          content: "\\2605";
          font-size: 32px;
        }

        /* by default, if no value is selected, all stars are grey */
        input[type="radio"]:invalid::after {
          color: #ddd;
        }

        /* if the rating has focus or is hovered, make all stars darker */
        rating:hover input[type="radio"]:invalid::after,
        rating:focus-within input[type="radio"]:invalid::after {
          color: #888;
        }

        /* make all the stars after the focused one light grey, until a value is selected */
        rating:hover input[type="radio"]:hover ~ input[type="radio"]:invalid::after,
        rating input[type="radio"]:focus ~ input[type="radio"]:invalid::after {
          color: #ddd;
        }

        /* if a value is selected, make them all selected */
        rating input[type="radio"]:valid {
          color: orange;
        }

        /* then make the ones coming after the selected value look inactive */
        rating input[type="radio"]:checked ~ input[type="radio"]:not(:checked)::after {
          color: #ccc;
          content: "\\2606";
          /* optional. hollow star */
        }
     </style>
        <form>
          <fieldset>
            <rating>
              <input
                type="radio"
                name="rating"
                value="1"
                aria-label="1 star"
                required
              />
              <input type="radio" name="rating" value="2" aria-label="2 stars" />
              <input type="radio" name="rating" value="3" aria-label="3 stars" />
              <input type="radio" name="rating" value="4" aria-label="4 stars" />
              <input type="radio" name="rating" value="5" aria-label="5 stars" />
            </rating>
          </fieldset>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
      `;
        const content = starRatingTemplate.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(content.cloneNode(true));
    }
}
class CustomCard extends HTMLElement {
    constructor() {
        super();
        const cardTemplate = document.createElement("template");
        cardTemplate.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 300px;
          font-family: Arial, sans-serif;
        }
        .card-header {
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .card-content {
          font-size: 1em;
          color: #555;
        }
      </style>
      <div class="card">
        <div class="card-header">
          <slot name="header">Default Header</slot>
          <!-- Slot for custom header content -->
        </div>
        <div class="card-content">
          <slot name="content">Default Content</slot>
          <!-- Slot for custom body content -->
        </div>
      </div>
    `;
        const content = cardTemplate.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(content.cloneNode(true));
    }
}
class RandomTemplate extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("random-template");
        const content = template.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(content.cloneNode(true));
    }
}
class CustomNotesTemplate extends HTMLElement {
    constructor() {
        super();
        const notesTemplate = document.createElement("template");
        notesTemplate.innerHTML = `
    <style>
        .section-notes-container {
          background-color: aquamarine;
          padding: 10px 20px;
          margin: 10px 0;
        }
    </style>
      <div class="section-notes-container">
        <h3>NOTES!!!</h3>
        <slot name="notes-slot-legend"></slot>
      </div>
`;
        const content = notesTemplate.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(content.cloneNode(true));
    }
}
class CustomExampleTemplate extends HTMLElement {
    constructor() {
        super();
        const exampleTemplate = document.createElement("template");
        exampleTemplate.innerHTML = `
      <style>
        .example-container {
          padding: 10px 30px;
          background-color: rgb(42, 227, 227);
        }
      </style>
      <div class="example-container">
        <h3>
          Example <slot name="example-number-legend">DEFAULT</slot>:
          <span style="text-transform: uppercase"
            ><slot name="example-slot-legend"> DEAFULT NAME </slot></span
          >
        </h3>
        <slot name="example-container-slot-legend">
          <div>YOUR CUSTOM CONTENT HERE</div>
        </slot>
      </div>
`;
        const templateContent = exampleTemplate.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
class SectionTemplate extends HTMLElement {
    constructor() {
        super();
        const sectionTemplate = document.createElement("template");
        sectionTemplate.innerHTML = `
    <style>
        .section-container {
          padding: 20px 0;
        }

        .section-title {
          font-size: 36px;
          color: rgb(95, 158, 160);
          border-bottom: 2px solid;
          border-color: bisque;
          text-transform: uppercase;
        }
        .section-title:hover {
          color: rgb(95, 158, 160, 0.8);
          cursor: pointer;
        }

        .example-section-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
    </style>
    <section class="section-container">
        <h2 class="section-title">
          <slot name="section-title-legend">DEFAULT SECTION TITLE </slot>
        </h2>

        <div class="example-section-container">
          <slot name="external-notes-container-legend-up"> </slot>
          <slot name="section-example-container-legend">
            <div class="example-container">DEFAULT DIV</div>
          </slot>
          <slot name="external-notes-container-legend-down"> </slot>
        </div>
    </section>
`;
        const templateContent = sectionTemplate.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
class MainNavTemplate extends HTMLElement {
    constructor() {
        super();
        const mainNavTemplate = document.createElement("template");
        mainNavTemplate.innerHTML = `
      <style>
  
        header ul {
          margin: 0;
        }

        .main-navigation {
          height: 50px;
          display: flex;
          align-items: center;
        }
      </style>

      <header>
        <section class="main-navigation">
          <nav aria-label="Main Navigation">
            <slot name="main-nav-content-legend"> 
            </slot>
          </nav>
        </section>
      </header>
    `;
        const templateContent = mainNavTemplate.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
class SideNavigationTemplate extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
      <style>
      .navigation-section {
        position: fixed;
        margin-right: 20px;
        padding: 20px;
      }

      .right-navigation {
        background-color: yellow;
        padding: 5px 20px;
        font-size: 20px;
      }
  
      </style>

        <section
          aria-label="table-of-contents-navigation"
          class="navigation-section"
        >
            <nav aria-label="On this page" class="right-navigation">
             <h2>On this page</h2>
              <slot name="side-nav-content-legend"></slot>
            </nav>
        </section>
    `;
        const templateContent = template.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
class FooterTemplate extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
      <!-- FOOTER -->
      <style>

      footer {
        margin: 0;
         padding: 10px 0;
      }

      </style>
      <footer style="background-color: dimgray; width: 100%">
        <slot name="footer-content-legend"></slot>
      </footer>
    `;
        const templateContent = template.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}
customElements.define("star-rating", StarRatingTemplate);
customElements.define("card-template", CustomCard);
customElements.define("random-template", RandomTemplate);
customElements.define("notes-template", CustomNotesTemplate);
customElements.define("example-template", CustomExampleTemplate);
customElements.define("section-template", SectionTemplate);
customElements.define("main-nav-template", MainNavTemplate);
customElements.define("footer-template", FooterTemplate);
customElements.define("side-nav-template", SideNavigationTemplate);
//# sourceMappingURL=templates.js.map