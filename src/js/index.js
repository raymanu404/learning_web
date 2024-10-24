var changeUlType = function () {
    var getList = document.querySelector("#custom-ul");
    if (getList) {
        getList.addEventListener("change", function (ev) {
            var example = document.querySelector("#custom-ol");
            if (example && ev && ev.target && ev.target.value) {
                example.setAttribute("style", "list-style-type: ".concat(ev.target.value));
            }
        });
    }
};
changeUlType();
var playButton = document.querySelector("#play-button ");
if (playButton) {
    playButton.classList.add("display-block");
    playButton.addEventListener("click", playHandler, false);
}
var pauseButton = document.querySelector("#pause-button ");
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.add("display-none");
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.addEventListener("click", stopHandler, false);
function stopHandler() {
    var _a;
    var media = document.getElementById("video-controller");
    media === null || media === void 0 ? void 0 : media.pause();
    pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.remove("display-block");
    pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.add("display-none");
    playButton === null || playButton === void 0 ? void 0 : playButton.classList.add("display-block");
    (_a = document.querySelector("[aria-controls]")) === null || _a === void 0 ? void 0 : _a.removeAttribute("controls");
}
function playHandler() {
    var _a;
    var media = document.getElementById("video-controller");
    if (media === null || media === void 0 ? void 0 : media.paused) {
        media.play();
        playButton === null || playButton === void 0 ? void 0 : playButton.classList.remove("display-block");
        playButton === null || playButton === void 0 ? void 0 : playButton.classList.add("display-none");
        pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.classList.add("display-block");
    }
    (_a = document.querySelector("[aria-controls]")) === null || _a === void 0 ? void 0 : _a.removeAttribute("controls");
}
//TO RENDER TEMPLATE EXAMPLE 1
var containerToRender = document.querySelector("#render-template-rating-stars");
var ratingTemplate = document.getElementById("custom-star-rating-template");
var ratingTemplateContent = ratingTemplate === null || ratingTemplate === void 0 ? void 0 : ratingTemplate.content;
containerToRender === null || containerToRender === void 0 ? void 0 : containerToRender.appendChild(ratingTemplateContent);
var modalDialogButtonExample1 = document.getElementById("modal-dialog-button-open");
var openDialogExample1Handler = function (ev) {
    var modalDialogContainerExample1 = document.getElementById("modal-dialog-container-example1");
    modalDialogContainerExample1.showModal();
};
modalDialogButtonExample1 === null || modalDialogButtonExample1 === void 0 ? void 0 : modalDialogButtonExample1.addEventListener("click", openDialogExample1Handler);
