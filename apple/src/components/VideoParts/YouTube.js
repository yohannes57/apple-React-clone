import React, { useEffect, useState } from "react";
// import "../VideoParts/YouTube.css";
function YouTube() {
  const [youTubeVideos, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBz4uki8PIHsxyJuVdPZLlrHggCwMd3p6U&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideosData = data.items;
        setVideo(youTubeVideosData);
      });
  }, []);

  console.log(youTubeVideos);

  return (
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
                <br></br>
              </div>
            </div>
            {youTubeVideos.map((singleVideo) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTube;

// import React, { useState, useEffect } from "react";
// // import "./bootstrap.css";
// // import "./bootstrap.css";
// import "../VideoParts/YouTube.css";

// function YouTube() {
//   const [youtubevideos, setVideos] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBz4uki8PIHsxyJuVdPZLlrHggCwMd3p6U&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         let videodata = data.items;
//         setVideos(videodata);
//       });
//   }, []);

//   return (
//     <div className="allVideosWrapper">
//       <div className="container">
//         <div className="row h-100 align-items-center justify-content-center text-center">
//           <div className="col-12">
//             <div className="title-wraper bold video-title-wrapper">
//               Latest Videos
//             </div>
//           </div>
//           {youtubevideos?.map((singleVideo) => {
//             let vidId = singleVideo.id.videoId;
//             let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//             let videoWrapper = (
//               <div key={vidId} className="col-sm-12 col-md-4">
//                 <div className="singleVideoWrapper">
//                   <div className="videoThumbnail">
//                     <a href={vidLink} target="_blank">
//                       <img
//                         src={singleVideo.snippet.thumbnails.high.url}
//                         alt="imag"
//                       />
//                     </a>
//                   </div>
//                   <div className="videoInfoWrapper">
//                     <div className="videoTitle">
//                       <a href={vidLink} target="_blank">
//                         {singleVideo.snippet.title}
//                       </a>
//                     </div>
//                     <div className="videoDesc">
//                       {singleVideo.snippet.description}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//             return videoWrapper;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YouTube;

// import React, { Component } from "react";
// // import "./bootstrap.css";
// import "./YouTube.css";
// // https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

// class Youtube extends Component {
//   constructor() {
//     super();
//     this.state = {
//       youTubeVideos: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBnOXtQEfn2xzqLcSh4Qttr9d4csK47y6o&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const youTubeVideos = data.items;
//         this.setState({ youTubeVideos });
//       });
//   }

//   render() {
//     return (
//       <div className="allVideosWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 Latest Videos
//               </div>
//             </div>
//             {this.state.youTubeVideos.map((singleVideo, i) => {
//               let vidId = singleVideo.id.videoId;
//               let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//               let videoWrapper = (
//                 <div key={i} className="col-sm-12 col-md-4">
//                   <div className="singleVideoWrapper">
//                     <div className="videoThumbnail">
//                       <a href={vidLink} target="_blank">
//                         <img src={singleVideo.snippet.thumbnails.high.url} />
//                       </a>
//                     </div>
//                     <div className="videoInfoWrapper">
//                       <div className="videoTitle">
//                         <a href={vidLink} target="_blank">
//                           {singleVideo.snippet.title}
//                         </a>
//                       </div>
//                       <div className="videoDesc">
//                         {singleVideo.snippet.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return videoWrapper;
//             })}

//             {this.videoWrapper}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Youtube;
