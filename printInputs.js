const loginBtn = document.getElementById('loginBtn')

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

loginBtn.addEventListener("click", function () {
  console.log(getInputValuesWithLabels());
});
