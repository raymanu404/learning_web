//<!-- THIS IS NOT RENDERED INTO SCREEN, WE NEED JS TO RENDER IT IN REAL DOM, UNTIL THEN THIS IS JUST IN SHADOW DOM  -->
const starRatingTemplate = document.createElement("template")
starRatingTemplate.innerHTML = `
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
    `
const starRatingTemplate2 = document.createElement("template")
starRatingTemplate2.innerHTML = `
    <form>
        <fieldset>
          <slot name="star-rating-legend">
            <legend>Rate your experience:</legend>
          </slot>
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
    `

const cardTemplate = document.createElement("template")
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
    `

const exampleTemplate = document.createElement("template")
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
`

const sectionTemplate = document.createElement("template")
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
`

const notesTemplate = document.createElement("template")
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
`

//DEFINE CUSTOM TEMPLATE ELEMENT
customElements.define(
  "star-rating",
  class extends HTMLElement {
    constructor() {
      super() // Always call super first in constructor
      const content = starRatingTemplate.content
      const shadowRoot = this.attachShadow({ mode: "open" })
      shadowRoot.appendChild(content.cloneNode(true))
    }
  }
)

class CustomCard extends HTMLElement {
  constructor() {
    super() // Always call super first in constructor

    const content = cardTemplate.content
    const shadowRoot = this.attachShadow({ mode: "open" })
    shadowRoot.appendChild(content.cloneNode(true))
  }
}

class CustomStarRatingV2 extends HTMLElement {
  constructor() {
    super()

    const content = starRatingTemplate2.content
    const shadowRoot = this.attachShadow({ mode: "open" })

    shadowRoot.appendChild(content.cloneNode(true))
  }
}
class RandomTemplate extends HTMLElement {
  constructor() {
    super()
    const template = document.getElementById(
      "random-template"
    ) as HTMLTemplateElement
    const content = template.content
    const shadowRoot = this.attachShadow({ mode: "open" })

    shadowRoot.appendChild(content.cloneNode(true))
  }
}

class CustomNotesTemplate extends HTMLElement {
  constructor() {
    super()

    const content = notesTemplate.content
    const shadowRoot = this.attachShadow({ mode: "open" })

    shadowRoot.appendChild(content.cloneNode(true))
  }
}

class CustomExampleTemplate extends HTMLElement {
  constructor() {
    super()

    const templateContent = exampleTemplate.content
    const shadowRoot = this.attachShadow({ mode: "open" })

    shadowRoot.appendChild(templateContent.cloneNode(true))
  }
}

class SectionTemplate extends HTMLElement {
  constructor() {
    super()

    const templateContent = sectionTemplate.content
    const shadowRoot = this.attachShadow({ mode: "open" })

    shadowRoot.appendChild(templateContent.cloneNode(true))
  }
}

customElements.define("card-template", CustomCard)
customElements.define("random-template", RandomTemplate)
customElements.define("notes-template", CustomNotesTemplate)
customElements.define("example-template", CustomExampleTemplate)
customElements.define("section-template", SectionTemplate)
