const firstName = getCookie("firstName");
if (firstName) {
  document.getElementById(
    "welcome-message"
  ).textContent = `Welcome back, ${firstName}!`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "new-user-checkbox";
  checkbox.value = "new-user";
  checkbox.addEventListener("change", handleCheckboxChange);
  const label = document.createElement("label");
  label.htmlFor = "new-user-checkbox";
  label.textContent = `Not ${firstName}, click HERE to start as a NEW USER.`;
  document.getElementById("checkbox-container").appendChild(checkbox);
  document.getElementById("checkbox-container").appendChild(label);
} else {
  document.getElementById("welcome-message").textContent = "Welcome New user!";

  setCookie("firstName", "New user", 2);
}

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${expiryDate.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

const savedFormData = localStorage.getItem("form");
const budgetOutput = document.getElementById("budgetValue");

const formFields = document.querySelectorAll(
  'input:not([type="button"]), select, textarea'
);

if (savedFormData) {
  const form = document.querySelector("form");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "restore-form";
  checkbox.name = "restore-form";
  checkbox.value = "true";
  const label = document.createElement("label");
  label.textContent = "Do you want to continue where you left off?";
  label.setAttribute("for", "restore-form");
  form.prepend(checkbox, label);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      const formData = JSON.parse(savedFormData);
      formFields.forEach((field) => {
        if (field.id === "budget") {
          budgetOutput.innerText = "$" + formData[field.name];
        }
      });
      formFields.forEach((field) => {
        if (field.type === "checkbox") {
          field.checked = formData[field.name];
        } else if (field.type === "radio") {
          field.checked = formData[field.name] === field.value;
        } else {
          field.value = formData[field.name];
        }
      });
    }
  });
}

function handleCheckboxChange() {
  const checkbox = document.getElementById("new-user-checkbox");
  if (checkbox.checked) {
    deleteCookie("firstName");

    document.getElementById("welcome-message").textContent =
      "Welcome New user!";
  } else {
    setCookie("firstName", firstName, 2);
    document.getElementById(
      "welcome-message"
    ).textContent = `Welcome back, ${firstName}!`;
  }
}

let hasError = false;

const date = Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

const dateElement = document.getElementById("today-date");
dateElement.innerText = date.toString();

const budgetSlider = document.getElementById("budget");

budgetSlider.oninput = function () {
  budgetOutput.innerText = "$" + budgetSlider.value;
};

