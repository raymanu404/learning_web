"use strict";
const likeButton = document.getElementById("like-button");
let likeButtonCount = 0;
likeButton === null || likeButton === void 0 ? void 0 : likeButton.addEventListener("click", () => {
    likeButtonCount++;
    alert(`You like this form for ${likeButtonCount}`);
});
//# sourceMappingURL=form-validation.js.map