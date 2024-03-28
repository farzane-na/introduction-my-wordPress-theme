let $=document;
let navMenu=$.querySelector(".mainmenu")
let menuItem1=$.querySelector(".item1")
let menuItem2=$.querySelector(".item2")
let menuItem3=$.querySelector(".item3")
let menuItem4=$.querySelector(".item4")
function scrollNavMenu(){
  if($.documentElement.scrollTop>400){
    navMenu.style.cssText="position:fixed; top:0;  padding:3rem 1rem 2rem 0; backdrop-filter: blur(10px); box-shadow:0 0 15px var(--secondry-blue); border-radius: 2rem;";
  }
  else{
    navMenu.style.cssText="position:reletives; background-color: var(--body-color); padding:2rem 0;"
  }

}
function activeItemMenu(){
  console.log($.documentElement.scrollTop)
  if($.documentElement.scrollTop<400){
    menuItem1.classList.remove("active")
    menuItem2.classList.remove("active")
    menuItem3.classList.remove("active")
    menuItem4.classList.remove("active")
  }
  if($.documentElement.scrollTop>400){
    menuItem1.classList.add("active")
    menuItem2.classList.remove("active")
    menuItem3.classList.remove("active")
    menuItem4.classList.remove("active")
  }
  if($.documentElement.scrollTop>1204){
    menuItem2.classList.add("active")
    menuItem1.classList.remove("active")
    menuItem3.classList.remove("active")
    menuItem4.classList.remove("active")
  }
  if($.documentElement.scrollTop>2000){
    menuItem3.classList.add("active")
    menuItem1.classList.remove("active")
    menuItem2.classList.remove("active")
    menuItem4.classList.remove("active")
  }
  if($.documentElement.scrollTop>2400){
    menuItem4.classList.add("active")
    menuItem1.classList.remove("active")
    menuItem2.classList.remove("active")
    menuItem3.classList.remove("active")
  }
}
function scrollBar(){
  scrollNavMenu()
  activeItemMenu()
}


window.addEventListener("scroll",scrollBar)
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