// ---------------------------------------------------
//Page scroll position to top at page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// ---------------------------------------------------
// set index of loader to -10 after 10sec
window.onload = function () {
  //time is set in milliseconds
  setTimeout(function () {
    document.querySelector(".loader").style.zIndex = "-10";
    //stop scrolling when loading the page
    document.body.classList.remove("stop-scrolling");
  }, 10000);
};
// ---------------------------------------------------

// Hide white background after 2sec
// window.addEventListener("load", function() {
//   setTimeout(function() {
//     document.querySelector(".temporarypage").style.opacity = 0;
//   }, 2000);
// });

//----------------- Book Now Btn animation -------------/
$(window).ready(function () {
  $(".boton").wrapInner("<div class=botontext></div>");

  $(".botontext").clone().appendTo($(".boton"));

  $(".boton").append(
    '<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>'
  );

  $(".twist").css("width", "25%").css("width", "+=3px");
});

//--------------- Animation when scrolling ------------/

// get the element to animate

window.addEventListener("scroll", animate);

// animate element when it is in view
function animate() {
  const element = document.querySelectorAll(".front-title");
  const element1 = document.querySelectorAll(".about-p");
  const element2 = document.querySelectorAll(".item");
  const element3 = document.querySelectorAll(".list li");
  const element4 = document.querySelectorAll(".card");
  const element5 = document.querySelectorAll(".form-group");
  // const first = element2[1];
  // const last = element2[element2.length - 1];

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
const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
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

function showsection() {
  const myconst = document.getElementById("read__more");
  const left = document.getElementById("rd_mr_left");
  const right = document.getElementById("rd_mr_right");
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
  const cards = document.querySelectorAll(".card");
  if (cards[4].style.display !== "grid") {
    for (var i = 4; i < cards.length; i++) {
      cards[i].style.display = "grid";
    }
  } else {
    for (var i = 4; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
  }
  // e.preventDefault();
}
// Smooth Scrolling
$("#navbar a, .boton").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("photo-gallery");
  tabcontent[0].style.display = "grid";
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "grid";
  // document.getElementById(cityName).style.display = "grid";

  evt.currentTarget.className += " active";
}

// Sticky menu background
window.addEventListener("scroll", function () {
  // document.querySelector("#showcase").style.backgroundSize =
  //   160 - +window.pageYOffset / 12 + "%";
  document.querySelector("#showcase").style.opacity =
    1 - +window.pageYOffset / 1000 + "";
  if (
    document.documentElement.scrollTop > 5 ||
    window.scrollY > 5 ||
    window.pageYOffset > 5
  ) {
    document.querySelector("#navbar").style.opacity = 0.8;
    $("nav").addClass("blackTrans");
    $("nav ul").removeClass("text-shadow");
    document.getElementById("logo1").style.marginTop = "-1.4rem";
  } else {
    document.querySelector("#navbar").style.opacity = 1;
    // document.querySelector("#navbar").style;
    $("nav").removeClass("blackTrans");
    $("nav ul").addClass("text-shadow");
    document.getElementById("logo1").style.marginTop = "0rem";
  }
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// Gsap
let tl = gsap.timeline({ Defaults: { Easing: Expo.EaseOut } });

tl.from("#showcase", {
  scale: 0.6,
  duration: 2,
  opacity: 0,
  ease: Expo.easeOut,
  delay: 0.2,
});
