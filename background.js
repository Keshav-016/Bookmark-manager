(() => {
  let youtubeLeftCotrol, youtubePlayer;
  let curretVideo = '';

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { type, videoId } = request;
    if (type === 'NEW') {
      curretVideo = videoId;
      newVideoLoaded();
    }
  });
})();
