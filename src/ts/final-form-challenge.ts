// 🟦#03.CHALLENGE: CREATE A COMPLEX FORM WITH ALL FIELDS (NAME, EMAIL, PASSWORD, ADDRESS FORM, PAYMENT FORM, FILE INPUT, RADIO BUTTONS, CHECKBOXES ETC)

import {
  getRouteQueryParams,
  injectQueryParams,
  parseStringToBoolean,
} from './common/utils.js';

//#################################################
//TYPES
//#################################################
enum ParamQueryEnum {
  DIALOG = 'isDialog',
}

enum PageStepEnum {
  PLUS = '+',
  MINUS = '-',
}

//#################################################
//CONSTANTS
//#################################################

let CURRENT_PAGE_DIALOG = 0;
const MIN_PAGE_DIALOG_COUNT = 0;
const MAX_PAGE_DIALOG_COUNT = 3;

//#################################################
//HTML ELEMENTS
//#################################################

const openDialogButton = document.getElementById(
  'final_challenge_button',
) as HTMLButtonElement;

const dialog = document.getElementById(
  'final_form_dialog',
) as HTMLDialogElement;

const backdrop = document.getElementById('backdrop');
const side_nav = document.getElementById('side-nav-id');

const previousPageDialogButton = document.getElementById(
  'previous_page_button',
) as HTMLButtonElement;

const nextPageDialogButton = document.getElementById(
  'next_page_button',
) as HTMLButtonElement;

const closeDialogButton = document.getElementById(
  'close_button',
) as HTMLButtonElement;

const userInfoContainerPage = document.getElementById('user_info_template_id');
const addressInfoContainerPage = document.getElementById(
  'address_info_template_id',
);
const paymentInfoContainerPage = document.getElementById(
  'payment_info_template_id',
);
const startFormContainerPage = document.getElementById(
  'start_form_template_id',
);

const startFormButtonContainer = document.getElementById(
  'start_form_container_button_id',
);

const startFormButton = document.getElementById('start_form_button');

const navigationButtonsContainer = document.getElementById(
  'navigation_bottom_container_id',
);
const submitFormContainer = document.getElementById(
  'submit_form_container_button_id',
);
const submitFormButton = document.getElementById(
  'submit_challenge_form_button',
);

//#################################################
//FUNCTIONS
//#################################################

const openDialogFn = () => {
  dialog.open = true;

  backdrop?.classList.remove('hidden');
  side_nav?.classList.add('hidden');

  injectQueryParams(ParamQueryEnum.DIALOG, true);
};

const closeDialogFn = () => {
  dialog.open = false;

  side_nav?.classList.remove('hidden');
  backdrop?.classList.add('hidden');

  injectQueryParams(ParamQueryEnum.DIALOG, false);
};

const formPagesArray = [
  startFormContainerPage,
  userInfoContainerPage,
  addressInfoContainerPage,
  paymentInfoContainerPage,
];

const formButtonsArray = [
  startFormButtonContainer,
  navigationButtonsContainer,
  submitFormContainer,
];

const showPageInfoContainerPage = (showPageById: string) => {
  formPagesArray.forEach((elem) => {
    if (elem?.id === showPageById) {
      elem.classList.remove('display-none');
      elem.classList.add('display-block');
    } else {
      elem?.classList.remove('display-block');
      elem?.classList.add('display-none');
    }
  });
};

const showBottomContainerPage = (showPageById: string) => {
  formButtonsArray.forEach((elem) => {
    if (elem?.id === showPageById) {
      elem.classList.remove('display-none');
      elem.classList.add('display-block');
    } else {
      elem?.classList.remove('display-block');
      elem?.classList.add('display-none');
    }
  });
};

const changePageHandler = (current_step: number) => {
  switch (current_step) {
    case 0: {
      showPageInfoContainerPage('start_form_template_id');
      showBottomContainerPage('start_form_container_button_id');
      break;
    }
    case 1: {
      showPageInfoContainerPage('user_info_template_id');
      showBottomContainerPage('navigation_bottom_container_id');
      break;
    }
    case 2: {
      showPageInfoContainerPage('address_info_template_id');
      break;
    }
    case 3: {
      showPageInfoContainerPage('payment_info_template_id');
      showBottomContainerPage('submit_form_container_button_id');
      break;
    }
    default: {
      showPageInfoContainerPage('user_info_template_id');
      break;
    }
  }
};

const updateContainerPageHandler = (sign: PageStepEnum) => {
  switch (sign) {
    case PageStepEnum.PLUS: {
      if (CURRENT_PAGE_DIALOG < MAX_PAGE_DIALOG_COUNT) {
        CURRENT_PAGE_DIALOG++;
      }
      break;
    }
    case PageStepEnum.MINUS: {
      if (CURRENT_PAGE_DIALOG > MIN_PAGE_DIALOG_COUNT) {
        CURRENT_PAGE_DIALOG--;
      }
      break;
    }
    default:
      CURRENT_PAGE_DIALOG;
  }

  changePageHandler(CURRENT_PAGE_DIALOG);
};

//#################################################
//EVENTS
//#################################################

window.addEventListener('DOMContentLoaded', () => {
  const [keyParam, valueParam] = getRouteQueryParams(ParamQueryEnum.DIALOG);
  if (
    valueParam &&
    parseStringToBoolean(valueParam) &&
    keyParam === ParamQueryEnum.DIALOG
  ) {
    openDialogFn();
  }
});

openDialogButton?.addEventListener('click', (event) => {
  event.preventDefault();
  openDialogFn();
});

closeDialogButton?.addEventListener('click', (event) => {
  event.preventDefault();
  closeDialogFn();
});

startFormButton?.addEventListener('click', (event) => {
  event.preventDefault();
  updateContainerPageHandler(PageStepEnum.PLUS);
});

previousPageDialogButton?.addEventListener('click', (event) => {
  event.preventDefault();
  updateContainerPageHandler(PageStepEnum.MINUS);
});

nextPageDialogButton?.addEventListener('click', (event) => {
  event.preventDefault();
  updateContainerPageHandler(PageStepEnum.PLUS);
});

submitFormButton?.addEventListener('click', (event) => {
  event.preventDefault();
  alert('just do nothing!');
  closeDialogFn();
});
