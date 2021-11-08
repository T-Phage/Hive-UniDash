
/* *************************************************************
  Change p-sidenav position from fixed to relative when footer is in view
************************************************************ */
// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// Utililty function that accepts the footer element
function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

document.addEventListener('scroll', function(e) {
var isElementInView = Utils.isElementInView($('.footer'), false);

  if (isElementInView) {
      // console.log('in view');
      document.getElementsByClassName('p-sidenav')[0].style.position = "absolute";
      document.getElementsByClassName('p-sidenav')[0].style.height = "auto";
  } else {
      // console.log('out of view');
      document.getElementsByClassName('p-sidenav')[0].style.position = "fixed";
      document.getElementsByClassName('p-sidenav')[0].style.height = "100%";
  }
})

/* Detect a left swipe */

document.getElementsByClassName('main-privacy')[0].addEventListener('touchstart', handleTouchStart, false);
document.getElementsByClassName('main-privacy')[0].addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            if ($(window).width() <= 768){
              closeNav()
            }
        } else {
            /* right swipe */
            if ($(window).width() <= 768){
              openNav()
            }
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            if ($(window).width() <= 768){
              showinfo()
            }
        } else {
            /* down swipe */
            if ($(window).width() <= 768){
              showinfo()
            }
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "340px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* Display quick links slide information */
function showinfo(){
  document.getElementsByClassName('scroll-alert')[0].style.display = 'block';

  setTimeout(function(){
    document.getElementsByClassName('scroll-alert')[0].style.display = 'none';
  }, 3000)
}

// console.log($(window).width());
function linkclicked(e) {
  // console.log(e.innerText);
  var termsbody = document.getElementsByClassName('terms')[0]
  var termsrows = termsbody.getElementsByClassName('vehi-cards')
  // console.log(termsrows.length);

  for (var i=0;i<termsrows.length; i++){
    // console.log(termsrows[i].children[0].children[0].innerText);
    if (e.innerText.toString() == termsrows[i].children[0].children[0].innerText.toString()){
      var item = termsrows[i].children[0]
      setTimeout(function() {
        item.style.display = 'block';
      }, 30);
      // termsrows[i].children[0].style.display = 'block';
      // console.log(termsrows[i].children[0], 'consoled');
      document.getElementById("mySidenav").style.width = "0";
    } else {
      termsrows[i].children[0].style.display = 'none';
    }
  }
}


// This fuction will create an iframe to view agreement document on either purchase or rent button clicked
function showdocs(e) {
  var data = e.attributes[3].nodeValue // this will get the url attribute of the button clicked
  var col_block = e.parentElement.parentElement.parentElement // this will get the main card on which terms info are

  for (var i = 0; i < col_block.children.length; i++){ //loop through the children of the main card if object tag is exists
    console.log(col_block.children[i].nodeName);
    if (col_block.children[i].nodeName == "OBJECT"){ // if exists remove from document
      col_block.children[i].remove();
    }
  }

  var object = document.createElement("object") //create html object tag to view pdf
  object.setAttribute('data', data) // add attribute data to the object tag created
  object.setAttribute('type', 'application/pdf') // add attribute type to the object tag created
  object.setAttribute('width', '100%') // set default width for the odject tag
  object.setAttribute('height', '500px') // set default height for the object tag

  // create a paragraph of text that will notify users of browsers inability to view pdf document and provide a link to download
  var p = document.createElement("p") // create p tag
  var ptext = document.createTextNode("Your browser does not support PDFs."); // add text to the p tag
  p.appendChild(ptext) // append text to the p tag
  var pa = document.createElement("a") // create an a tag for user to download pdf
  pa.setAttribute('href', data) // add href attribute to the a tag
  var patext = document.createTextNode("Download the PDF") // create a text node to the a tag
  pa.appendChild(patext) // append text node to the a tag to the p tag
  p.appendChild(pa) // append the a tag to the the p tag
  object.appendChild(p) // append p the object tag

  col_block.appendChild(object) // append object to the document
}
