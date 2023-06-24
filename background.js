chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith("https://www.nytimes.com/crosswords/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});
