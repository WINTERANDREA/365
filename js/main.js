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
 ScrollReveal().reveal('.card_default', {
      duration: 600,
      scale: 1.2,

      delay: 1000
    });

// Expand exagon container on screen < 992px
    $(window).ready(function () {
      if (window.innerWidth < 992) {
        $('#contenitore_esagono').removeClass('col-12');
      } else {
        $('#contenitore_esagono').addClass('col-12');
      }
    });
