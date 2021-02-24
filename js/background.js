console.log("They do not exist... creepyx2");


// let filenames =


chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		txt: "hello"
	}

 chrome.tabs.sendMessage(tab.id,msg); //chrome API that  sends message to other files//


}