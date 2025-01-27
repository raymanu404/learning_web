const changeUlType = () => {
  const getList = document.querySelector("#custom-ul")
  if (getList) {
    getList.addEventListener("change", (ev) => {
      const example = document.querySelector("#custom-ol")
      if (example && ev && ev.target && ev.target.value) {
        example.setAttribute("style", `list-style-type: ${ev.target.value}`)
      }
    })
  }
}

changeUlType()

const playButton = document.querySelector("#play-button ")
if (playButton) {
  playButton.classList.add("display-block")
  playButton.addEventListener("click", playHandler, false)
}

const pauseButton = document.querySelector("#pause-button ")
pauseButton?.classList.add("display-none")
pauseButton?.addEventListener("click", stopHandler, false)

function stopHandler() {
  const media = document.getElementById("video-controller")
  media?.pause()
  pauseButton?.classList.remove("display-block")
  pauseButton?.classList.add("display-none")
  playButton?.classList.add("display-block")

  document.querySelector("[aria-controls]")?.removeAttribute("controls")
}

function playHandler() {
  const media = document.getElementById("video-controller")
  if (media?.paused) {
    media.play()
    playButton?.classList.remove("display-block")
    playButton?.classList.add("display-none")
    pauseButton?.classList.add("display-block")
  }

  document.querySelector("[aria-controls]")?.removeAttribute("controls")
}

//DIALOG OPERATIONS
const modalDialogButtonExample1 = document.getElementById(
  "modal-dialog-button-open"
)

const modalDialogContainerExample1 = document.getElementById(
  "modal-dialog-container-example1"
)

modalDialogButtonExample1?.addEventListener("click", (ev) => {
  modalDialogContainerExample1?.showModal()
})

const modalDialogCloseButtonExample1 = document.getElementById("jsbutton")

modalDialogCloseButtonExample1?.addEventListener("click", (ev) => {
  modalDialogContainerExample1.close()
})

const nonModalDialogButtonExample2 = document.getElementById(
  "non-modal-dialog-button-open"
)

nonModalDialogButtonExample2?.addEventListener("click", (ev) => {
  modalDialogContainerExample1?.show()
})
