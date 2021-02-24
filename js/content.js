// console.log("They do not exist... creepyy?");

// TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.



// chrome.runtime.onMessage.addListener(gotMessage); //setup to recieve mnessage from background.js.//

// function gotMessage(message, sender, sendResponse) {
// console.log(message.txt);

// if (message.txt === "hello") {

// let paragraphs = document.getElementsByTagName('p');
// for (elt of paragraphs){ ///Es6 loop 
// elt.style['background-color'] = '#2D99DC';


// }


// }
// }


let filenames = [
        "one.jpg",
        "two.jpg",
        "three.jpg",
        "four.jpg",
        "five.jpg",
        "six.jpg",
        "7even.jpg",
        "ate.jpg",
        "9ine.jpg",
        "t3n.jpg",
        "eleben.jpg",
        "twelve.jpg",
        "13teen.jpg"

        ];

        let imgs = document.getElementsByTagName("img");


        for (imgElt of imgs) {
        	console.log(imgElt.src);
        	let r = Math.floor(Math.random() * filenames.length);
        	let file = "images/People/" + filenames[r];
        	let url = chrome.extension.getURL(file);
        	imgElt.src = url;
        	console.log(url);
}






console. log("p5here");

function setup() {
console. log("sketch started!")

let c = createCanvas(1920, 1080)
c.position(0, 0);

}

function draw() {
 background('rgba(244, 248, 252,0)');

  stroke(255,122,45);
  line(mouseX, 0, mouseX, 1920);
console. log(mouseX)
  // stroke(135,122,45);
  // line(mouseY,100, mouseY, 1080);



console. log("sketch looping!")





}
