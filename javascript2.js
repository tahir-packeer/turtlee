//validation for the fullname
const fullNameInput = document.getElementById("fullName");
const fullNameError = document.getElementById("fullNameError");
const detailsForm1 = document.getElementById("detailsForm");

function validateFullName() {
  const fullNameValue = fullNameInput.value.trim();

  if (fullNameValue === "") {
    fullNameError.textContent = "Full Name is required.";
    fullNameInput.classList.add("invalid");
    return false;
  } else {
    const names = fullNameValue.split(" ");
    if (names.length < 2) {
      fullNameError.textContent = "Both first name and last name are required.";
      fullNameInput.classList.add("invalid");
      return false;
    }
    fullNameError.textContent = "";
    fullNameInput.classList.remove("invalid");
    return true;
  }
}

fullNameInput.addEventListener("input", validateFullName);

detailsForm1.addEventListener("submit", function (event) {
  if (!validateFullName()) {
    event.preventDefault();
  }
});

// disable links
const paymentLink = document.getElementById("paymentlink");
const confirmationLink = document.getElementById("confirmationlink");
//
fullNameInput.addEventListener("input", validateFullName);

detailsForm1.addEventListener("submit", function (event) {
  if (!validateFullName()) {
    event.preventDefault();
  }
});

//validation for the mobile number
const phoneNumberInput = document.getElementById("phoneNumber");
const mobileNumberError = document.getElementById("mobileNumberError");
const detailsForm2 = document.getElementById("detailsForm");

function validateMobileNumber() {
  const phoneNumberValue = phoneNumberInput.value.trim();
  
  if (phoneNumberValue.length < 10) {
    mobileNumberError.textContent = "Mobile Number should be at least 10 digits.";
    phoneNumberInput.classList.add("invalid");
    return false;
  } else {
    mobileNumberError.textContent = "";
    phoneNumberInput.classList.remove("invalid");
    return true;
  }
}

phoneNumberInput.addEventListener("input", validateMobileNumber);

detailsForm2.addEventListener("submit", function (event) {
  if (!validateMobileNumber()) {
    event.preventDefault();
  }
}); 

//email
const emailInput1 = document.getElementById("email");
const emailError = document.getElementById("emailError1");
const detailsForm3 = document.getElementById("detailsForm");

function validateEmail() {
  const emailValue = emailInput1.value.trim();
  
  if (!emailValue.includes("@")) {
    emailError.textContent = "Email should contain an '@' symbol.";
    emailInput1.classList.add("invalid");
    return false;
  } else {
    emailError.textContent = "";
    emailInput1.classList.remove("invalid");
    return true;
  }
}

emailInput1.addEventListener("input", validateEmail);

detailsForm3.addEventListener("submit", function (event) {
  if (!validateEmail()) {
    event.preventDefault();
  }
});

/* //confirmation email
const emailInput2 = document.getElementById("email");
const confirmEmailInput = document.getElementById("confirmEmail");
const confirmEmailError = document.getElementById("confirmEmailError");
const detailsForm = document.getElementById("detailsForm");

function validateConfirmEmail() {
  const emailValue = emailInput2.value.trim();
  const confirmEmailValue = confirmEmailInput.value.trim();

  if (emailValue !== confirmEmailValue) {
    confirmEmailError.textContent = "Emails do not match.";
    confirmEmailInput.classList.add("invalid");
    return false;
  } else {
    confirmEmailError.textContent = "";
    confirmEmailInput.classList.remove("invalid");
    return true;
  }
}

confirmEmailInput.addEventListener("input", validateConfirmEmail);

detailsForm.addEventListener("submit", function (event) {
  if (!validateConfirmEmail()) {
    event.preventDefault();
  }
}); */

//name st
document.addEventListener("DOMContentLoaded", function () {
    const fullNameInput = document.getElementById("fullName");
    const nameSummaryCell = document.getElementById("Name");

    fullNameInput.addEventListener("input", function () {
        nameSummaryCell.textContent = fullNameInput.value;
    });

    // Rest of your existing JavaScript code...
});

// mobile st

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    const phoneNumberInput = document.getElementById("phoneNumber");
    const mobileSummary = document.getElementById("mobile");
  
    // Add an event listener to the phoneNumber input field
    phoneNumberInput.addEventListener("input", function () {
      // Get the entered mobile number
      const mobileNumber = phoneNumberInput.value.trim();
  
      // Update the mobile summary element with the entered mobile number
      mobileSummary.textContent = mobileNumber;
    });
  });

  //email st

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    const confirmEmailInput = document.getElementById("confirmEmail");
    const emailSummary = document.getElementById("email");
  
    // Add an event listener to the confirmEmail input field
    confirmEmailInput.addEventListener("input", function () {
      // Get the entered confirm email
      const confirmEmail = confirmEmailInput.value.trim();
  
      // Update the email summary element with the entered confirm email
      emailSummary.textContent = confirmEmail;
    });
  });
  
  //gender
  
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    const genderSelect = document.getElementById("genderSelect");
    const genderSummary = document.getElementById("gender");
  
    // Add an event listener to the gender selection
    genderSelect.addEventListener("change", function () {
      // Get the selected gender
      const selectedGender = genderSelect.value;
  
      // Update the gender summary element with the selected gender
      genderSummary.textContent = selectedGender;
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    const fullNameInput = document.getElementById("fullName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const confirmEmailInput = document.getElementById("confirmEmail");
    const genderSelect = document.getElementById("genderSelect");
    const purchaseButton = document.getElementById("purchaseButton");

    // Function to check if all required fields are filled and validations are fulfilled
    function checkFormValidity() {
        const fullNameValid = validateFullName();
        const phoneNumberValid = validateMobileNumber();
        const emailValid = validateEmail();
        const confirmEmailValid = validateConfirmEmail();
       

        return fullNameValid && phoneNumberValid && emailValid && confirmEmailValid ;
    }

    // Add event listeners to input fields to validate and enable/disable the button
// Add event listeners to input fields to validate and enable/disable the button
fullNameInput.addEventListener("input", function () {
    purchaseButton.disabled = !checkFormValidity();
});

phoneNumberInput.addEventListener("input", function () {
    purchaseButton.disabled = !checkFormValidity();
});

confirmEmailInput.addEventListener("input", function () {
    purchaseButton.disabled = !checkFormValidity();
});

// Rest of your existing event listeners...


//
// Retrieve stored user data from local storage
  });