// Expand exagon container on screen < 992px
    $(window).ready(function () {
      if (window.innerWidth < 992) {
        $('#contenitore_esagono').removeClass('col-12');
      } else {
        $('#contenitore_esagono').addClass('col-12');
      }
    });

//COUNTER
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// COLLAPSIBLE 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
    });
}

// SCROLL REVEAL
 ScrollReveal().reveal('.card_servizi', {
      duration: 1200,
      scale: 0,
      delay: 600
    });



    // CAROSELLO
    setTimeout(function(){
      $(document).ready(function(){
  $(".SlickCarousel").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:6000, //  Slide Delay
    speed:1000, // Transition Speed
    slidesToShow:4, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:false,
    appendArrows:$(".Carosello .Head .Arrows"), // Class For Arrows Buttons
    prevArrow:'<span class="Slick-Prev"></span>',
    nextArrow:'<span class="Slick-Next"></span>',
    easing:"linear",
    responsive:[
      {breakpoint:1400,settings:{
        slidesToShow:2,
      }},
      {breakpoint:992,settings:{
        slidesToShow:2,
      }},
      {breakpoint:760,settings:{
        slidesToShow:1,
      }}
    ],
  })
})
    }, 1500)
    
