console.log("Background script loaded!");

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("nytimes.com/crosswords")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});
