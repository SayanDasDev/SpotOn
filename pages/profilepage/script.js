const backBtn = document.getElementById('backBtnPfPage');
const banner = document.querySelector('.banner');
const inputs = document.querySelectorAll('input');
const editSaveBtn = document.getElementById('editSaveBtn');
const bannerText = document.getElementById('bannerText');
const bannerHeading = document.querySelector('#bannerText > div:last-child')
const avatar = document.getElementById('pf-pic-container');

//setting the default conent of input box
inputs.forEach(input => {
    input.value = input.previousSibling.previousSibling.innerHTML;
});


// back arrow takes you to otp page
backBtn.addEventListener('click', () => {
    window.location.href = '../otp/index.html';
});


editSaveBtn.addEventListener('click', () => {
    // banner Animation
    banner.classList.toggle("edit");
    setTimeout(() => {
        banner.classList.toggle("grad-bg");
      }, 500);

    // changing the edit/save button
    editSaveBtn.classList.toggle("edit-btn");
    editSaveBtn.classList.toggle("save-btn");
    
    //changing the heading
    bannerText.classList.toggle("edit-page-text");
    if (bannerHeading.textContent !== 'Edit Profile') {
        bannerHeading.textContent = 'Edit Profile';
      }else{
        bannerHeading.textContent = 'rolls.royce@69.com';
      }

    //repositioning the avatar
    avatar.classList.toggle("left-positioned");
    avatar.classList.toggle("center-positioned");
    
    //toggling the input box
    inputs.forEach(input => {
        input.previousSibling.previousSibling.classList.toggle("hidden");
        input.classList.toggle("hidden");
        input.previousSibling.previousSibling.innerHTML = input.value;
    });

});