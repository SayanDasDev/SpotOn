const backBtn = document.getElementById("backBtnPfPage");
const banner = document.querySelector(".banner");
const inputs = document.querySelectorAll("input");
const editSaveBtn = document.getElementById("editSaveBtn");
const bannerText = document.getElementById("bannerText");
const bannerTexts = document.querySelectorAll("#bannerText > div");
const bannerHeading = document.querySelector("#bannerText > div:last-child");
const avatar = document.getElementById("pf-pic-container"); // also being used as colmpletion progress bar
const completionPctg = document.getElementById("completionPctg");
const username = document.getElementById("username");
const usernameReloadBtn = document.getElementById("usernameReloadBtn");


//setting the default content of input box and validation
inputs.forEach((input) => {
  input.value = input.previousSibling.previousSibling.innerHTML;
  input.addEventListener("blur", () => {
    if (!input.checkValidity()) {
      input.value = "";
    }
  });
});
bannerTexts[0].innerHTML = inputs[0].value;
bannerTexts[1].innerHTML = username.innerHTML;

//calculating the proflie completion progress
function getCompletionPctg() {
  var totalInputs = inputs.length+1;
  var filledInputs = 1;
  inputs.forEach(function (input) {
    if (input.value.trim() !== "") {
      filledInputs++;
    }
  });
  var percentageFilled = Math.round((filledInputs / totalInputs) * 100);
  let Percentage = 0;
  let progress = setInterval(() => {
    if (percentageFilled > 0) {
      Percentage++;
      completionPctg.innerHTML = `${Percentage}%`;
      avatar.style.background = `conic-gradient(var(--c-pfp-progress-bar) ${Percentage * 3.6}deg, var(--white) 0deg)`;
      if (Percentage == percentageFilled) {
        clearInterval(progress);
      }
    }else{
      completionPctg.innerHTML = `${Percentage}%`;
      avatar.style.background = `conic-gradient(var(--c-pfp-progress-bar) ${Percentage * 3.6}deg, var(--white) 0deg)`;
    }
  }, 10);
}
window.addEventListener("load", getCompletionPctg);

// back arrow takes you to otp page
backBtn.addEventListener("click", () => {
  window.location.href = "../otp/index.html";
});

editSaveBtn.addEventListener("click", () => {
  // banner Animation
  banner.classList.toggle("edit");
  setTimeout(() => {
    banner.classList.toggle("grad-bg");
  }, 500);

  // changing the edit/save button
  editSaveBtn.classList.toggle("edit-btn");
  editSaveBtn.classList.toggle("save-btn");

  //repositioning the avatar
  avatar.classList.toggle("left-positioned");
  avatar.classList.toggle("center-positioned");

  //toggling the reload username button
  usernameReloadBtn.classList.toggle("hidden");

  //toggling the input box
  inputs.forEach((input) => {
    input.previousSibling.previousSibling.classList.toggle("hidden");
    input.classList.toggle("hidden");
    input.previousSibling.previousSibling.innerHTML = input.value;
    bannerTexts[0].innerHTML = inputs[0].value;
  });

  //changing the heading
  bannerText.classList.toggle("edit-page-text");
  if (bannerHeading.textContent !== "Edit Profile") {
    bannerHeading.textContent = "Edit Profile";
  } else {
    bannerHeading.textContent = username.innerHTML;
    getCompletionPctg(); //changing the completion percentage
  }
});


//rotating the username reload button on click
var rot = 0;
usernameReloadBtn.addEventListener('click', function() {
  rot += 360;
  usernameReloadBtn.style.transform = `rotate(${rot}deg)`;
});