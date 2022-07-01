const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "#6b1c1c";
    messageContainer.style.borderColor = "#6b1c1c";
    return;
  }
  //  Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "#4b7013";
    password2El.style.borderColor = "#4b7013";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "#6b1c1c";
    messageContainer.style.borderColor = "#6b1c1c";
    password1El.style.borderColor = "#6b1c1c";
    password2El.style.borderColor = "#6b1c1c";
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered";
    message.style.color = "#4b7013";
    messageContainer.style.borderColor = "#4b7013";
  }
}


function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user)
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit data if valid
  if(isValid && passwordsMatch) {
    storeFormData()
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
