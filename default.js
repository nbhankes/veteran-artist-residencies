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
function getPhoneInputValue() {

  let phoneNumber = document.getElementById("input-phone").value;

  if (phoneNumber === null) {
    console.log("Feed me numbers!")
  } else {
    console.log(phoneNumber);
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