console.log("background running")

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		txt: "hello"
	}

 chrome.tabs.sendMessage(tab.id,msg); //chrome API that  sends message to other files//


}