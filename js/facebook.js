
/* PAGINA FACEBOOK ASSISTENZA 365 RICHIESTA LINK URL DI TUTTI I POST */
var xhttp = new XMLHttpRequest();
xhttp.open(
  "GET", 
"https://graph.facebook.com/112960967277502/published_posts?fields=permalink_url&access_token=EAALy0N1eTEkBAP5MGKXb67KDBkOccL1z12s8CtikcTZBoqzjL8C7gx0SclHEDovrI82L86jZAX7oNa4bPqYJ71ZAQFO6mT7xqwRTsYowljCxpkMiVEi0UuHQ1sFGuYCsvExWaGUSuK66FczldJH24REn4CXxfgm49vqDJD7WwZDZD"
);
xhttp.send();

var get_response = ()=> {
  if (xhttp.status == 200) {
    get_posts_link()
  } else {
    console.log(`error ${xhttp.status} ${xhttp.statusText}`);
  }
}
xhttp.onload = get_response;

var get_posts_link = ()=> {
  var posts_link_array = []
  console.log(xhttp);
  console.log(JSON.parse(xhttp.response))
  var response = (JSON.parse(xhttp.response));
  var posts_link = response.data;
  posts_link.forEach(post => posts_link_array.push(post.permalink_url))
  console.log(posts_link_array[0])

   var xhttp_oembed = new XMLHttpRequest();
xhttp_oembed.open(
  "GET", 
`https://graph.facebook.com/oembed_post/?url=${posts_link_array[0]}&access_token=EAALy0N1eTEkBAP5MGKXb67KDBkOccL1z12s8CtikcTZBoqzjL8C7gx0SclHEDovrI82L86jZAX7oNa4bPqYJ71ZAQFO6mT7xqwRTsYowljCxpkMiVEi0UuHQ1sFGuYCsvExWaGUSuK66FczldJH24REn4CXxfgm49vqDJD7WwZDZD`
);
xhttp_oembed.send();

xhttp_oembed.onload = ()=> {
  if (xhttp_oembed.status == 200) {
    get_oembed_link()
  } else {
    console.log(`error ${xhttp_oembed.status} ${xhttp_oembed.statusText}`);
  }
}


var get_oembed_link = ()=> {
  var response = (JSON.parse(xhttp_oembed.response));
  var oembed_link = response.html;

  console.log(oembed_link)
} 
}


/* GENERAZIONE CODICE OEMBEDED DEI SINGOLI POST UTILIZZANDO I LINK URL DEI POST  */
 /* var xhttp = new XMLHttpRequest();
xhttp.open(
  "GET", 
`https://graph.facebook.com/oembed_post/?url=${url_preso_da_posts_link_array[0]}&access_token=EAALy0N1eTEkBAP5MGKXb67KDBkOccL1z12s8CtikcTZBoqzjL8C7gx0SclHEDovrI82L86jZAX7oNa4bPqYJ71ZAQFO6mT7xqwRTsYowljCxpkMiVEi0UuHQ1sFGuYCsvExWaGUSuK66FczldJH24REn4CXxfgm49vqDJD7WwZDZD`
);
xhttp.send();

var get_response = ()=> {
  if (xhttp.status == 200) {
    get_oembed_link()
  } else {
    console.log(`error ${xhttp.status} ${xhttp.statusText}`);
  }
}
xhttp.onload = get_response;

var get_oembed_link = ()=> {
  var response = (JSON.parse(xhttp.response));
  var oembed_link = response.html;

  console.log(oembed_link)
}

 */
