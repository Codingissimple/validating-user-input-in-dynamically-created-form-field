document.getElementById("addButton").addEventListener("click", addInputField);

function addInputField() {
  var inputContainer = document.getElementById("inputContainer");
  var inputField = document.createElement("input");
  inputField.type = "text";

  // Add an event listener for input validation
  inputField.addEventListener("input", validateInput);

  inputContainer.appendChild(inputField);
}

function validateInput(event) {
  var input = event.target;
  var value = input.value;

  if (value.length < 5) {
    input.setCustomValidity("Input must be at least 5 characters long.");
  } else {
    input.setCustomValidity("");
  }
}
