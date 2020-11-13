import React from "react";
import "./style.css";


function InsideJobCard(props) {
  return (
    <div className="row justify-content-center" id="bioCardId">
      <div className="card mb-3" style={{ width: "500px" }}>
        <div className="row no-gutters">
          <div className="col-md-12">
              <img className="card-img-top" id="proPic" src="./assets/inside-job.jpeg" alt="screen-saying-inside-job"  />
          <div className="card-body"> </div>
          </div>
          <div className="col-md-12">
            <p className="card-text">
              Inside Job is a 3-page web application whose main goal is to serve as a research hub for individuals in the job market. 
              This app allows for invaluable insights into the company culture, the outward facing public outlook and the financial health of a 
              company. Click the button below to check out how Inside Job works.
            </p>
            <div className="row justify-content-center" id="cardBtn">
              <button className="cardBtn">
                <a className="cardBtn" href="https://inside-job.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Live Site</span></a>
              </button>
              <button className="cardBtn" id="gitBtn">
                <a className="cardBtn" href="https://github.com/Ramong06/inside-job" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Github</span></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsideJobCard;