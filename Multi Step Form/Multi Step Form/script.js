const box = document.querySelector(".box");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const userName = document.getElementById("username");
const mobile = document.getElementById("mobile");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

let emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const next = (margin) => {
  if (margin == 340) addCss(step1, step2);

  if (margin == 680) addCss(step2, step3);

  box.style.marginLeft = "-" + margin + "px";
  return false;
};

const prev = (margin) => {
  if (margin == 0) removeCss(step1, step2);

  if (margin == 340) removeCss(step2, step3);

  box.style.marginLeft = "-" + margin + "px";

  step3.querySelector("span").style.display = "block";
  step3.querySelector("i").classList.remove("active");
};

const addCss = (step1, step2) => {
  step1.classList.add("active");
  step2.querySelector("span").classList.add("active");
  step1.querySelector("span").style.display = "none";
  step1.querySelector("i").classList.add("active");
};

const removeCss = (step1, step2) => {
  step1.classList.remove("active");
  step2.querySelector("span").classList.remove("active");
  step1.querySelector("span").style.display = "block";
  step1.querySelector("i").classList.remove("active");
};

const validateForm1 = () => {
  if (!firstName.value) {
    alert("First Name is required!");
    return;
  }
  if (!lastName.value) {
    alert("Last name is required!");

    return;
  }
  if (!email.value) {
    alert("Email is required!");
    return;
  }

  if (!email.value.match(emailRegex)) {
    alert("Enter valid email!");
    return;
  }

  next("340");
};

const validateForm2 = () => {
  if (!userName.value) {
    alert("Username is required!");
    return;
  }
  if (!dob.value) {
    alert("Date of birth is required!");

    return;
  }
  if (!mobile.value) {
    alert("Mobile is required!");

    return;
  }

  next("680");
};

const validateForm3 = () => {
  if (!password.value) {
    alert("Password is required!");

    return;
  }

  if (!confirmPassword.value) {
    alert("Confirm password is required!");

    return;
  }
  step3.querySelector("span").style.display = "none";
  step3.querySelector("i").classList.add("active");

  setTimeout(() => {
    alert("Form submitted successfully!");
  }, 1000);
};
