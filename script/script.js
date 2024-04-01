let $ = document;

// Variables
let navMenu = $.querySelector(".mainmenu");
let menuItem1 = $.querySelector(".item1");
let menuItem2 = $.querySelector(".item2");
let menuItem3 = $.querySelector(".item3");
let menuItem4 = $.querySelector(".item4");
let infoFileSection = $.querySelector(".info-file");
let mainReasonSection = $.querySelector(".main__reason");
let backToTop = $.querySelector(".back-to-top");
let navBtn = $.querySelector(".nav__btn")
let navOpen = false;
let offCanvasMenu = $.querySelector(".offcanvas-menu");
let itemsMenuMobile = $.querySelectorAll(".item-mobile");
let images = $.querySelectorAll("img");

// Functions : 

// This function is responsible for making the menu bar stick when the page is scrolled.
function scrollNavMenu() {
  if ($.documentElement.scrollTop > 100) {
    navMenu.style.cssText = "position:fixed; top:0;  padding:3rem 1rem 2rem 0; backdrop-filter: blur(10px); box-shadow:0 0 15px var(--secondry-blue); border-radius: 2rem; z-index:3;";
  } else {
    navMenu.style.cssText = "position:reletives; background-color: transparent; padding:3rem 1rem 2rem 0;";
  };
};

//This function is responsible for giving animation to the menu bar in desktop mode.
function controlNavMenuAnimation() {
  if ($.documentElement.scrollTop > 100) {
    navMenu.classList.add("animate__animated", "animate__fadeInDown");
  } else {
    navMenu.classList.remove("animate__animated", "animate__fadeInDown");
  }
}

// This function has the task of specifying the desired item of that section in the menu bar when the page reaches the desired section.
function activeItemMenu() {
  if ($.documentElement.scrollTop < 110) {
    menuItem1.classList.remove("active");
    menuItem2.classList.remove("active");
    menuItem3.classList.remove("active");
    menuItem4.classList.remove("active");
  } else if ($.documentElement.scrollTop > 110 && $.documentElement.scrollTop < 1450) {
    menuItem1.classList.add("active");
    menuItem2.classList.remove("active");
    menuItem3.classList.remove("active");
    menuItem4.classList.remove("active");
  } else if ($.documentElement.scrollTop > 1450 && $.documentElement.scrollTop < 2200) {
    menuItem2.classList.add("active");
    menuItem1.classList.remove("active");
    menuItem3.classList.remove("active");
    menuItem4.classList.remove("active");
  } else if ($.documentElement.scrollTop > 2200 && $.documentElement.scrollTop < 2900) {
    menuItem3.classList.add("active");
    menuItem1.classList.remove("active");
    menuItem2.classList.remove("active");
    menuItem4.classList.remove("active");
  } else if ($.documentElement.scrollTop > 2900) {
    menuItem4.classList.add("active");
    menuItem1.classList.remove("active");
    menuItem2.classList.remove("active");
    menuItem3.classList.remove("active");
  };
};

// This function has the task of adding or removing animation to link file of info section and video section parts of the body.
function addAnimationToBody() {
  if ($.documentElement.scrollTop < 2050) {
    infoFileSection.classList.remove("animate__animated", "animate__shakeX");
    mainReasonSection.classList.remove("animate__animated", "animate__zoomIn");
  } else if ($.documentElement.scrollTop > 2050 && $.documentElement.scrollTop < 2200) {
    infoFileSection.classList.add("animate__animated", "animate__shakeX");
    mainReasonSection.classList.remove("animate__animated", "animate__zoomIn");
  } else if ($.documentElement.scrollTop > 2200 && $.documentElement.scrollTop < 2550) {
    infoFileSection.classList.remove("animate__animated", "animate__shakeX");
    mainReasonSection.classList.add("animate__animated", "animate__zoomIn");
  };
};


// This function is responsible for displaying the back to the top circle.
function showBackToTopCircle() {
  if ($.documentElement.scrollTop > 400) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  };
};

// This function is responsible for controlling the functions related to the scroll event.
function scrollBar() {
  scrollNavMenu();
  activeItemMenu();
  showBackToTopCircle();
  controlNavMenuAnimation();
  addAnimationToBody();
};

// return to the top of the page.
function backToTopHandeler() {
  window.scrollTo(0, 0);
};

// This function is responsible for opening the offcanvas menu.
function openOffCanvasMenuHandeler() {
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    offCanvasMenu.style.right = "-25rem";
    navOpen = false;
  } else {
    navBtn.classList.add("nav__btn--open");
    offCanvasMenu.style.right = "0";
    navOpen = true;
  }
}

// This function is responsible for closing the offcanvas menu.
function closeOffCanvasMenuHandeler() {
  offCanvasMenu.style.left = "-256rem";
}

// opening images
function openImages() {
  window.open(this.src);
}

// Events
window.addEventListener("scroll", scrollBar);
// window.addEventListener("scroll", addAnimationToBody,{once:true});
backToTop.addEventListener("click", backToTopHandeler);
navBtn.addEventListener("click", openOffCanvasMenuHandeler);
itemsMenuMobile.forEach(function (item) {
  item.addEventListener("click", closeOffCanvasMenuHandeler);
});
images.forEach(function (img) {
  img.addEventListener("click", openImages)
})

// Swiper Library
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2800
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  }
});