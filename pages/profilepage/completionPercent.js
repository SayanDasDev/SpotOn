//calculating the proflie completion progress
function getCompletionPctg() {
    var totalInputs = inputs.length+2;
    var filledInputs = 1;
    inputs.forEach(function (input) {
      if (input.value.trim() !== "") {
        filledInputs++;
      }
    });
    if (coursesEnrolled.innerHTML.trim() !== "") {
      filledInputs++;
    }
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