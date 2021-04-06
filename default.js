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
const regPassName = /^\b(?!.*?\s{2})[A-Za-z ]{5,30}\b$/;
//This regex correctly validates 99.99% of emails in use today: voyager's response @ https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const regPassEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const regFormatPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const regFormatPhoneFirst = /^\(?([0-9]{3})\)?$/
const regFormatPhoneSecond = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})$/


let nameInput = document.querySelector("#form-name");
let emailInput = document.querySelector("#form-email");
let phoneInput = document.querySelector("#form-phone");

nameInput.addEventListener("input", validate);
emailInput.addEventListener("input", validate);
phoneInput.addEventListener("input", validate);

function validate(e) {
  let target = e.target;

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

/*   if (target.name == "phone") {
    //validate phone input
    if(regFormatPhone.test(target.value)) {
      var formattedPhone = target.value.replace(regFormatPhone, "($1) $2-$3")
      phoneInput.value = formattedPhone
      console.log(formattedPhone);
    } else {
      console.log("Hello phone")
    } 
  } */

  if (target.name == "phone") {
    //validate phone input
    if(regFormatPhoneFirst.test(target.value) && target.value.length === 3) {
      let formattedPhone = target.value.replace(regFormatPhoneFirst, "($&) ")
      phoneInput.value = formattedPhone
      console.log(formattedPhone);
    }

    if (regFormatPhoneSecond.test(target.value)) {
    let formattedPhoneTwo = target.value.replace(regFormatPhoneSecond, "($1) $2-")
    phoneInput.value = formattedPhoneTwo
    console.log(formattedPhoneTwo + "second if");
    }
    
    if (regFormatPhone.test(target.value)) {
      target.classList.add("valid");
    } else {
      target.classList.remove("valid");
    }
    
  }
}

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