const likeButton = document.getElementById('like-button');
let likeButtonCount = 0;
likeButton?.addEventListener('click', () => {
  likeButtonCount++;
  alert(`You like this form for ${likeButtonCount}`);
});

//custom validity message
const usernameInput = document.querySelector(
  '[name="username-2"]',
) as HTMLInputElement;

usernameInput?.addEventListener('invalid', () => {
  usernameInput.setCustomValidity(
    'Please introduce  At least 2 chars, maximum 20, lowercase, uppercase, digits only',
  );
});

const formInput3 = document.getElementById('username-3') as HTMLInputElement;
const errorMessage = document.getElementById(
  'username3-validation',
) as HTMLSpanElement;

formInput3?.addEventListener(
  'blur',
  (event) => {
    // Validate the field
    const lowerLetters = new RegExp('[a-z]');
    const upperLetters = new RegExp('[A-Z]');
    const digits = new RegExp('[0-9]');

    const value = formInput3.value;
    let message = '';
    if (
      !lowerLetters.test(value) &&
      !upperLetters.test(value) &&
      !digits.test(value)
    ) {
      message += 'Your input must contain lower, upper letters or digits\n';
    } else {
      message = '';
    }

    if (value.length < 2 || value.length > 20) {
      message += 'Your input must has a length between 2 and 20 characters\n';
    } else {
      message = '';
    }

    errorMessage.innerText = message;
  },
  true,
);

formInput3?.addEventListener('focus', (ev) => {
  errorMessage.innerText = '';
});

const formValidationExample3 = document.getElementById(
  'form-container-validation-example-3-id',
);

const hiddenElemsLength = formValidationExample3?.children;

// 🟦#01.CHALLENGE: SHOW INPUTS BY USER INTERACTIONS ✅

//select options elements
const options = document.getElementsByName('preference-example-1');
const inputOptions = document.getElementsByName(
  'preference-example-1-input-container',
);

const optionsArray = Array.from(options);
const optionArrayIds = optionsArray.map((x) => x.id);
const inputOptionsArray = Array.from(inputOptions);

const optionClickHandler = (event: MouseEvent) => {
  const target = event.target;
  if (target instanceof HTMLElement) {
    const { id } = target;
    const optionIdString = id.substring(id.indexOf('option'));
    if (optionArrayIds.find((item) => item === id)) {
      inputOptionsArray.forEach((input) => {
        if (input.id.includes(optionIdString)) {
          input.classList.add('display-block');
        } else {
          input.classList.remove('display-block');
        }
      });
    }
  }
};

options.forEach((value) => value.addEventListener('click', optionClickHandler));

// 🟦#02.CHALLENGE: MAKE payment validation (maybe makes UI updates like card number to display with dashes, expiry date, security code etc...) from section: #miscellaneous-section example 2

//TODO: EXTRACT ALL CONSTS AND REUSEABLE COMPS LATER
// CREATE MAP BETWEEN PAYMENT INPUTS NAMES
const PAYMENT_INPUTS_MAPPER = {
  NAME_ON_CARD: 'name',
  CARD_NUMBER: 'card-number',
  EXPIRY_DATE: 'expiry-date',
  SECURITY_CODE: 'security-code',
};
const PAYMENT_ID_SUFFIX = 'example-2';

const PAYMENT_FIELD_INPUTS_MAPPER = {
  NAME_ON_CARD: `${PAYMENT_INPUTS_MAPPER.NAME_ON_CARD}-${PAYMENT_ID_SUFFIX}`,
  CARD_NUMBER: `${PAYMENT_INPUTS_MAPPER.CARD_NUMBER}-${PAYMENT_ID_SUFFIX}`,
  EXPIRY_DATE: `${PAYMENT_INPUTS_MAPPER.EXPIRY_DATE}-${PAYMENT_ID_SUFFIX}`,
  SECURITY_CODE: `${PAYMENT_INPUTS_MAPPER.SECURITY_CODE}-${PAYMENT_ID_SUFFIX}`,
};

type AllowedPaymentKeys =
  | 'name-example-2'
  | 'card-number-example-2'
  | 'expiry-date-example-2'
  | 'security-code-example-2';

const ERROR_MESSAGE_SUFFIX = 'error-message';

const PAYMENT_NAME_ON_CARD_INPUT_MIN_LENGTH = 1;
const PAYMENT_NAME_ON_CARD_INPUT_MAX_LENGTH = 50;

//PAYMENT INPUTS
const paymentNameInput = document.getElementById(
  PAYMENT_FIELD_INPUTS_MAPPER.NAME_ON_CARD,
) as HTMLInputElement;
const paymentNumberInput = document.getElementById(
  PAYMENT_FIELD_INPUTS_MAPPER.CARD_NUMBER,
) as HTMLInputElement;
const expiryInput = document.getElementById(
  PAYMENT_FIELD_INPUTS_MAPPER.EXPIRY_DATE,
) as HTMLInputElement;
const securityCodeInput = document.getElementById(
  PAYMENT_FIELD_INPUTS_MAPPER.SECURITY_CODE,
) as HTMLInputElement;

