import React from "react";
import "./style.css";


function AskWinstonCard(props) {
  return (
    <div className="row justify-content-center" id="bioCardId">
      <div className="card mb-3" style={{ width: "500px" }}>
        <div className="row no-gutters">
          <div className="col-md-12">
              <img className="card-img-top" id="proPic" src="./assets/employee-directory.jpeg" alt="screen-showing-employee-directory"  />
          <div className="card-body"> </div>
          </div>
          <div className="col-md-12">
            <p className="card-text">
                This is an Employee Directory App.  It's purpose is to pull up a company directory and have the user search for a specific employee by name. 
                Employee Directory is a complete Full-Stack application in which I was the Sole Developer in the projects. Click the button below to check out
                my Employee Directory.           
            </p>
            <div className="row justify-content-center" id="cardBtn">
              <button className="cardBtn">
                <a className="cardBtn" href="https://employee-directory5406.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Live Site</span></a>
              </button>
              <button className="cardBtn" id="gitBtn">
                <a className="cardBtn" href="https://github.com/Ramong06/employee-directory" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="btnName">Github</span></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskWinstonCard;