//HTML ELEMENTS
const switchMBoxModel1Btn = document.querySelector(
  '#switch-box-model-example1-id',
) as HTMLInputElement;

const switchMBoxModel2Btn = document.querySelector(
  '#switch-box-model-example2-id',
) as HTMLInputElement;

const boxModelExample1 = document.querySelector('#box-model-example1');
const boxModelExample2 = document.querySelector('#box-model-example2');
const intrinsicSpan1 = document.querySelector('#intrinsic-example1');
const extrinsicSpan1 = document.querySelector('#extrinsic-example1');

const intrinsicSpan2 = document.querySelector('#intrinsic-example2');
const extrinsicSpan2 = document.querySelector('#extrinsic-example2');

const classSelectorCode = document.querySelector(
  '#class_selector_code',
) as HTMLElement;

const idSelectorCode = document.querySelector(
  '#id_selector_code',
) as HTMLElement;

const attributeSelectorCode = document.querySelector(
  '#attribute_selector_code',
) as HTMLElement;

const attributeSelectorCode2 = document.querySelector(
  '#attribute_selector_code2',
) as HTMLElement;

const attributeSelectorCode3 = document.querySelector(
  '#attribute_selector_code3',
) as HTMLElement;

const code_segment_selectors_section_example1 = document.querySelector(
  '#code_segment_selectors_section_example1',
) as HTMLElement;

const code_segment_selectors_section_example2 = document.querySelector(
  '#code_segment_selectors_section_example2',
) as HTMLElement;

const code_segment_cascade_section_example1 = document.querySelector(
  '#code_segment_cascade_section_example1',
) as HTMLElement;

const code_segment_cascade_section_example2 = document.querySelector(
  '#code_segment_cascade_section_example2',
) as HTMLElement;

const checked1 = switchMBoxModel1Btn.checked;
const checked2 = switchMBoxModel2Btn.checked;

//FUNCTIONS
const switchIntrinsicFn = (
  checked: boolean,
  boxModelExample: Element | null,
  intrinsicSpan: Element | null,
  extrinsicSpan: Element | null,
) => {
  if (checked) {
    boxModelExample?.setAttribute(
      'data-sizing',
      checked ? 'intrinsic' : 'extrinsic',
    );
    intrinsicSpan?.setAttribute('data-display', 'checked');
    extrinsicSpan?.removeAttribute('data-display');
  } else {
    boxModelExample?.removeAttribute('data-sizing');

    extrinsicSpan?.setAttribute('data-display', 'checked');
    intrinsicSpan?.removeAttribute('data-display');
  }
};

switchIntrinsicFn(checked1, boxModelExample1, intrinsicSpan1, extrinsicSpan1);
switchIntrinsicFn(checked2, boxModelExample2, intrinsicSpan2, extrinsicSpan2);

const simpleSelectorCodesContent: {
  htmlElement: HTMLElement | null;
  codeText: string;
}[] = [
  {
    htmlElement: classSelectorCode,
    codeText: `<div class="my-class"></div>
              <button class="my-class"></button>
              <p class="my-class"></p>`,
  },
  {
    htmlElement: idSelectorCode,
    codeText: `<div id="my_id"></div>`,
  },
  {
    htmlElement: attributeSelectorCode,
    codeText: `<div data-type="primary"></div>`,
  },
  {
    htmlElement: attributeSelectorCode2,
    codeText: `<div data-type="primary"></div>
               <div data-type="secondary"></div>`,
  },
  {
    htmlElement: attributeSelectorCode3,
    codeText: `/* A href that contains "example.com" */
                [href*='example.com'] {
                  color: red;
                }

                /* A href that starts with https */
                [href^='https'] {
                  color: green;
                }

                /* A href that ends with .com */
                [href$='.com'] {
                  color: blue;
                }`,
  },
  {
    htmlElement: code_segment_selectors_section_example1,
    codeText: `
              /* Our link is hovered */
              a:hover {
                outline: 1px dotted green;
              }

              /* Sets all even paragraphs to have a different background */
              p:nth-child(even) {
                background: floralwhite;
              }
    `,
  },
  {
    htmlElement: code_segment_selectors_section_example2,
    codeText: `
              .my-element::before {
              content: 'Prefix - ';
            }

            /* Your list will now either have red dots, or red numbers */
            li::marker {
              color: red;
            }
    `,
  },
  {
    htmlElement: code_segment_cascade_section_example1,
    codeText: `
       button {
        color: red;
      }

      button {
        color: blue;
      }  

    `,
  },
  {
    htmlElement: code_segment_cascade_section_example2,
    codeText: `
      .my-element {
        font-size: 1.5rem;
        font-size: clamp(1.5rem, 1rem + 3vw, 2rem);
      }
    `,
  },
];

const injectTextCodeIntoElements = () => {
  simpleSelectorCodesContent.forEach((elem) => {
    if (elem && elem.htmlElement) {
      elem.htmlElement.innerText = elem.codeText;
    }
  });
};

injectTextCodeIntoElements();

//HTML EVENTS
switchMBoxModel1Btn.addEventListener('input', () => {
  const checked = switchMBoxModel1Btn.checked;
  switchIntrinsicFn(checked, boxModelExample1, intrinsicSpan1, extrinsicSpan1);
});

switchMBoxModel2Btn.addEventListener('input', () => {
  const checked = switchMBoxModel2Btn.checked;
  switchIntrinsicFn(checked, boxModelExample2, intrinsicSpan2, extrinsicSpan2);
});
