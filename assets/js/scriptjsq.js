function selecteddropdown(e){
  e.parentElement.parentElement.parentElement.childNodes[1].innerText = e.innerText;
}

if($(window).width() > '768'){
  // Navbar fixed on scroll
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top', 'white-background');
          document.getElementsByClassName('api-keys')[0].style.top = "50px";
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
          document.getElementsByClassName('api-keys')[0].style.top = "130px";
        }
    });
  });
}

if($(window).width() <= '992'){
  // Navbar fixed on scrol50pxl
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('header').classList.add('fixed-top', 'white-background');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        }
    });
  });
}

// Show page settings in a dropdown menu
function showsettings(){
  var navbar = document.getElementsByClassName('navbar')[0];
  var li = navbar.getElementsByTagName('li');
  var links = navbar.getElementsByTagName('a')
  var span = navbar.getElementsByTagName('span')

  console.log(span);
  navbar.style.backgroundColor = "white";
  // navbar.style.position = 'fixed';
  navbar.style.minWidth = '100%';
  navbar.style.zIndex = '1060';
  for (var i = 0; i<li.length; i=i+1){
    if(i % 2 == 1){
      if (li[i].style.display == 'none'){
        li[i].style.display = 'block';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
}

// This detects a change in the the innerhtml of navbar dropdown links
var navbar = document.getElementsByClassName('navbar')[0];
var li = navbar.getElementsByTagName('li');

for (var i = 0; i<li.length; i=i+1){
  if(i % 2 == 1){
    // create a new instance of 'MutationObserver' named 'observer',
    // passing it a callback function
    observer = new MutationObserver(function(mutationsList, observer) {
       console.log(mutationsList[0].addedNodes[0].textContent);
       if(mutationsList[0].addedNodes[0].textContent == 'Single column'){
         console.log('Single');
         document.getElementsByClassName('input')[0].style.minWidth = '80%';
         document.getElementsByClassName('output')[0].style.minWidth = '80%';
       } else if (mutationsList[0].addedNodes[0].textContent == 'Double column') {
         document.getElementsByClassName('input')[0].style.minWidth = '';
         document.getElementsByClassName('output')[0].style.minWidth = '';
       }
    });

    // call 'observe' on that MutationObserver instance,
    // passing it the element to observe, and the options object
    observer.observe(li[i].children[0], {
       characterData: false,
       childList: true,
       attributes: false
    });
  }
}

// show endpoints list of class "api-keys" on toggler-bars clicked
document.getElementsByClassName('toggle-bars')[0].addEventListener('click', function() {
  // if()sfa-times

    if(this.childNodes[1].classList == 'fa fa-bars'){
      this.childNodes[1].classList.remove('fa-bars')
      this.childNodes[1].classList.add('fa-times')
      document.getElementsByClassName('api-keys')[0].style.width = '260px';
      document.getElementsByClassName('api-dash')[0].style.marginLeft = '260px';
      // if($(window).width() <= '768'){
        document.getElementsByTagName('header')[0].style.marginLeft = '260px';
      // }
    } else {
      this.childNodes[1].classList.remove('fa-times')
      this.childNodes[1].classList.add('fa-bars')
      document.getElementsByClassName('api-keys')[0].style.width = '0px';
      document.getElementsByClassName('api-dash')[0].style.marginLeft = '10px';
      document.getElementsByTagName('header')[0].style.marginLeft = '0px';
    }
});

function action(e){
  if($(window).width() <= '992'){
    document.getElementsByClassName('toggle-bars')[0].childNodes[1].classList.remove('fa-times')
    document.getElementsByClassName('toggle-bars')[0].childNodes[1].classList.add('fa-bars')
    document.getElementsByClassName('api-keys')[0].style.width = '0px';
    document.getElementsByClassName('api-dash')[0].style.marginLeft = '10px';
    document.getElementsByTagName('header')[0].style.marginLeft = '0px';
  }
  console.log(e.attributes);
  // console.log(e.attributes[1].textContent);
  if(e.attributes[4].textContent == "GET"){ // IF REQUEST method is GET
    fetch(""+e.attributes[3].textContent+"")//,{
      // method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'omit', // include, *same-origin, omit
      // headers: {
      //   'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // body: JSON.stringify({
        //
        // })
      // })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        $('.api-dash .col-md-6')[1].innerHTML = '\
          <div class="title">Example Request</div>\
          <hr class="border border-secondary" style="background-color:white;color:white; margin-top:10px;">\
          <div class="container">\
            <span style="color:#ddb3b55e;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size: 17px;font-weight: 600;padding-bottom: 20px;padding-top: 20px;">\
              <span class="border-bottom border-secondary row" style="min-width:100%">Response Code&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>\
              <span class="row">'+e.attributes[5].textContent+'</span>\
            </span> \
          </div>\
          <hr class="border-bottom border-secondary" style="background-color:white;color:white;"> \
          <div class="code">\
            fetch(<span class="urlStr">"'+e.attributes[3].textContent+'"</span>) <br>\
            &nbsp; .then((<span class="var">response)</span> => { <br>\
              &nbsp; &nbsp; &nbsp; return response.json() <br>\
            &nbsp; }) <br>\
            &nbsp; .then((<span class="var">result</span>) => { <br>\
            &nbsp; &nbsp; &nbsp; console.log(<span class="var">result</span>) <br>\
            &nbsp; })<br>\
            &nbsp; .catch((<span class="var">error</span>) => console.log("error", <span class="var">error</span>));<br>\
          </div>\
        '
      })
      .catch((error) => console.log('error :',error));

      $('.api-dash .col-md-6')[0].innerHTML = '\
      <div class="end-points">\
        <div class="border-bottom">\
          <h2>Hive UniDash API</h2>\
        </div>\
        <div class="intro border-bottom">\
          <h3>'+e.attributes[1].textContent+'</h3>\
        </div>\
        <div class="api-info">\
          <div class="info-title">\
            <span class="method">'+e.attributes[4].textContent+'</span>\
            <span class="method-info">'+e.attributes[2].textContent+'</span>\
          </div>\
          <div class="endpoint-url">\
            '+e.attributes[3].textContent+' \
          </div>\
          <div class="endpoint-body">\
            <div class="endpoint-body-title border-bottom">\
              <b>Body</b> <span>raw</span>\
            </div>\
            <div class="endpoint-json-body">'+'\
              <samp>\
                { <br> <br>\
                  <!--  &nbsp; "email": "hermann@kumasihive.com", <br>'+'\
                    &nbsp; "password": "user@Pass123" <br> -->\
                }\
              </samp>\
            </div>\
          </div>\
          <div class="endpoint-description">\
            <p></p>\
          </div>\
        </div>\
      </div>\
      '
  } else if(e.attributes[4].textContent == "POST"){

    // fetch(""+e.attributes[3].textContent+"",{
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'omit', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   // body: JSON.stringify({
    //     //
    //     // })
    //   })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((myJson) => {
    //     console.log(myJson);
    //     $('.api-dash .col-md-6')[1].innerHTML = '\
    //       fdjkl\
    //     '
    //   })

    $('.api-dash .col-md-6')[0].innerHTML = '\
      <div class="end-points">\
        <div class="border-bottom">\
          <h2>Hive UniDash API</h2>\
        </div>\
        <div class="intro border-bottom">\
          <h3>'+e.attributes[1].textContent+'</h3>\
        </div>\
        <div class="api-info">\
          <div class="info-title">\
            <span class="method">'+e.attributes[4].textContent+'</span>\
            <span class="method-info">'+e.attributes[2].textContent+'</span>\
          </div>\
          <div class="endpoint-url">\
            '+e.attributes[3].textContent+' \
          </div>\
          <div class="endpoint-body">\
            <div class="endpoint-body-title border-bottom">\
              <b>Body</b> <span>raw</span>\
            </div>\
            <div class="endpoint-json-body">'+'\
              <samp>\
                { <br> <br>\
                  '+e.attributes[5].textContent+'\
                  <!--  &nbsp; "email": "hermann@kumasihive.com", <br>'+'\
                    &nbsp; "password": "user@Pass123" <br> -->\
                }\
              </samp>\
            </div>\
          </div>\
          <div class="endpoint-description">\
            <p></p>\
          </div>\
        </div>\
      </div>\
    '
  }
}

function hiveunidash(e){
  $('.api-dash .col-md-6')[1].innerHTML = '';
  $('.api-dash .col-md-6')[0].innerHTML = '\
    <div class="hiveunidash">\
      <div class="" id="introduction">\
        <h4>Introduction</h4>\
        <p>\
          The purpose of this document is to describe how the Solar Taxi Deliver Platform shall expose\
          it\'s service to third parties via an API. The API require a client access token which can be requested by\
          emailing admin@solartaxi.co.\
        </p>\
      </div>\
      <div class="" id="dataTypes">\
        <h4>Data Types & Response Format</h4>\
        <p>\
          The API we have follows all the following DATATYPES and Response Formats.\
          <ul>\
            <li>\
              Throughout the api the date format we recommend is YYYY-MM-DD HH:MM:SS. Explore\
              http://gr2m.github.io/moment-parseformat/ for more formats.\
            </li>\
            <li>\
              The response format will be JSON having status, message and data key.\
              <br>\
              <samp>\
              { <br>\
                &nbsp; "message": "successful", <br>\
                &nbsp; "status": 200, <br>\
                &nbsp; "data": {} <br>\
              }\
              </samp>\
            </li>\
          </ul>\
        </p>\
      </div>\
      <div class="" id="errorcodes">\
        <h4>Error Codes</h4>\
        <p>\
          When something is wrong with a request, the API will respond with a non-<code>200</code>\
          status code in the response. To help you better understand the problem, where possible, the API\
          overloads a number of different error codes so your application logic has as much visibility as\
          possible into what has gone wrong.\
        </p>\
        <p>\
          <code>100</code>  -- PARAMETER_MISSING <br>\
          <code>401</code>  -- INVALID_KEY <br>\
          <code>400</code>  -- ERROR_IN_EXECUTION <br>\
          <code>404</code>  -- RESOURCE_NOT_FOUND <br>\
        </p>\
      </div>\
    </div>\
  '
}

    // $('.api-dash .col-sm-6')[0].innerHTML = '\
    //   <div class="hiveunidash">\
    //     <div class="" id="introduction">\
    //       <h4>Introduction</h4>\
    //       <p>' + 'The purpose of this document is to describe how the Solar Taxi Deliver Platform \
    //       shall expose its service to\
    //         third parties via an API. The API require a client access token which can be requested by emailing
    //         admin@solartaxi.co
    //       </p>
    //     </div>
    //     <div class="" id="dataTypes">
    //       <h4>Data Types & Response Format</h4>
    //       <p>
    //         The API we have follows all the following DATATYPES and Response Formats.
    //         <ul>
    //           <li>
    //             Throughout the api the date format we recommend is YYYY-MM-DD HH:MM:SS. Explore
    //             http://gr2m.github.io/moment-parseformat/ for more formats.
    //           </li>
    //           <li>
    //             The response format will be JSON having status, message and data key.
    //             <br>
    //             <samp>
    //               { <br>
    //                 &nbsp; "message": "successful", <br>
    //                 &nbsp; "status": 200, <br>
    //                 &nbsp; "data": {} <br>
    //               }
    //             </samp>
    //           </li>
    //         </ul>
    //       </p>
    //     </div>
    //     <div class="" id="errorcodes">
    //       <h4>Error Codes</h4>
    //       <p>
    //         When something is wrong with a request, the API will respond with a non-<code>200</code>
    //         status code in the response. To help you better understand the problem, where possible, the API
    //         overloads a number of different error codes so your application logic has as much visibility as
    //         possible into what has gone wrong.
    //       </p>
    //       <p>
    //         <code>100</code>  -- PARAMETER_MISSING <br>
    //         <code>401</code>  -- INVALID_KEY <br>
    //         <code>400</code>  -- ERROR_IN_EXECUTION <br>
    //         <code>404</code>  -- RESOURCE_NOT_FOUND <br>
    //       </p>
    //     </div>
    //   </div>
    // '
