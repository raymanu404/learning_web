// 🟦#03.CHALLENGE: CREATE A COMPLEX FORM WITH ALL FIELDS (NAME, EMAIL, PASSWORD, ADDRESS FORM, PAYMENT FORM, FILE INPUT, RADIO BUTTONS, CHECKBOXES ETC)
console.log('final challenge from form section');

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

openDialogButton?.addEventListener('click', () => {
  dialog.open = true;

  backdrop?.classList.remove('hidden');
  side_nav?.classList.add('hidden');
});

closeDialogButton?.addEventListener('click', () => {
  dialog.open = false;

  side_nav?.classList.remove('hidden');
  backdrop?.classList.add('hidden');
});
