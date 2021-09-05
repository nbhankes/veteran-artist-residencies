//! Burger Menu

function openMobileNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//! Donation Modal

const modal = document.querySelector(".modal");
const activate = document.querySelector(".activate");
const closeButton = document.querySelector(".ink-people-redirect-button");

/*toggle on button click*/
function toggleModal() {
    modal.classList.toggle("active");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

/*event listeners*/
activate.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


//!Application Form Validation

const form = document.querySelector("#application-form");

let phoneInput = document.querySelector("#form-phone");
if (phoneInput !== null) {
  phoneInput.addEventListener("input", validatePhone);
}

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