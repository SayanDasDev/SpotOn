const notifBar = document.querySelector(".notif-container");
const dismissBtn = document.querySelector('.notif-dismiss');
const notifContent = document.querySelector('.notif-content');
const failBtn = document.getElementById('ClickFail');
const successBtn = document.getElementById('ClickSuccess');
const Icon = document. querySelector('.notif-icon');
const Msg = document. querySelector('.notif-text');

const showNotifBar = (autohide) => {
  notifBar.classList.add("isShown");
 
  if (autohide) {
    setTimeout(hideNotifBar, 2000);
  }
};

const hideNotifBar = () => {
  notifBar.classList.remove("isShown");
};

// Event listeners
successBtn.addEventListener('click', function () {
  showNotifBar();
  Icon.classList.remove("failure");
  Icon.classList.add("successful");
  Msg.innerHTML = 'OTP Sent Succesfully!';
});
failBtn.addEventListener('click', function () {
  showNotifBar();
  Icon.classList.remove("successful");
  Icon.classList.add("failure");
  Msg.innerHTML = 'OTP is Wrong!';
});
dismissBtn.addEventListener('click', hideNotifBar);