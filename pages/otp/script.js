document.addEventListener("DOMContentLoaded", function (event) {
  function OTPInput() {
    const editor = document.getElementById("digit1");
    editor.onpaste = pasteOTP;

    const digits = document.querySelectorAll(".otp > *[id]");
    for (let i = 0; i < 4; i++) {
      digits[i].addEventListener("input", function (event) {
        if (!event.target.value || event.target.value == "") {
          if (event.target.previousSibling.previousSibling) {
            event.target.previousSibling.previousSibling.focus();
          }
        } else {
          if (event.target.nextSibling.nextSibling) {
            event.target.nextSibling.nextSibling.focus();
          }
        }
      });
    }
  }
  OTPInput();
});

function pasteOTP(event) {
  event.preventDefault();
  let elm = event.target;
  let pasteVal = event.clipboardData.getData("text").split("");
  if (pasteVal.length > 0) {
    while (elm) {
      elm.value = pasteVal.shift();
      elm = elm.nextSibling.nextSibling;
    }
  }
}

function printOTP() {
  const inputElements = document.querySelectorAll("input");

  let concatenatedValue = "";
  inputElements.forEach((input) => {
    concatenatedValue += input.value;
  });

  console.log(concatenatedValue);
}

const verifyBtn = document.getElementById("verifyBtn")

verifyBtn.addEventListener("click", function () {
    printOTP();
    window.location.href="../profilepage/index.html";
});