// 🟦#03.CHALLENGE: CREATE A COMPLEX FORM WITH ALL FIELDS (NAME, EMAIL, PASSWORD, ADDRESS FORM, PAYMENT FORM, FILE INPUT, RADIO BUTTONS, CHECKBOXES ETC)

//#################################################
//TYPES
//#################################################
enum ParamQueryEnum {
  DIALOG = 'isDialog',
}

//#################################################
//HTML ELEMENTS
//#################################################

const openDialogButton = document.getElementById(
  'final_challenge_button',
) as HTMLButtonElement;
const closeDialogButton = document.getElementById(
  'close_button',
) as HTMLButtonElement;
const dialog = document.getElementById(
  'final_form_dialog',
) as HTMLDialogElement;
const backdrop = document.getElementById('backdrop');
const side_nav = document.getElementById('side-nav-id');

//#################################################
//FUNCTIONS
//#################################################

const parseStringToBoolean = (str: string) => {
  return str.toLowerCase() === 'true';
};

const getRouteQueryParams = (searchValue: string): string[] => {
  const { search } = window.location;
  const searchParsed = search.replace('?', '');
  const searchedSplit = searchParsed.split('&');
  const dialogParamPairKey = searchedSplit
    .map((x) => {
      const [key, value] = x.split('=');
      if (key.includes(searchValue)) {
        return [key, value];
      }
    })
    .flat()
    .filter((x) => x !== undefined);

  return dialogParamPairKey;
};

const injectQueryParams = (queryKey: ParamQueryEnum, value: any) => {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  searchParams.set(queryKey, value);

  // Update the browser's URL without reloading
  history.pushState({}, '', `${url.pathname}?${searchParams.toString()}`);
};

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

openDialogButton?.addEventListener('click', () => {
  openDialogFn();
});

closeDialogButton?.addEventListener('click', () => {
  closeDialogFn();
});
