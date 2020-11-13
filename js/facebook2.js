/* Variabili */
let page_id = "112960967277502";
let access_token = "EAALy0N1eTEkBAP5MGKXb67KDBkOccL1z12s8CtikcTZBoqzjL8C7gx0SclHEDovrI82L86jZAX7oNa4bPqYJ71ZAQFO6mT7xqwRTsYowljCxpkMiVEi0UuHQ1sFGuYCsvExWaGUSuK66FczldJH24REn4CXxfgm49vqDJD7WwZDZD";

async function get_posts(){
  const response = await fetch(`https://graph.facebook.com/${page_id}/published_posts?fields=permalink_url&access_token=${access_token}`)
  const posts = await response.json();
  return posts
}

get_posts()
.then(data => {
  for (const single_post of data.data) {
    console.log(single_post["permalink_url"])
    var fb_post = document.createElement("div");
    fb_post.classList.add("fb-post")
    fb_post.setAttribute("data-href", single_post["permalink_url"])
    var my_div = document.getElementById('sezione_post');
    my_div.appendChild(fb_post)
  }
})