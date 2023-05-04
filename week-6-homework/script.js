console.log('Remove this console log and get started!')


// all available urls
var bm= ["https://www.youtube.com/watch?v=Q5aHx6Tn3LI&pp=ygUMYmV0aGFueSBtb3Rh", 	
            "https://www.youtube.com/watch?v=4LQ2PqLSR3s&pp=ygUMYmV0aGFueSBtb3Rh",
						"https://www.youtube.com/watch?v=u60Pb8vd4rM&pp=ygUMYmV0aGFueSBtb3Rh",
            "https://www.youtube.com/watch?v=6JXNG8rbeKc&pp=ygUMYmV0aGFueSBtb3Rh",
            "https://www.youtube.com/watch?v=G7fFc8pwKFE&pp=ygUMYmV0aGFueSBtb3Rh"];


function loadbm() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = bm[Math.floor(Math.random()*bm.length)];
  el.src = newUrl;
}


var zo = ["https://www.youtube.com/embed/G39wsprmU2M", 	
									"https://www.youtube.com/watch?v=rwbi_ppjiZQ&pp=ygUGem9lbGxh",
									"https://www.youtube.com/watch?v=s9ZQ6VuoN1c&pp=ygUGem9lbGxh",
                "https://www.youtube.com/watch?v=TQFCvyJXTIc&pp=ygUGem9lbGxh",
              "https://www.youtube.com/watch?v=TJsYegi9qsw&pp=ygUGem9lbGxh"];

                  function loadzo() {
                    // get iframe element by id
                    var el = document.getElementById('ifr');
                    // get new url
                    var newUrl = zo[Math.floor(Math.random()*zo.length)];
                    el.src = newUrl;
                  }


var eva = ["https://www.youtube.com/watch?v=fMH0zmBAfxw&pp=ygULbXlsaWZlYXNldmE%3D", 	
"https://www.youtube.com/watch?v=1tA5btLM8Z0&pp=ygULbXlsaWZlYXNldmE%3D",
"https://www.youtube.com/watch?v=yKA_g7yffKQ&pp=ygULbXlsaWZlYXNldmE%3D",
"https://www.youtube.com/watch?v=84Qi_3V3Igk&pp=ygULbXlsaWZlYXNldmE%3D"];

function loadeva() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = eva[Math.floor(Math.random()*eva.length)];
  el.src = newUrl;
}