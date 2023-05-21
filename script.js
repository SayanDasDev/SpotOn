const inputElements = document.querySelectorAll("input");

console.log(inputElements);

inputElements.forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.checkValidity()) {
          input.value = '';
        }
      });
});


