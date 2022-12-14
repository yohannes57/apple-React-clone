import React, { useState, useEffect } from "react";

function NewsFeed() {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2022-12-08&sortBy=popularity&apiKey=5485c8317a02445da2f3e6a1da668e77&pageSize=5"
    )
      .then((res) => res.json())
      .then((data) => {
        let nws = data.articles;
        setNewsFeed(nws);
      });
  }, []);
  console.log(newsFeed);
  return (
    <div className="page">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                <h3>Top five today Headlines:</h3>
                <br></br>
                <br />
              </div>
            </div>
            {newsFeed?.map((news, i) => {
              let idd = news.source.id;
              let newswrapper = (
                <div key={idd} className="row text-center">
                  <div className="col-6 ">
                    <h2>{news.author}</h2>
                    <p>
                      {news.title}
                      {news.description}
                      {news.publishedAt}
                      {news.content}
                    </p>
                  </div>
                  <div className="col-6 ">
                    <img src={news.urlToImage} alt="imgg" />
                  </div>
                  <br /> <br /> <br />
                </div>
              );
              return newswrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
// https://newsapi.org/v2/everything?q=Apple&from=2022-12-08&sortBy=popularity&apiKey=5485c8317a02445da2f3e6a1da668e77pageSize=5
