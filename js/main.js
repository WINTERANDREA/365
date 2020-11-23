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
      delay: 400
    });


// CHAT ZOHO DESK
/* setTimeout(function() {
    $("#loader_container").remove()
  window.ZohoHCAsap = window.ZohoHCAsap || function (a, b) { ZohoHCAsap[a] = b; }; (function () { var d = document; var s = d.createElement("script"); s.type = "text/javascript"; s.defer = true; s.src = "https://desk.zoho.com/portal/api/web/inapp/545111000000311053?orgId=727482928"; d.getElementsByTagName("head")[0].appendChild(s); })();
}, 6000) */


/* new chat account produzione */
/* setTimeout(function() {
var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"8efa4e050a5bc01fe8bb1bb607a7d18da919faf8ddd93bdcf85ae1a777568be50ee1ac66e43b5af19860829777654fa3", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.eu/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
}, 6000)
 */
