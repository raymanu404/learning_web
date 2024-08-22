const changeUlType = () => {
  const getList = document.querySelector("#custom-ul")
  getList.addEventListener("change", (ev) => {
    const example = document.querySelector("#custom-ol")
    example.setAttribute("style", `list-style-type: ${ev.target.value}`)
  })
}

changeUlType()
