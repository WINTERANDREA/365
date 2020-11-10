var xhttp = new XMLHttpRequest();
xhttp.open(
  "GET", 
"https://graph.facebook.com/oembed_post/?url=https%3A%2F%2Fwww.facebook.com%2F112960967277502%2Fposts%2F119409939965938&access_token=EAALy0N1eTEkBADBVpsRNEHhZAu8f78uZCjIiBLxCKevNH5gVktBK6d7EZCy0LN1Ifs3mooQPXpiGSDCuuMhUjcYOdVFz1BAkPVgZABnWVCUPXy7ZAZAuSzH2QnEFd7SWQKlTo4GSvJfXdgqBTSMoJF0uTYwTnlGinAeTPl5WQ9NBMMdk5emCxcjiFYvVHpsHcpyi0ZAFzKaPAZDZD"
);

/* "https://graph.facebook.com/me?fields=id,name,feed{message,%20story}&access_token=EAALy0N1eTEkBADBVpsRNEHhZAu8f78uZCjIiBLxCKevNH5gVktBK6d7EZCy0LN1Ifs3mooQPXpiGSDCuuMhUjcYOdVFz1BAkPVgZABnWVCUPXy7ZAZAuSzH2QnEFd7SWQKlTo4GSvJfXdgqBTSMoJF0uTYwTnlGinAeTPl5WQ9NBMMdk5emCxcjiFYvVHpsHcpyi0ZAFzKaPAZDZD" */


// Asssitenza 365 1407253866275276|81a3c6e910026ced1e492faf6915dc58
// a365_pages 829928834485321|a3db373eb83b8a9fa2012b924350c3ae

// id post prova 2 112960967277502_119409939965938
// id post prova 1 112960967277502_119409569965975

var get_response = ()=> {
  if (xhttp.status == 200) {
    render_post()
  } else {
    console.log(`error ${xhttp.status} ${xhttp.statusText}`);
  }
}

var render_post = ()=> {
  console.log(xhttp);
  console.log(JSON.parse(xhttp.response))
    var response = (JSON.parse(xhttp.response));
    var post = response.html;
    document.getElementById('post').innerHTML= post;
}

xhttp.onload = get_response;
xhttp.send();

 
