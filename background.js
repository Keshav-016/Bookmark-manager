chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('youtube.com/watch')) {
    const params = new URLSearchParams(tab.url.split('?')[1] || '');
    chrome.tabs.sendMessage(tabId, { type: 'NEW', videoId: params.get('v') });
  }
});