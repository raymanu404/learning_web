"use strict";
const changeUlType = () => {
    const getList = document.querySelector("#custom-ul");
    if (getList) {
        getList.addEventListener("change", (ev) => {
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
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.add("display-none");
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.addEventListener("click", stopHandler, false);
function stopHandler() {
    var _a;
    const media = document.getElementById("video-controller");
    media === null || media === void 0 ? void 0 : media.pause();
    pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.remove("display-block");
    pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.add("display-none");
    playButton === null || playButton === void 0 ? void 0 : playButton.classList.add("display-block");
    (_a = document.querySelector("[aria-controls]")) === null || _a === void 0 ? void 0 : _a.removeAttribute("controls");
}
function playHandler() {
    var _a;
    const media = document.getElementById("video-controller");
    if (media === null || media === void 0 ? void 0 : media.paused) {
        media.play();
        playButton === null || playButton === void 0 ? void 0 : playButton.classList.remove("display-block");
        playButton === null || playButton === void 0 ? void 0 : playButton.classList.add("display-none");
        pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.add("display-block");
    }
    (_a = document.querySelector("[aria-controls]")) === null || _a === void 0 ? void 0 : _a.removeAttribute("controls");
}
const containerToRender = document.querySelector("#render-template-rating-stars");
const ratingTemplate = document.getElementById("custom-star-rating-template");
const ratingTemplateContent = ratingTemplate === null || ratingTemplate === void 0 ? void 0 : ratingTemplate.content;
containerToRender === null || containerToRender === void 0 ? void 0 : containerToRender.appendChild(ratingTemplateContent);
const modalDialogButtonExample1 = document.getElementById("modal-dialog-button-open");
const modalDialogContainerExample1 = document.getElementById("modal-dialog-container-example1");
modalDialogButtonExample1 === null || modalDialogButtonExample1 === void 0 ? void 0 : modalDialogButtonExample1.addEventListener("click", (ev) => {
    modalDialogContainerExample1 === null || modalDialogContainerExample1 === void 0 ? void 0 : modalDialogContainerExample1.showModal();
});
const modalDialogCloseButtonExample1 = document.getElementById("jsbutton");
modalDialogCloseButtonExample1 === null || modalDialogCloseButtonExample1 === void 0 ? void 0 : modalDialogCloseButtonExample1.addEventListener("click", (ev) => {
    modalDialogContainerExample1.close();
});
const nonModalDialogButtonExample2 = document.getElementById("non-modal-dialog-button-open");
nonModalDialogButtonExample2 === null || nonModalDialogButtonExample2 === void 0 ? void 0 : nonModalDialogButtonExample2.addEventListener("click", (ev) => {
    modalDialogContainerExample1 === null || modalDialogContainerExample1 === void 0 ? void 0 : modalDialogContainerExample1.show();
});
//# sourceMappingURL=index.js.map