const changeUlType = () => {
  const getList = document.querySelector("#custom-ul")
  getList.addEventListener("change", (ev) => {
    const example = document.querySelector("#custom-ol")
    example.setAttribute("style", `list-style-type: ${ev.target.value}`)
  })
}

changeUlType()

const playButton = document.querySelector("#play-button ")
playButton.classList.add("display-block")
playButton.addEventListener("click", playHandler, false)

const pauseButton = document.querySelector("#pause-button ")
pauseButton.classList.add("display-none")
pauseButton.addEventListener("click", stopHandler, false)

function stopHandler() {
  const media = document.getElementById("video-controller")
  media.pause()
  pauseButton.classList.remove("display-block")
  pauseButton.classList.add("display-none")
  playButton.classList.add("display-block")

  document.querySelector("[aria-controls]").removeAttribute("controls")
}

function playHandler() {
  const media = document.getElementById("video-controller")
  if (media.paused) {
    media.play()
    playButton.classList.remove("display-block")
    playButton.classList.add("display-none")
    pauseButton.classList.add("display-block")
  }

  document.querySelector("[aria-controls]").removeAttribute("controls")
}
