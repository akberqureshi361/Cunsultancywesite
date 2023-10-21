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