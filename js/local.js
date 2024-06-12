$(document).ready(function(){
      $('.slider').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          autoplay:true,
          autoplayTimeout:10000,
          dots:true,
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
      });
    $('.twoSlider').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          autoplay:false,
          autoplayTimeout:5000,
          dots:false,
          navText : ["<img src='images/step-prev.png'/>","<img src='images/step-next.png'/>"],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:2
              }
          }
      });
   
    $('.fourSlider').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          center: false,
          autoplay:true,
          autoplayTimeout:5000,
          dots:true,
          navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
          responsive:{
              0:{
                  items:2,
                  center:false
              },
              600:{
                  items:3,
                  center:false
              },
              1000:{
                  items:4
              }
          }
      });
    });



$( ".navbar-toggler, .cross-toggler" ).click(function() {
    $(".collapse").toggleClass("active");
    $(".overLay").toggleClass("active");
  });

$( ".closeSticky" ).click(function() {
    $(".stickyMenu").hide();
  });
if(window.innerWidth < 991){
  $( ".dropmenuToggle" ).click(function() {
    $(this).parent(".dropdown").toggleClass("active");
  });
}
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 41) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});


const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('num-label');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});



  