const backBtn = document.getElementById("backBtnPfPage");
const banner = document.querySelector(".banner");
const inputs = document.querySelectorAll(".info-card > div > input");
const editSaveBtn = document.getElementById("editSaveBtn");
const bannerText = document.getElementById("bannerText");
const bannerTexts = document.querySelectorAll("#bannerText > div");
const bannerHeading = document.querySelector("#bannerText > div:last-child"); // email <=> Edit Profile
const avatar = document.getElementById("pf-pic-container"); // also being used as colmpletion progress bar
const completionPctg = document.getElementById("completionPctg");
const username = document.getElementById("username");
const usernameReloadBtn = document.getElementById("usernameReloadBtn");
const coursesEnrolled = document.getElementById("coursesEnrolled");

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


// back arrow takes you to otp page
backBtn.addEventListener("click", () => {
  window.location.href = "../otp/index.html";
});

//Toggling the multiselct box and loading the content
//makes sure selection is done after the multiple select box is created
function selectMultiSelect(){
  const multiSelect = document.getElementById('multiple-select');
  const courses = document.querySelectorAll(".item-label");
  multiSelect.classList.toggle("hidden");
  var concatedTag = '';
  for (var i = 0; i < courses.length; i++) {
    concatedTag += courses[i].innerHTML;
    if (i < courses.length - 1) {
      concatedTag += ', ';
    }
  }
  multiSelect.previousSibling.previousSibling.previousSibling. innerHTML = concatedTag;
}

//edit button function
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

  //toggling the multiple select box
  courses.previousSibling.previousSibling.classList.toggle("hidden");
  selectMultiSelect();
  

  //changing the heading
  bannerText.classList.toggle("edit-page-text");
  if (bannerHeading.textContent !== "Edit Profile") {
    bannerHeading.textContent = "Edit Profile";
  } else {
    bannerHeading.textContent = username.innerHTML;
    getCompletionPctg(); //changing the completion percentage
  }

  //Clicking the save button
  saveClicked();

});


//rotating the username reload button on click
var rot = 0;
usernameReloadBtn.addEventListener('click', function() {
  rot += 360;
  usernameReloadBtn.style.transform = `rotate(${rot}deg)`;
});

//Clicking the save button
var clickCount = 0;
function saveClicked() {
  clickCount++;
  if (clickCount % 2 === 0) {
    getAllInputs();
  }
}

function getAllInputs() {
  inputAll.forEach((input )=> {
    console.log(input.innerHTML);
  });
}
