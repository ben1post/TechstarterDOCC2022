
Array.from(document.querySelectorAll('*')).find(e => e.__vue__).__vue__

`var dropcollection = document.getElementsByClassName("dropdown-item");

var newLink = document.createElement("div");
            newLink.innerHTML = "<a href='https://aoop.studio' class='dropdown-item' role='menuitem'> CUSTOM LINK </a>"
            dropcollection.item(5).parentNode.replaceChild(newLink, dropcollection.item(5));`


`window.addEventListener('load', function(event) {var dropcollection = document.getElementsByClassName("dropdown-item");
console.log("HELLOOOO");
var newLink = document.createElement("div");
newLink.innerHTML = "<a href='https://aoop.studio' class='dropdown-item' role='menuitem'> CUSTOM LINK </a>"
dropcollection.item(5).parentNode.replaceChild(newLink, dropcollection.item(5))t;}`


(function() {
  var l = function() {
var d = document;
var s = d.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = "console.log('hello')"

var x = d.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
      };
  l();
})();


(function() {
  var l = function() {
var d = document;
var s = d.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = "console.log('hello')"

var x = d.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
      };
  l();
})();



(function() {
  var l = function() {
var d = document;
var s = d.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = "window.addEventListener('load', function(event) { \
var infofooter = document.getElementsByClassName('footer-info') \
console.log(infofooter) \
infofooter.item(1).childNodes.item(2).data = '' \
infofooter.item(1).childNodes.item(3).href = 'https://aoop.studio'\
infofooter.item(1).childNodes.item(3).innerText = 'aoop.studio'"

var x = d.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
      };
  l();
})();




//////////////////////////////////////
var infofooter = document.getElementsByClassName("footer-info")
  
console.log(infofooter)

infofooter.item(1).childNodes.item(2).data = ""
infofooter.item(1).childNodes.item(3).href = "https://aoop.studio"
infofooter.item(1).childNodes.item(3).innerText = "aoop.studio"

// DOMContentLoaded
// load
try {
  // get element by class, then remove branding link
  window.addEventListener("load", function(event) {
  var infofooter = document.getElementsByClassName("footer-info")
  
  console.log(infofooter)

  //infofooter.item(1).innerHTML =  "<a data-v-09b28eac=\"\" title=\"Privacy policy\" class=\"link\">Imprint &amp; Privacy Policy</a><br data-v-09b28eac=\"\">powered by <a data-v-09b28eac=\"\" target=\"_blank\" href=\"https://www.coapp.io\">coapp.io</a>"
  infofooter.item(1).childNodes.item(2).data = ""
  infofooter.item(1).childNodes.item(3).href = "https://aoop.studio"
  infofooter.item(1).childNodes.item(3).innerText = "aoop.studio"
  // firstChild.
  //var infoReplace = document.createElement("div");
            // infoReplace.innerHTML = "<a data-v-09b28eac=\"\" title=\"Privacy policy\" class=\"link\">Imprint &amp; Privacy Policy</a><br data-v-09b28eac=\"\">powered by <a data-v-09b28eac=\"\" target=\"_blank\" href=\"https://www.coapp.io\">coapp.io</a>"

            // infofooter.item(1).parentNode.replaceChild(infoReplace, infofooter.item(1));
  
  console.log(document.getElementsByClassName("footer-info"))
  });
} catch (error) {
  console.log("ERR 2")
  console.log(error)}


try {
  // get element by class, then change link
  window.addEventListener("load", function(event) {
  var dropcollection = document.getElementsByClassName("dropdown-item");

  var newLink = document.createElement("div");
              newLink.innerHTML = "<a href='https://aoop.studio' class='dropdown-item' role='menuitem'> CUSTOM LINK </a>"
              dropcollection.item(5).parentNode.replaceChild(newLink, dropcollection.item(5));
  });
} catch (error) {



  console.log("ERR 3");}



// ADD CUSTOM CSS:

// try {
// /**
//  * Utility function to add CSS in multiple passes.
//  * @param {string} styleString
//  */
// function addStyle(styleString) {
//   const style = document.createElement('style');
//   style.textContent = styleString;
//   document.head.append(style);
// }

// addStyle(`
//  .footer-info {
//     visibility: hidden !important;
//   }`);
// } catch (error) {
// console.log("ERR 1")
// }





function doSomethingWithElement(myElement) {
    //myElement.addEventListener('load', function() {
        // Do stuff here
console.log("UH OH MY GOD");
console.log(myElement)

myElement.item(1).childNodes.item(2).data = ""
myElement.item(1).childNodes.item(3).href = "https://aoop.studio"
myElement.item(1).childNodes.item(3).innerText = "aoop.studio"
   // });
}

function searchForElement() {
    const el = document.getElementsByClassName("footer-info");
    if (el) {
       return doSomethingWithElement(el); 
    }
    window.searchID = window.requestAnimationFrame(searchForElement);
}

// Store the request ID so it can be cancelled later
// Otherwise it'll run forever!
window.searchID = window.requestAnimationFrame(searchForElement);
window.addEventListener('load', function() {
    // window.cancelAnimationFrame(window.searchID);
});

var forceRedraw = function(element){

    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;  // don't worry about previous display style

    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        element.style.display = disp;
        n.parentNode.removeChild(n);
    },20); // you can play with this timeout to make it as short as possible
}

function doSomethingWithElement(myElement) {
    //myElement.addEventListener('load', function() {
        // Do stuff here
console.log("UH OH MY GOD");
console.log(myElement)

myElement.item(1).childNodes.item(2).data = ""
myElement.item(1).childNodes.item(3).href = "https://aoop.studio"
myElement.item(1).childNodes.item(3).innerText = "aoop.studio"
   // });
}

function searchForElement() {
    const el = document.getElementsByClassName("footer-info");
    if (el) {
       return doSomethingWithElement(el); 
    }
    window.searchID = window.requestAnimationFrame(searchForElement);
}

// Store the request ID so it can be cancelled later
// Otherwise it'll run forever!
window.searchID = window.requestAnimationFrame(searchForElement);
window.addEventListener('load', function() {
    // window.cancelAnimationFrame(window.searchID);
});

forceRedraw();