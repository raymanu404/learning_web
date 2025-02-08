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

const code_segment_cascade_section_specificity_Elements =
  document.querySelectorAll(
    '[data-code-segment="code_segment_cascade_section_specificity_example"]',
  ) as NodeListOf<HTMLElement>;

const flex_section_dropdown_values = document.querySelector(
  '[data-dropdown-custom="flex-dropdown-flex-direction-example"]',
) as HTMLUListElement;

const flex_section_buttonDisplayValue = document.querySelector(
  '[data-dropdown-button="display-value"]',
) as HTMLButtonElement;

const flex_layout_container = document.querySelector(
  '[data-flex-layout="flex-direction"]',
) as HTMLButtonElement;

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

const code_segment_cascade_section_specificity_example_Text_List = [
  `#my-id{
            background:blue
          }`,
  `.my-class {
                  color: red;
                }`,
  `:hover {
                color: red;
              }`,
  `[href='#'] {
                color: red;
              }`,
  `div {
                color: red;
              }`,
  `
        ::selection {
          color: red;
        }`,
  `div .my-special-class .other-special-class:hover{
      color:white
      background:aqua
    }`,
  `.my-special-class .other-special-class:hover{
      color:black
      background:yellow
    }`,
  `.my-special-class {
      color:black !important;
      background:yellow;
    }`,
];

const flexDirectionElemValues = () => {
  const flexDirectionDropdownValues: {
    values: string[];
    elements: HTMLLIElement[];
  } = { elements: [], values: [] };

  for (let i = 0; i < flex_section_dropdown_values.children.length; i++) {
    const element = flex_section_dropdown_values.children.item(
      i,
    ) as HTMLLIElement;

    if (element.textContent)
      flexDirectionDropdownValues.values.push(
        element.textContent?.replaceAll(' ', '').toLocaleLowerCase(),
      );

    flexDirectionDropdownValues.elements.push(element);
  }

  return flexDirectionDropdownValues;
};

const generateFlexItems = (container: HTMLElement, MAX_LENGTH = 9) => {
  for (let i = 1; i <= MAX_LENGTH; i++) {
    // generate children here
    //  <div>
    //                                                     <span class="special_span_class">ITEM 1</span>
    //                                                 </div>
    // const node: Node = {};
    // container.appendChild();
  }
};

const changeFlexDirectionLayout = (value: string) => {
  flex_layout_container.style.flexDirection = value.toLocaleLowerCase();
};

const { elements, values } = flexDirectionElemValues();

elements.forEach((elem) => {
  elem.addEventListener('click', () => {
    flex_section_buttonDisplayValue.innerText = elem.innerText;

    changeFlexDirectionLayout(elem.innerText);

    console.log(flex_layout_container.style.flexDirection);
  });
});

const injectTextCodeIntoElements = () => {
  simpleSelectorCodesContent.forEach((elem) => {
    if (elem && elem.htmlElement) {
      elem.htmlElement.innerText = elem.codeText;
    }
  });

  code_segment_cascade_section_specificity_Elements.forEach((elem, index) => {
    elem.innerText =
      code_segment_cascade_section_specificity_example_Text_List[index];
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

console.log();
