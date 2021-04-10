//! Burger Menu

function openMobileNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//! Transition Animations

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});


// For input masking of form


//!Application Form Validation

const form = document.querySelector("#application-form");

let phoneInput = document.querySelector("#form-phone");
phoneInput.addEventListener("input", validatePhone);

//This regex ids phone numbers: https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch04s02.html
const regFormatPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const regFormatPhoneFirst = /^\(?([0-9]{3})\)?$/
const regFormatPhoneSecond = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})$/

function validatePhone(e) {
  let target = e.target;

  if (target.name == "phone") {
    //validate phone input
    if(regFormatPhoneFirst.test(target.value) && target.value.length === 3) {
      let formattedPhone = target.value.replace(regFormatPhoneFirst, "($&) ")
      phoneInput.value = formattedPhone
    }

    if (regFormatPhoneSecond.test(target.value)) {
    let formattedPhoneTwo = target.value.replace(regFormatPhoneSecond, "($1) $2-")
    phoneInput.value = formattedPhoneTwo
    }
  }
}

/* let nameInput = document.querySelector("#form-name");
let emailInput = document.querySelector("#form-email");
let whatInput = document.querySelector("#what-prompt");
let whyInput = document.querySelector("#why-prompt");

let submit = document.querySelector("#submit-button");

nameInput.addEventListener("input", validate);
emailInput.addEventListener("input", validate);
phoneInput.addEventListener("input", validate);
whatInput.addEventListener("input", validate);
whyInput.addEventListener("input", validate);

submit.addEventListener('mouseover', validate);
submit.addEventListener('mouseout', XXXXXXXXX);

const regPassName = /^\b(?!.*?\s{2})[A-Za-z ]{5,30}\b$/;
//This regex correctly validates 99.99% of emails in use today: voyager's response @ https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const regPassEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

function validate(e) {
  let target = e.target;
  console.log("validate triggered.")

  if (target.name == "name") {
    //validate name input
    if (regPassName.test(target.value)) {
      target.classList.add("valid");
    } else {
      target.classList.remove("valid");
    }
  }

  if (target.name == "email") {
    //validate email input
    if(regPassEmail.test(target.value)) {
    target.classList.add("valid");
  } else {
    target.classList.remove("valid");
  }
}

if (target.name == "phone") {
    //validate phone input
  if (regFormatPhone.test(target.value)) {
    target.classList.add("valid");
  } else {
    target.classList.remove("valid");
  }
 }

 if (target.name == "what") {
  //validate phone input
  if (target.value.length > 10) {
    target.classList.add("valid");
  } else {
    target.classList.remove("valid");
  }
 }

 if (target.name == "why") {
  //validate phone input
  if (target.value.length > 10) {
    target.classList.add("valid");
  } else {
    target.classList.remove("valid");
  }
 }
} */


//Sticky Header
window.onscroll = function() {setStickyHeader()};

var header = document.getElementById("my-header");
var sticky = header.offsetTop;

function setStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.id = "sticky";
  } else {
    header.classList.remove("sticky");
  }
}