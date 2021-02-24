console.log("extension is running1")

// TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.







chrome.runtime.onMessage.addListener(gotMessage); //setup to recieve mnessage from background.js.//

function gotMessage(message, sender, sendResponse) {
console.log(message.txt);

if (message.txt === "hello") {

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs){
elt.style['background-color'] = '#2D99DC';


}


}
}
