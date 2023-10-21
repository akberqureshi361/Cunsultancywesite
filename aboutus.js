function changeBg(){
  var navbar= document.getElementById("navbar");
  var scrollvalue= window.scrollY;
 
 
  if ( scrollvalue < 100 ){
     navbar.classList.remove(".active");
    //  navbar.classList.remove("bgcolor a");
  }
  else{
     navbar.classList.add(".active");
    //  navbar.classList.add("bgcolor a");
  }
 }
 window.addEventListener("scroll",changeBg);





$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})