function checkfirstname() {
  x = document.getElementById("firstname").value;
  if (x.length < 2) {
    document.getElementById("name_message").innerHTML =
      "Invalid first name...too short.";
    hasError = true;
  } else {
    if (x.match(/[a-zA-Z3-5'-]+$/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML =
        "Invalid characters in first name.";
      hasError = true;
    }
  }
}
function checkmiddlename() {
  x = document.getElementById("middlename").value;
  if (x.length > 0) {
    if (x.match(/[a-zA-Z ]/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML =
        "Invalid characters in middle name.";
      hasError = true;
    }
  }
}
function checklastname() {
  x = document.getElementById("lastname").value;
  if (x.length < 2) {
    document.getElementById("name_message").innerHTML =
      "Invalid Last Name...too short.";
    hasError = true;
  } else {
    if (x.match(/[a-zA-Z3-5'-]+$/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML =
        "Invalid characters in last name.";
      hasError = true;
    }
  }
}

function checkaddress1() {
  x = document.getElementById("address1").value;
  if (x.length === 0) {
    document.getElementById("address1Message").innerHTML =
      "Enter something on address 1 line";
    hasError = true;
  } else if (x.length === 1) {
    document.getElementById("address1Message").innerHTML =
      "Enter more characters on address 1 line";
    hasError = true;
  } else {
    document.getElementById("address1Message").innerHTML = "";
  }
}
function checkaddress2() {
  x = document.getElementById("address2").value;
  if (x.length > 0) {
    if (x.length === 1) {
      document.getElementById("address2Message").innerHTML =
        "Enter more characters for address 2";
      hasError = true;
    } else if (x.length > 30) {
      document.getElementById("address2Message").innerHTML =
        "Enter less characters for address 2";
      hasError = true;
    } else {
      document.getElementById("address2Message").innerHTML = "";
    }
  }
}

function checkcity() {
  x = document.getElementById("city").value;
  if (x.match(/^[ a-zA-Z3-5'-]+$/) && x.length > 1 && x.length < 30) {
    document.getElementById("cityMessage").innerHTML = "";
  } else {
    document.getElementById("cityMessage").innerHTML =
      "Invalid characters in City name.";
    hasError = true;
  }
}
function checkstate() {
  z = document.getElementById("state").value;
  if (z == "") {
    document.getElementById("stateMessage").innerHTML = "Please choose a state";
    hasError = true;
  } else {
    document.getElementById("stateMessage").innerHTML = "";
  }
}

function checkzipcode() {
  const zipCode = document.getElementById("zipcode").value;
  const zipCodeRegex = /^\d{5}$/;
  if (zipCode === "") {
    document.getElementById("zipCodeMessage").innerHTML =
      "Please enter a zip code";
    hasError = true;
  } else if (!zipCodeRegex.test(zipCode)) {
    document.getElementById("zipCodeMessage").innerHTML =
      "Please enter a valid 5-digit zip code";
    hasError = true;
  } else {
    document.getElementById("zipCodeMessage").innerHTML = "";
  }
}

function checkPhoneNumber() {
  const phoneNumber = document.getElementById("phonenumber").value;
  const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/; // regular expression to match US phone numbers in the format xxx-xxx-xxxx
  if (phoneNumber === "") {
    document.getElementById("phoneNumberMessage").innerHTML =
      "Please enter a phone number";
    hasError = true;
  } else if (!phoneNumberRegex.test(phoneNumber)) {
    document.getElementById("phoneNumberMessage").innerHTML =
      "Please enter a valid US phone number in the format xxx-xxx-xxxx";
    hasError = true;
  } else {
    document.getElementById("phoneNumberMessage").innerHTML = "";
  }
}

function checkDateOfBirth() {
  const dob = document.getElementById("dateOfBirth").value;
  if (dob === "") {
    document.getElementById("dobMessage").innerHTML =
      "Please enter a date of birth";
    hasError = true;
  } else {
    document.getElementById("dobMessage").innerHTML = "";
  }
}

function checkSocialSecurity() {
  const ssn = document.getElementById("socialSecurity").value;
  const ssnRegex = /^\d{3}\d{2}\d{4}$/;
  if (ssn === "") {
    document.getElementById("ssnMessage").innerHTML =
      "Please enter a social security number";
    hasError = true;
  } else if (!ssnRegex.test(ssn)) {
    document.getElementById("ssnMessage").innerHTML =
      "Please enter a valid social security number in the format xxx-xx-xxxx";
    hasError = true;
  } else {
    document.getElementById("ssnMessage").innerHTML = "";
  }
}

function checkEmailAddress() {
  const email = document.getElementById("emailAddress").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailMessage").innerHTML =
      "Please enter an email address";
    hasError = true;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailMessage").innerHTML =
      "Please enter a valid email address";
    hasError = true;
  } else {
    document.getElementById("emailMessage").innerHTML = "";
  }
}

function checkUsername() {
  const username = document.getElementById("username").value;
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{4,19}$/;
  if (username === "") {
    document.getElementById("usernameMessage").innerHTML =
      "Please enter a username";
    hasError = true;
  } else if (!usernameRegex.test(username)) {
    document.getElementById("usernameMessage").innerHTML =
      "Please enter a valid username that starts with a letter, is at least 5 characters but no more than 20, and cannot have spaces or any special characters in it";
    hasError = true;
  } else {
    document.getElementById("usernameMessage").innerHTML = "";
  }
}

function checkPassword() {
  const password = document.getElementById("password").value;
  const userId = document.getElementById("username").value;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // regular expression to match passwords
  if (password === "") {
    document.getElementById("passwordMessage").innerHTML =
      "Please enter a password";
    hasError = true;
  } else if (!passwordRegex.test(password)) {
    document.getElementById("passwordMessage").innerHTML =
      "Please enter a valid password that is at least 8 characters long, contains at least 1 upper case, 1 lower case letter, and 1 digit";
    hasError = true;
  } else if (password === userId) {
    document.getElementById("passwordMessage").innerHTML =
      "Password cannot equal your desired User ID";
    hasError = true;
  } else {
    document.getElementById("passwordMessage").innerHTML = "";
  }
}

function checkPasswordMatch() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordMessage").innerHTML =
      "Please confirm your password";
    hasError = true;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordMessage").innerHTML =
      "Passwords do not match";
    hasError = true;
  } else {
    document.getElementById("confirmPasswordMessage").innerHTML = "";
  }
}

function getDataReview() {
  const contents = document.getElementById("registration");
  let foutput;
  let dataType;
  foutput =
    "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";

  for (let i = 0; i < contents.length; i++) {
    if (contents.elements[i].value != "") {
      dataType = contents.elements[i].type;
      switch (dataType) {
        case "checkbox":
          if (contents.elements[i].checked) {
            foutput = `${foutput}<tr><td align='right'>${contents.elements[i].name}</td>`;
            foutput = `${foutput}<td align='right'>${dataType}</td>`;
            foutput = `${foutput}<td class='outputdata'>${contents.elements[i].value}</td></tr>`;
          }
          break;
        case "radio":
          if (contents.elements[i].checked) {
            foutput = `${foutput}<tr><td align='right'>${contents.elements[i].name}</td>`;
            foutput = `${foutput}<td align='right'>${dataType}</td>`;
            foutput = `${foutput}<td class='outputdata'>${contents.elements[i].value}</td></tr>`;
          }
          break;
        case "button":
        case "submit":
        case "reset":
          break;
        default:
          foutput = `${foutput}<tr><td align='right'>${contents.elements[i].name}</td>`;
          foutput = `${foutput}<td align='right'>${dataType}</td>`;
          foutput = `${foutput}<td class='outputdata'>${contents.elements[i].value}</td></tr>`;
      }
    }
  }

  if (foutput.length > 0) {
    foutput = foutput + "</table>";
    document.getElementById("dataReview").innerHTML = foutput;
  }
}

function checkform() {
  let hasError = false;
  checkfirstname();
  checkmiddlename();
  checklastname();
  checkDateOfBirth();
  checkEmailAddress();
  checkPassword();
  checkPasswordMatch();
  checkPhoneNumber();
  checkSocialSecurity();
  checkUsername();
  checkaddress1();
  checkaddress2();
  checkcity();

  if (hasError) {
    alert("Please fix the indicated errors!");
  } else {
    document.getElementById("submit").disabled = false;
  }
}

function submitForm() {
  const formData = {};
  formFields.forEach((field) => {
    if (field.type === "checkbox") {
      formData[field.name] = field.checked;
    } else if (field.type === "range") {
      formData[field.name] = field.valueAsNumber;
    } else if (field.type === "radio") {
      if (field.checked) {
        formData[field.name] = field.value;
      }
    } else {
      formData[field.name] = field.value;
    }
  });

  // Save the form data to local storage
  localStorage.setItem("form", JSON.stringify(formData));
  setCookie("firstName", formData?.firstName, 2);
  window.location.href = "thankyou.html";
}

window.onscroll = function () {
  myHeader();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

{
  /* <script src="https://www.google.com/recaptcha/api.js"></script>

<script>
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
</script> */
}
