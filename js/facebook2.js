/* Variabili */
let page_id = "112960967277502";
let access_token = "EAALy0N1eTEkBAP5MGKXb67KDBkOccL1z12s8CtikcTZBoqzjL8C7gx0SclHEDovrI82L86jZAX7oNa4bPqYJ71ZAQFO6mT7xqwRTsYowljCxpkMiVEi0UuHQ1sFGuYCsvExWaGUSuK66FczldJH24REn4CXxfgm49vqDJD7WwZDZD";
var count_post;

async function get_posts(){
  const response = await fetch(`https://graph.facebook.com/${page_id}/published_posts?fields=permalink_url&access_token=${access_token}`)
  const posts = await response.json();
  const last_posts = posts.data.splice(0,5);
  console.log(last_posts)
  count_post = last_posts.length
  console.log(count_post)
  return last_posts
}

get_posts()
.then(data => {
  var post_number = 1;
  for (const single_post of data) {
    console.log(single_post["permalink_url"])
    var fb_post = document.createElement("div");
    fb_post.classList.add("fb-post")
    fb_post.setAttribute("data-href", single_post["permalink_url"])
    fb_post.setAttribute("data-width", 350)
    var my_div = document.getElementById("post" + post_number);
    my_div.appendChild(fb_post)
    post_number += 1;
  }
  FB.XFBML.parse();
})

window.onload = function(){
  FB.Event.subscribe('xfbml.render', function(response) {
    console.log(response)
    let renders = document.querySelectorAll("[fb-xfbml-state]");
    if (renders.length == count_post){
      console.log(renders)
      $(".SlickCarousel").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:4000, //  Slide Delay
    speed:1500, // Transition Speed
    slidesToShow:4, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:false,
    appendArrows:$(".Carosello .Head .Arrows"), // Class For Arrows Buttons
    prevArrow:'<span class="Slick-Prev"></span>',
    nextArrow:'<span class="Slick-Next"></span>',
    easing:"linear",
    responsive:[
      {breakpoint:1650,settings:{
        slidesToShow:3,
      }},
      {breakpoint:1200,settings:{
        slidesToShow:2,
      }},
      {breakpoint:920,settings:{
        slidesToShow:1,
      }}
    ],
  })
  $("#loader_container").remove()
  } 
  })
}