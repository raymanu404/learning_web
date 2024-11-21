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

const hiddenElemsLength = formValidationExample3?.children

// 🟦#01.CHALLENGE: SHOW INPUTS BY USER INTERACTIONS ✅

//select options elements
const options = document.getElementsByName("preference-example-1")
const inputOptions = document.getElementsByName(
  "preference-example-1-input-container"
)

const optionsArray = Array.from(options)
const optionArrayIds = optionsArray.map((x) => x.id)
const inputOptionsArray = Array.from(inputOptions)

const optionClickHandler = (event: MouseEvent) => {
  const target = event.target
  if (target instanceof HTMLElement) {
    const { id } = target
    const optionIdString = id.substring(id.indexOf("option"))
    if (optionArrayIds.find((item) => item === id)) {
      inputOptionsArray.forEach((input) => {
        if (input.id.includes(optionIdString)) {
          input.classList.add("display-block")
        } else {
          input.classList.remove("display-block")
        }
      })
    }
  }
}

options.forEach((value) => value.addEventListener("click", optionClickHandler))

// 🟦#02.CHALLENGE: MAKE payment validation (maybe makes UI updates like card number to display with dashes, expiry date, security code etc...) from section: #miscellaneous-section example 2
const paymentNameInput = document.getElementById('name-example-2')
const paymentNumberInput = document.getElementById('name-example-2')
const expiryInput = document.getElementById('name-example-2')
const securityCodeInput = document.getElementById('name-example-2')
