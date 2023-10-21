function changeBg(){
 var navbar= document.getElementById("navbar");
 var scrollvalue= window.scrollY;


 if ( scrollvalue < 120 ){
    navbar.classList.remove("bgcolor");
   //  navbar.classList.remove("bgcolor a");
 }
 else{
    navbar.classList.add("bgcolor");
   //  navbar.classList.add("bgcolor a");
 }
}
window.addEventListener("scroll",changeBg);





$('.sajid').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,

  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
          
          
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})













 var a = 0;

$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
        
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    });

    a = 1;
  }
});






$('.sajid-1').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
 autoplay:true,
 dots:false,
 autoplayTimeout:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})




