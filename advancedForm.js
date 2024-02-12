const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const submitError = document.getElementById("submit-error");

const nameValidator = () => {
  const name = document.getElementById("name");

  if (name.value.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check"></i>';
  return true;
};

const phoneValidator = () => {
  const phone = document.getElementById("phone");

  if (phone.value.length !== 10) {
    phoneError.innerHTML = "Please enter 10 digits";
    return false;
  }

  if (!phone.value.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Please enter a valid number";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check"></i>';
  return true;
};

const emailValidator = () => {
  const email = document.getElementById("email");

  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = "Invalid email format";
    return false;
  }

  if (email.value.length === 0) {
    emailError.innerHTML = "Please enter email";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check"></i>';
  return true;
};

const validateForm = () => {
  if (!nameValidator() || !emailValidator() || !phoneValidator()) {
    submitError.innerHTML = "Please fix errors";
    return false;
  }
  return true;
};

const submitButton = document.getElementById("button");
submitButton.onclick = () => {
  return validateForm();
};
