const likeButton = document.getElementById("like-button")
let likeButtonCount = 0
likeButton?.addEventListener("click", () => {
  likeButtonCount++
  alert(`You like this form for ${likeButtonCount}`)
})
