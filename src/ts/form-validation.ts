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
