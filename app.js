const API_VIDEO_URL = "https://cryptic-plains-36273.herokuapp.com/videos";

fetch(API_VIDEO_URL)
  .then((response) => response.json())
  .then((videos) => {
    let videoData = videos;
    console.log(videos);
    if (videoData.length > 0) {
      var videoArray = "";
    }

    videoData.forEach((video) => {
      console.log(video.snippet);

      videoArray += `
     
      <div class="card mb-3 mt-5" style="max-width: 540px; margin: auto;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${
            video.snippet.thumbnails.high.url
          }" height="224" width="176" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
           <a href="https://www.youtube.com/watch?v=${
             video.snippet.resourceId.videoId
           }" target="_blank"> <h5 class="card-title">${
        video.snippet.title
      }</h5></a>
            <p class="card-text">${video.snippet.description.substr(
              0,
              90
            )}...</p>
            <p class="card-text"><small class="text-muted">Date Published ${
              new Date(video.snippet.publishedAt).toISOString().split("T")[0]
            }</small></p>
          </div>
        </div>
      </div>
    </div>
      `;
    });
    const videosElement = (document.getElementById(
      "vid"
    ).innerHTML = videoArray);
  });
