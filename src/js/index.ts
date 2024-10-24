const changeUlType = () => {
  const getList = document.querySelector("#custom-ul");
  if (getList) {
    getList.addEventListener("change", (ev: any) => {
      const example = document.querySelector("#custom-ol");
      if (example && ev && ev.target && ev.target.value) {
        example.setAttribute("style", `list-style-type: ${ev.target.value}`);
      }
    });
  }
};

changeUlType();

const playButton = document.querySelector("#play-button ");
if (playButton) {
  playButton.classList.add("display-block");
  playButton.addEventListener("click", playHandler, false);
}

const pauseButton = document.querySelector("#pause-button ");
pauseButton?.classList.add("display-none");
pauseButton?.addEventListener("click", stopHandler, false);

function stopHandler() {
  const media = document.getElementById("video-controller") as HTMLMediaElement;
  media?.pause();
  pauseButton?.classList.remove("display-block");
  pauseButton?.classList.add("display-none");
  playButton?.classList.add("display-block");

  document.querySelector("[aria-controls]")?.removeAttribute("controls");
}

function playHandler() {
  const media = document.getElementById("video-controller") as HTMLMediaElement;
  if (media?.paused) {
    media.play();
    playButton?.classList.remove("display-block");
    playButton?.classList.add("display-none");
    pauseButton?.classList.add("display-block");
  }

  document.querySelector("[aria-controls]")?.removeAttribute("controls");
}

//TO RENDER TEMPLATE EXAMPLE 1
const containerToRender = document.querySelector(
  "#render-template-rating-stars"
);
const ratingTemplate = document.getElementById(
  "custom-star-rating-template"
) as HTMLTemplateElement;
const ratingTemplateContent = ratingTemplate?.content;
containerToRender?.appendChild(ratingTemplateContent);

const modalDialogButtonExample1 = document.getElementById(
  "modal-dialog-button-open"
);

const openDialogExample1Handler = (ev: Event) => {
  const modalDialogContainerExample1 = document.getElementById(
    "modal-dialog-container-example1"
  ) as HTMLDialogElement;

  modalDialogContainerExample1.showModal();
};

modalDialogButtonExample1?.addEventListener("click", openDialogExample1Handler);
