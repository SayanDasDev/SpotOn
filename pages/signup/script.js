const slidePage = document.querySelector(".slidePage");
const signupBtn = document.querySelector(".signup-btn");
const backBtn = document.querySelector(".back-btn");
const submitBtn = document.querySelector(".submit-btn");

signupBtn.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
});
backBtn.addEventListener("click", function(){
  slidePage.style.marginLeft = "0%";
});

submitBtn.addEventListener("click", function(){
  window.location.href = "../otp/Index.html";
});


function getInputValuesWithLabels() {
  const inputs = {};
  const inputElements = document.querySelectorAll("input");
  
  inputElements.forEach((input) => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    
    if (label) {
      inputs[label.textContent] = input.value;
    }
  });
  
  return inputs;
}

submitBtn.addEventListener("click", function(){
  console.log(getInputValuesWithLabels());
});