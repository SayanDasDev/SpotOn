
const inputElements = document.querySelectorAll("input");

inputElements.forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.checkValidity()) {
          input.value = '';
        }
      });
});


