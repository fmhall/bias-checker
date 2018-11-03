// listen for any changes to the URL of any tab.
console.log("background");
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    // if (tab.url.toLowerCase().indexOf("https://www.nytimes.com") > -1){
    chrome.pageAction.show(tab.id);
    chrome.tabs.executeScript(null, {"file": "popup.js"});
    // }
});