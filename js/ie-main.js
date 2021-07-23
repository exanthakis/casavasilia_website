//--------------------- Modal Gallery  --------------------------

// Get DOM Elements
const modal = document.querySelector("#my-modal");
const galleryImages = document.querySelectorAll(".modal-body");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
// current = 0;
// Events
// modalBtn.addEventListener("click", openModal);
modal.addEventListener("click", openModal);
// modal.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function reset() {
  for (let i = 0; i < galleryImages.length; i++)
    galleryImages[i].style.display = "none";
}

function startSlide(n) {
  reset();
  galleryImages[n].style.display = "block";

  current = n;
  // alert("gI sum : " + galleryImages.length + " current : " + current);
}

//Show Previous
function slideLeft() {
  reset();
  galleryImages[current - 1].style.display = "block";
  current--;
}

//Show Next
function slideRight() {
  // alert("You press right so go to image no." + (current + 1));
  reset();
  galleryImages[current + 1].classList.add = "fade-in";
  galleryImages[current + 1].style.display = "block";
  galleryImages[current + 1].classList.add = "fade-in";
  current++;
}

arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = galleryImages.length;
  }

  slideLeft();
});

arrowRight.addEventListener("click", function() {
  if (current === galleryImages.length - 1) {
    current = -1;
  }
  slideRight();
});

// Hide white background after 2sec
// window.addEventListener("load", function() {
//   setTimeout(function() {
//     document.querySelector(".temporarypage").style.opacity = 0;
//   }, 2000);
// });

//--------------- Animation when scrolling ------------/

// get the element to animate

window.addEventListener("scroll", animate);

// animate element when it is in view
function animate() {
  var i = 0;
  var element = document.querySelectorAll(".front-title");
  var element1 = document.querySelectorAll(".about-p");
  var element2 = document.querySelectorAll(".item");
  var element3 = document.querySelectorAll(".list li");
  var element4 = document.querySelectorAll(".card");
  var element5 = document.querySelectorAll(".form-group");
  console.log(element1.length);
  // var first = element2[1];
  // var last = element2[element2.length - 1];

  // is element in view?
  for (var i = 0; i < element.length; i++) {
    checkViewport(element[i], 1);
  }
  for (var i = 0; i < element1.length; i++) {
    checkViewport(element1[i], 2);
  }
  for (var i = 0; i < element2.length; i++) {
    checkViewport(element2[i], 1);
  }
  for (var i = 0; i < element3.length; i++) {
    checkViewport(element3[i], 1);
  }
  for (var i = 0; i < element4.length; i++) {
    if (i === 0 || i === 1) checkViewport(element4[i], 3);
    if (i === 2 || i === 3) checkViewport(element4[i], 2);
    if (i === 4 || i === 5) checkViewport(element4[i], 3);
    if (i === 6 || i === 7) checkViewport(element4[i], 2);
  }
  for (var i = 0; i < element5.length; i++) {
    checkViewport(element5[i], 2);
  }
}
function checkViewport(elem, flag) {
  if (isInViewport(elem)) {
    if (flag === 1) elem.classList.add("fade-up");
    if (flag === 2) elem.classList.add("fade-right");
    if (flag === 3) elem.classList.add("fade-left");
  }
}
var isInViewport = function(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
// bottom: 2183
// height: 1518
// left: 0
// right: 405
// top: 665
// width: 405
// x: 0
// y: 665

// set index of loader to -10 after 10sec
// window.onload = function() {
//   //time is set in milliseconds
//   setTimeout(function() {
//     document.getElementById("loader").style.zIndex = "-10";
//     //stop scrolling when loading the page
//     document.body.classList.remove("stop-scrolling");
//   }, 10000);
// };

function showsection() {
  var myconst = document.getElementById("read__more");
  var left = document.getElementById("rd_mr_left");
  var right = document.getElementById("rd_mr_right");
  if (myconst.style.display !== "flex") {
    myconst.style.display = "flex";
  } else {
    myconst.style.display = "none";
  }
  left.classList.add("fade-left");
  right.classList.add("fade-right");
  // e.preventDefault();
}
function showplaces() {
  var cards = document.querySelectorAll(".card");
  if (cards[4].style.display !== "flex") {
    for (var i = 4; i < cards.length; i++) {
      cards[i].style.display = "inline";
    }
  } else {
    for (var i = 4; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
  }
  // e.preventDefault();
}
// Smooth Scrolling
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("photo-gallery");
  tabcontent[0].style.display = "-webkit-box";
  tabcontent[0].style.display = "-ms-flexbox";
  tabcontent[0].style.display = "flex";

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "-webkit-box";
  document.getElementById(cityName).style.display = "-ms-flexbox";
  document.getElementById(cityName).style.display = "flex";

  // document.getElementById(cityName).style.display = "grid";

  evt.currentTarget.className += " active";
}

// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
// Sticky menu background
window.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop > 5) {
    document.querySelector("#navbar").style.opacity = 0.8;
    $("nav").addClass("blackTrans");
    document.getElementById("logo1").style.marginTop = "-1.4rem";
  } else {
    document.querySelector("#navbar").style.opacity = 1;
    $("nav").removeClass("blackTrans");
    document.getElementById("logo1").style.marginTop = "0rem";
  }
});
