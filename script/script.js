let $=document;

// Variables
let navMenu=$.querySelector(".mainmenu");
let menuItem1=$.querySelector(".item1");
let menuItem2=$.querySelector(".item2");
let menuItem3=$.querySelector(".item3");
let menuItem4=$.querySelector(".item4");
let backToTop=$.querySelector(".back-to-top");

// Functions : 

// This function is responsible for making the menu bar stick when the page is scrolled.
function scrollNavMenu(){
  if($.documentElement.scrollTop>330){
    navMenu.style.cssText="position:fixed; top:0;  padding:3rem 1rem 2rem 0; backdrop-filter: blur(10px); box-shadow:0 0 15px var(--secondry-blue); border-radius: 2rem;";
  }else{
    navMenu.style.cssText="position:reletives; background-color: transparent; padding:3rem 1rem 2rem 0;";
  };
};

// This function has the task of specifying the desired item of that section in the menu bar when the page reaches the desired section.
function activeItemMenu(){
  console.log($.documentElement.scrollTop);
  if($.documentElement.scrollTop<330){
    menuItem1.classList.remove("active");
    menuItem2.classList.remove("active");
    menuItem3.classList.remove("active");
    menuItem4.classList.remove("active");
  }else if($.documentElement.scrollTop>330 && $.documentElement.scrollTop<1350){
    menuItem1.classList.add("active");
    menuItem2.classList.remove("active");
    menuItem3.classList.remove("active");
    menuItem4.classList.remove("active");
  }else if($.documentElement.scrollTop>1350 && $.documentElement.scrollTop<2200){
    menuItem2.classList.add("active");
    menuItem1.classList.remove("active");
    menuItem3.classList.remove("active");
    menuItem4.classList.remove("active");
  }else if($.documentElement.scrollTop>2200 && $.documentElement.scrollTop<2550){
    menuItem3.classList.add("active");
    menuItem1.classList.remove("active");
    menuItem2.classList.remove("active");
    menuItem4.classList.remove("active");
  }else if($.documentElement.scrollTop>2500){
    menuItem4.classList.add("active");
    menuItem1.classList.remove("active");
    menuItem2.classList.remove("active");
    menuItem3.classList.remove("active");
  };
};

// This function is responsible for displaying the back to the top circle.
function showBackToTopCircle(){
  if($.documentElement.scrollTop>400){
    backToTop.style.display="flex";
  }else{
    backToTop.style.display="none";
  };
};

// This function is responsible for controlling the functions related to the scroll event.
function scrollBar(){
  scrollNavMenu();
  activeItemMenu();
  showBackToTopCircle();
};

// return to the top of the page.
function backToTopHandeler(){
  window.scrollTo(0,0);
};

// Events
window.addEventListener("scroll",scrollBar);
backToTop.addEventListener("click",backToTopHandeler);

// Swiper Library
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay:{
        delay:2800
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