// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const emptyHeartIcon = document.querySelectorAll(".like-glyph");
  const fullHeartIcon = document.querySelectorAll(".activated-heart");
  const errorModal = document.getElementById("modal");

  emptyHeartIcon.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          heart.classList.add("activated-heart");
          heart.innerText = "♥";
        })
        .catch(() => {
          errorModal.classList.remove("hidden");
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
  fullHeartIcon.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.remove("activated-heart");
      heart.innerText = "♡";
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

