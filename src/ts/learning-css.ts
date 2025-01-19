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

//HTML EVENTS
switchMBoxModel1Btn.addEventListener('input', () => {
  const checked = switchMBoxModel1Btn.checked;
  switchIntrinsicFn(checked, boxModelExample1, intrinsicSpan1, extrinsicSpan1);
});

switchMBoxModel2Btn.addEventListener('input', () => {
  const checked = switchMBoxModel2Btn.checked;
  switchIntrinsicFn(checked, boxModelExample2, intrinsicSpan2, extrinsicSpan2);
});
