var swiper = new Swiper(".slide-content", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 2,
        },
        660: {
            slidesPerView: 3,
        },
        990:{
          slidesPerView:4,
        },
        1320:{
          slidesPerView:5,
        },
       
    },
  });


          // function for hide and

  function myFunction() {
    var dots = document.getElementById("moreResponce");
    
    var btnText = document.getElementById("myBtn");
  
    
  
    if (dots.style.display === "none") {
      dots.style.display = "grid";
      btnText.innerHTML = "Less";
      
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "More";
     
    }
  }


  function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay')
    //var ovrly=document.getElementsByClassName('.overlay');
    //ovrly.style.opacity ="1";
    document.querySelector('.loginForm').classList.add('showloginForm')
    
}
function removeModal(){
    document.querySelector('.overlay').classList.remove('showoverlay')
    //var ovrly=document.getElementsByClassName('.overlay');
    //ovrly.style.opacity ="1";
    document.querySelector('.loginForm').classList.remove('showloginForm')
 }