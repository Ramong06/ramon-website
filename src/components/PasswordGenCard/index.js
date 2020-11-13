import React from "react";
import "./style.css";


function AskWinstonCard(props) {
  return (
    <div className="row justify-content-center">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-12">
              <img className="card-img-top" id="proPic" src="./assets/password-gen.jpeg" alt="screen-saying-inside-job" />
          <div className="card-body"> </div>
          </div>
          <div className="col-md-12">
            <p className="card-text">
                Password Generator prompts the user to choose how many characters, if they would like Capital, Lowercase letters, numbers and special characters.
                The generator will then use that information to generate a strong password using the given criteria for the user to copy.  Click
                the link below to check out Password Generator.
            </p>
            <div className="row justify-content-center" id="cardBtn">
              <button className="cardBtn">
                <a className="cardBtn" href="https://ramong06.github.io/passwordgenerator.github.io/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Live Site</span></a>
              </button>
              <button className="cardBtn" id="gitBtn">
                <a className="cardBtn" href="https://github.com/Ramong06/passwordgenerator.github.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Github</span></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskWinstonCard;