import React from "react";
import "./style.css";


function AskWinstonCard(props) {
  return (
    <div className="row justify-content-center">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-12">
              <img className="card-img-top" id="proPic" src="./assets/ask-winston.jpeg" alt="screen-saying-inside-job" />
          <div className="card-body"> </div>
          </div>
          <div className="col-md-12">
            <p className="card-text">
                Ask Winston is a search engine that searches for music suggestions based on Artists or Songs.  After entering a search item, the user will 
                then be presented with a list of songs or artists that are all similar to the search query.  Along with the list of songs/artists, the user
                is also able to sample a song and see the lyrics to said song. Click on the link below to check out Ask Winston.
            </p>
            <div className="row justify-content-center" id="cardBtn">
              <button className="cardBtn">
                <a className="cardBtn" href="https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Live Site</span></a>
              </button>
              <button className="cardBtn" id="gitBtn">
                <a className="cardBtn" href="https://github.com/On-Your-Marc-GO/Ask-Winston-Music-Rec-Engine" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Github</span></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskWinstonCard;