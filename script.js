const slidePage = document.querySelector(".slidePage");
const signupBtn = document.querySelector(".signupBtn");
const backBtn1 = document.querySelector(".back-1");
const nextBtn = document.querySelector(".next-1");
const backBtn2 = document.querySelector(".back-2");
const submitBtn = document.querySelector(".next-2");

signupBtn.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
});
nextBtn.addEventListener("click", function(){
  slidePage.style.marginLeft = "-50%";
});
backBtn1.addEventListener("click", function(){
  slidePage.style.marginLeft = "0%";
});
backBtn2.addEventListener("click", function(){
  slidePage.style.marginLeft = "-25%";
});