//PAYMENT INPUTS ERROR MESSAGE LABELS
const paymentNameErrorMessage = document.getElementById(
  `${PAYMENT_FIELD_INPUTS_MAPPER.NAME_ON_CARD}-${ERROR_MESSAGE_SUFFIX}`,
) as HTMLSpanElement;
const paymentNumberErrorMessage = document.getElementById(
  `${PAYMENT_FIELD_INPUTS_MAPPER.CARD_NUMBER}-${ERROR_MESSAGE_SUFFIX}`,
) as HTMLSpanElement;
const expiryErrorMessage = document.getElementById(
  `${PAYMENT_FIELD_INPUTS_MAPPER.EXPIRY_DATE}-${ERROR_MESSAGE_SUFFIX}`,
) as HTMLSpanElement;
const securityCodeErrorMessage = document.getElementById(
  `${PAYMENT_FIELD_INPUTS_MAPPER.SECURITY_CODE}-${ERROR_MESSAGE_SUFFIX}`,
) as HTMLSpanElement;

//PAYMENT SUBMIT BUTTON
const paymentSubmitBtn = document.getElementById(
  `payment-${PAYMENT_ID_SUFFIX}-button`,
) as HTMLButtonElement;

//REGEX AND ERROR MESSAGES
const nameInputReg = /^[A-Za-z\s]+$/;
const cardNumberInputReg = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
const expiryDateInputReg = new RegExp(
  `^(0[1-9]|1[0-2])/(${24}[0-9]|[3-9][0-9])$`,
);
const securityCodeInputReg = /^\d{3}$/;

// ERROR MESSAGES
const errorPaymentNameInputMessage =
  "Should have: uppercase and lowercase letters, spaces, wihtout special characters like (#@!_()[]./')";
//Check validation for each input by onBlur method

interface PaymentFieldStateI {
  isValid: boolean;
  pattern: RegExp;
}

type FormFieldStateI = {
  [key in AllowedPaymentKeys]: PaymentFieldStateI;
};

const formFieldDefault: FormFieldStateI = {
  'name-example-2': {
    pattern: nameInputReg,
    isValid: false,
  },
  'card-number-example-2': {
    pattern: cardNumberInputReg,
    isValid: false,
  },
  'expiry-date-example-2': {
    pattern: expiryDateInputReg,
    isValid: false,
  },
  'security-code-example-2': {
    pattern: securityCodeInputReg,
    isValid: false,
  },
};

//SET VALIDATION FOR NAME ON CARD
paymentNameInput.maxLength = PAYMENT_NAME_ON_CARD_INPUT_MAX_LENGTH;
paymentNameInput?.addEventListener('blur', (event) => {
  paymentNameInput.setCustomValidity(errorPaymentNameInputMessage);
  //TODO: refactor this method to be generic one
  const target = event.target;
  if (target instanceof HTMLInputElement) {
    const { value } = target;
    if (value.length > 1) {
      paymentNameInput.pattern = nameInputReg.source;
      if (!nameInputReg.test(value)) {
        paymentNameErrorMessage.innerText = errorPaymentNameInputMessage;
      } else {
        paymentNameErrorMessage.innerText = '';
      }
    }

    if (value.length === 0) {
      paymentNameInput.removeAttribute('pattern');
      console.log('remove pattern');
    }
  }
});

paymentSubmitBtn.addEventListener('click', () => {
  if (
    !nameInputReg.test(paymentNameInput.value) &&
    paymentNameInput.hasAttribute('pattern')
  ) {
    paymentNameInput.setCustomValidity(errorPaymentNameInputMessage);
  } else {
    paymentNameInput.setCustomValidity('');
  }
});

//SET VALIDATION FOR CARD NUMBER
// paymentNameInput.maxLength = PAYMENT_NAME_ON_CARD_INPUT_MAX_LENGTH
// paymentNameInput?.addEventListener('blur', (event)=>{
//   const target = event.target
//   if(target instanceof HTMLInputElement){
//     const {value} = target
//     if(value.length > 1){
//       const errorPaymentNameInputMessage = "Should have: uppercase and lowercase letters, spaces, wihtout special characters like (#@!_()[]./')"
//       const regexString = "^[A-Za-z\s]+$"
//       const nameInputReg = new RegExp(regexString)
//       paymentNameInput.pattern = regexString
//       if(!nameInputReg.test(value)){
//         paymentNameInput.setCustomValidity(errorPaymentNameInputMessage)
//       }
//     }

//     if(value.length === 0){
//       paymentNameInput.removeAttribute('pattern')
//     }
//   }
// })

// paymentNameInput?.addEventListener('change', (event)=> {
//   const target = event.target
//   if(target instanceof HTMLInputElement){
//     const {value} = target

//   }
// })
