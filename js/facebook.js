/* Variabili */
let page_id = "112960967277502";
let access_token = "EAALy0N1eTEkBAP5MGKXb67KDBkOccL1z12s8CtikcTZBoqzjL8C7gx0SclHEDovrI82L86jZAX7oNa4bPqYJ71ZAQFO6mT7xqwRTsYowljCxpkMiVEi0UuHQ1sFGuYCsvExWaGUSuK66FczldJH24REn4CXxfgm49vqDJD7WwZDZD";

/* Richiesta di tutti i link url dei post */
var page_posts_request = (page_id, access_token) => {
var xhttp = new XMLHttpRequest();
xhttp.open(
  "GET", 
  `https://graph.facebook.com/${page_id}/published_posts?fields=permalink_url&access_token=${access_token}`
);

xhttp.onload = ()=> {
  if (xhttp.status == 200) {
    get_posts_link()
  } else {
    console.log(`error ${xhttp.status} ${xhttp.statusText}`);
  }
};
xhttp.send();

// Funzione da mettere fuori??
var get_posts_link = ()=> {
  console.log(xhttp.response)
  var response = (JSON.parse(xhttp.response));
  var posts_link = response.data;

  var posts_link_array = []
  posts_link.forEach(post => posts_link_array.push(post.permalink_url))


  /* NUOVA CHIAMATA DEI SINGOLI POST EMBED UTILIZZANDO VALORI ARRAY */
    /* POST 1 */
   var xhttp_post1 = new XMLHttpRequest();

    xhttp_post1.open(
      "GET", 
    `https://graph.facebook.com/oembed_post/?url=${posts_link_array[0]}&omitscript=true&access_token=${access_token}`
    );
  
    xhttp_post1.onload = ()=> {
      if (xhttp_post1.status == 200) {
        get_post1_link()
      } else {
        console.log(`error ${xhttp_post1.status} ${xhttp_post1.statusText}`);
      }
    }
    xhttp_post1.send();


    var get_post1_link = ()=> {
      console.log(xhttp_post1.response)
      var response1 = (JSON.parse(xhttp_post1.response));
      var post1_link = response1.html;
      console.log(post1_link)
      return document.getElementById("post1").insertAdjacentHTML("afterbegin", post1_link)
    } 

     /* POST 2 */
   var xhttp_post2 = new XMLHttpRequest();

    xhttp_post2.open(
      "GET", 
    `https://graph.facebook.com/oembed_post/?url=${posts_link_array[1]}&omitscript=true&access_token=${access_token}`
    );

    xhttp_post2.onload = ()=> {
      if (xhttp_post2.status == 200) {
        get_post2_link()
      } else {
        console.log(`error ${xhttp_post2.status} ${xhttp_post2.statusText}`);
      }
    }
    xhttp_post2.send();


    var get_post2_link = ()=> {
      var response2 = (JSON.parse(xhttp_post2.response));
      var post2_link = response2.html;
      console.log(post2_link)
      return document.getElementById("post2").insertAdjacentHTML("afterbegin", post2_link)
    } 

    /* POST 3 */
   var xhttp_post3 = new XMLHttpRequest();

    xhttp_post3.open(
      "GET", 
    `https://graph.facebook.com/oembed_post/?url=${posts_link_array[2]}&omitscript=true&access_token=${access_token}`
    );

    xhttp_post3.onload = ()=> {
      if (xhttp_post3.status == 200) {
        get_post3_link()
      } else {
        console.log(`error ${xhttp_post3.status} ${xhttp_post3.statusText}`);
      }
    }
    xhttp_post3.send();

    var get_post3_link = ()=> {
      var response3 = (JSON.parse(xhttp_post3.response));
      var post3_link = response3.html;
      console.log(post3_link)
      return document.getElementById("post3").insertAdjacentHTML("afterbegin", post3_link)
    } 
    
    /* POST 4 */
   var xhttp_post4 = new XMLHttpRequest();

    xhttp_post4.open(
      "GET", 
    `https://graph.facebook.com/oembed_post/?url=${posts_link_array[3]}&omitscript=true&access_token=${access_token}`
    );

    xhttp_post4.onload = ()=> {
      if (xhttp_post4.status == 200) {
        get_post4_link()
      } else {
        console.log(`error ${xhttp_post4.status} ${xhttp_post4.statusText}`);
      }
    }
    xhttp_post4.send();

    var get_post4_link = ()=> {
      var response4 = (JSON.parse(xhttp_post4.response));
      var post4_link = response4.html;
      console.log(post4_link)
      return document.getElementById("post4").insertAdjacentHTML("afterbegin", post4_link)
    }

    /* POST 5 */
   var xhttp_post5 = new XMLHttpRequest();

    xhttp_post5.open(
      "GET", 
    `https://graph.facebook.com/oembed_post/?url=${posts_link_array[4]}&omitscript=true&access_token=${access_token}`
    );

    xhttp_post5.onload = ()=> {
      if (xhttp_post5.status == 200) {
        get_post5_link()
      } else {
        console.log(`error ${xhttp_post5.status} ${xhttp_post5.statusText}`);
      }
    }
    xhttp_post5.send();

    var get_post5_link = ()=> {
      var response5= (JSON.parse(xhttp_post5.response));
      var post5_link = response5.html;
      console.log(post5_link)
      return document.getElementById("post5").insertAdjacentHTML("afterbegin", post5_link)
    }

  
  }
}

page_posts_request(page_id, access_token)

