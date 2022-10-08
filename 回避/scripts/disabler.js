// Forked from https://myohthegod.net/js/exploit.js

// if not URL: chrome.google.com/webstorex
if (!(location.host == "chrome.google.com" && location.pathname.startsWith("/webstorex"))) {
    switch (window.navigator.language) {
        // 日本語
        case "ja":
            alert("https://chrome.google.com/webstorexへ移動し終わった後もう一度、このブックマークレートをクリックしてください。");
			location.href = "https://chrome.google.com/webstorex";
            break;
        // 中国語
        case "zh-CN":
            alert("https://chrome.google.com/webstorex 完成导航后再次单击此书签价格。");
        	location.href = "https://chrome.google.com/webstorex";
            break;
        case "zh-TW":
            alert("https://chrome.google.com/webstorex 完成導航後再次點擊此書籤價格");
            location.href = "https://chrome.google.com/webstorex";
            break;

        // 韓国語
        case "ko":
            alert("https://chrome.google.com/webstorex 로 이동한 후 다시 이 북마크 비율을 클릭합니다.");
            location.href = "https://chrome.google.com/webstorex";
            break;

        // (英語)etc...
        default:
            alert("IMPORTANT PLS READ: After clicking OK, if it takes you to a 404, you are good. Click the bookmarklet once more after doing that.");
			location.href = "https://chrome.google.com/webstorex";
            break;
    };
}

// set Cascading Style Sheets
document.head.innerHTML = `<style>tr:nth-child(even){background-color:#f2f2f2}tr:hover{background-color:#ddd}td,th{border:1px solid #ddd;padding:8px;font-family:Arial,Helvetica,sans-serif;border-collapse:collapse}.switch{position:relative;display:inline-block;width:40px;height:23px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider:before{position:absolute;content:"";height:17px;width:17px;left:3px;bottom:3px;background-color:#fff;-webkit-transition:.4s;transition:.4s}input:checked+.slider{background-color:#2196F3}input:focus+.slider{box-shadow:0 0 1px #2196F3}input:checked+.slider:before{-webkit-transform:translateX(17px);-ms-transform:translateX(17px);transform:translateX(17px)}.slider.round{border-radius:23px}.slider.round:before{border-radius:50%}</style>`;
// createElement("body")
document.body = document.createElement("body");

// set document.toggleFunction() => use chrome.management API
document.toggleFunction = function(id) {
    var clickedRow = document.getElementById(id);
    chrome.management.setEnabled(id, clickedRow.children[0].children[0].children[0].checked);
};

// set table
document.newBodyData = "<table>";
document.newBodyData += "";

chrome.management.getAll(function() {
    arguments[0].forEach(function(extension) {
        document.newBodyData += "<tr id=" + extension.id + ">";
        document.newBodyData += "<td><label class='switch'><input type='checkbox' " + (extension.enabled ? "checked" : "") + " onclick=\"toggleFunction('" + extension.id + "')\"><span class='slider round'></span></label></td>";
        document.newBodyData += "<td>" + extension.name + "</td>";
        document.newBodyData += "<td>" + extension.id + "</td>";
        document.newBodyData += "<td>" + extension.installType + "</td>";
        document.newBodyData += "</tr>";
    });
    document.newBodyData += "</table>";
    document.body.innerHTML = document.newBodyData;
});
