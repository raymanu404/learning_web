const likeButton = document.getElementById("like-button")
let likeButtonCount = 0
likeButton?.addEventListener("click", () => {
  likeButtonCount++
  alert(`You like this form for ${likeButtonCount}`)
})

//custom validity message
const usernameInput = document.querySelector(
  '[name="username-2"]'
) as HTMLInputElement

usernameInput?.addEventListener("invalid", () => {
  usernameInput.setCustomValidity(
    "Please introduce  At least 2 chars, maximum 20, lowercase, uppercase, digits only"
  )
})

const formInput3 = document.getElementById("username-3") as HTMLInputElement
const errorMessage = document.getElementById(
  "username3-validation"
) as HTMLSpanElement

formInput3?.addEventListener(
  "blur",
  (event) => {
    // Validate the field
    const lowerLetters = new RegExp("[a-z]")
    const upperLetters = new RegExp("[A-Z]")
    const digits = new RegExp("[0-9]")

    const value = formInput3.value
    let message = ""
    if (
      !lowerLetters.test(value) &&
      !upperLetters.test(value) &&
      !digits.test(value)
    ) {
      message += "Your input must contain lower, upper letters or digits\n"
    } else {
      message = ""
    }

    if (value.length < 2 || value.length > 20) {
      message += "Your input must has a length between 2 and 20 characters\n"
    } else {
      message = ""
    }

    errorMessage.innerText = message
  },
  true
)

formInput3?.addEventListener("focus", (ev) => {
  errorMessage.innerText = ""
})

const formValidationExample3 = document.getElementById(
  "form-container-validation-example-3-id"
)

if (formValidationExample3) {
  console.log(formValidationExample3.children)
}

const hiddenElemsLength = formValidationExample3?.children

//CHALLENGE: SHOW INPUTS BY USER INTERACTIONS

//select options elements
const option1 = document.getElementById(
  "preference-example-1-option-1"
) as HTMLInputElement
const option2 = document.getElementById(
  "preference-example-1-option-2"
) as HTMLInputElement
const option3 = document.getElementById(
  "preference-example-1-option-3"
) as HTMLInputElement

const options = document.getElementsByName("preference-example-1")
const optionsMap = []

options.forEach((value) => optionsMap.push(value.id))

const optionClickHandler = (event: MouseEvent) => {
  const target = event.target
  if (target instanceof HTMLElement) {
    const { id } = target

    // if (optionsMap.find(id.toString()) {
    // }
  }
}

options.forEach((value) => value.addEventListener("click", optionClickHandler))

//select inputs for each option
const option1Input = document.getElementById(
  "preference-example-1-option-1-input-container"
)

const option2Input = document.getElementById(
  "preference-example-1-option-2-input-container"
)

const option3Input = document.getElementById(
  "preference-example-1-option-3-input-container"
)
console.log("hello")

console.log(options)
// if (option1 && option1.checked) {
//   console.log("hello")
//   option1Input?.classList.add(".display-none")
// }
