
import React from "react";
import Nav from "../components/Nav";
import "../App.css"
import resumepdf from '../assets/ramon-resume.pdf';
import Container from "../components/Container";
import SkillsBar from '../components/SkillsBar';
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'


function Resume() {

  return (
    <div>
      <Nav />
      <Container>
        <h1 className="resumeTitle">Ramon Garza III</h1>
        <h5 className="resumeInfoHeader">(832) 773-7728 | ramong5406@gmail.com | Katy, TX 77493</h5>
        <Row>
          <Col size="md-4 sm-6 justify-content-md-center">
        <div>
          <h2>TECHNICAL SKILLS</h2>
          <p>Node.Js., Express, JavaScript, ES 6+, jQuery, React.js, React 16.8+/Redux, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars,
          HTML, CSS, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Rest API, GraphQL, React Hooks, JSON, Sequelize, Java, Springboot,
          debugging, Excel, Vue.js, Python.</p>
        </div>
        <div className='skillsBar'>
            <h6>Skill Level</h6>
            <SkillsBar name="HTML5" value={90} />
            <SkillsBar name="CSS3" value={90} />
            <SkillsBar name="JavaScript" value={90} />
            <SkillsBar name="React.js" value={90} />
            <SkillsBar name="Bootstrap" value={95} />
            <SkillsBar name="Rest API" value={80} />
            <SkillsBar name="GraphQL" value={80} />
            <SkillsBar name="JQuery" value={80} />
            <SkillsBar name="MongoDB" value={80} />
            <SkillsBar name="MySQL" value={75} />
            <SkillsBar name="GIT" value={90} />
            <SkillsBar name="Mongoose" value={85} />
            <SkillsBar name="Java" value={85} />
            <SkillsBar name="Node.js" value={85} />
            <SkillsBar name="Python" value={70} />
            </div>
              <a href={resumepdf} download="ramon-resume">
                <button className="resume-btn" type="button">
                  <FontAwesomeIcon icon={faDownload} />
                  &nbsp; DOWNLOAD RESUME
                </button>
              </a>
          </Col>
          <Col size="md-8 sm-6 justify-content-md-center">
          <div>
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>Front-End React Developer/Full Stack Developer/Back-End Programmer leveraging nine years in oil and gas. Has a strong passion for innovation and a
          keen eye for aesthetics and presentation as well as knowledge of Continuous integration/deployment. Recently obtained a certificate
          in web development from the University of Texas, gaining experience while also honing my skills in HTML, CSS , Bootstrap, Javascript,
          React and SQL. Excellent communication skills and collaborator who works well on team-based projects as well as independently. Recognized
          for problem-solving and ability to adapt and implement new information as a part of a fast-paced environment.</p>
        </div>
        <div>
          <h2>PROFESSIONAL EXPERIENCE</h2>
        </div>
        <div>
          <h4>Spatial Consulting</h4>
        </div>
        <div>
          <h5>Full Stack Developer - Houston, TX | 02/2017-Present</h5>
          <p>Interfacing and translating client’s business requirements into technical applications and solutions. Tasked to handle end-to-end 
          software development in a timely manner to meet contract deadlines while also assisting more experienced developers re-factor and 
          debug their code.</p>
          <ul>
            <li>Increased efficiency and collaboration at work-place by assisting senior devs with front-end code.</li>
            <li>Debug and re-factor Java code using Eclipse IDE.</li>
            <li>Add property management and inventory information (photos, prices, descriptions etc.) into MySQL databases</li>
            <li>Use MongoDB and Studio3T to add construction company photos and projects.</li>
            <li>Utilize Chart.js to provide yearly and quarterly revenue information.</li>
            <li>Use Google Firebase to create User Authentication forms for private construction company. </li>
            <li>Utilize Visual Studio, Bootstrap 4, HTML, CSS, Jquery, Reactjs, Node.js to create dynamic and easy to navigate User Interfaces for private consulting companies. (All front-end applications were created in Visual Studio)</li>
            <li>Collaborate with team members to create mobile friendly UI.</li>
            <li>Constant learning through online resources to implement the latest software trends and libraries (i.e React.js, Angular.js, Vue.js</li>
          </ul>
        </div>
        <div>
          <h4>Wood</h4>
        </div>
        <div>
          <h4>Multi-Skilled Operator (MSO) - South, TX | 10/2011 - 01/2017</h4>
          <p>Keep track of all single-well and multi-well facilities oil and natural gas production. Apply proper maintenance to equipment when
            and if necessary.</p>
          <ul>
            <li>- Promoted after only one year to team Lead</li>
            <li>- Assigned to largest production facilities owned by company</li>
            <li>- Awarded safety leader in 2012</li>
          </ul>
        </div>
        <div>
          <h2>Education</h2>
        </div>
        <div>
          <h4>Full Stack Web Development Certificate - University of Texas​; Houston, TX | 2020 </h4>
        </div>
        <div>
          <p>A 24-week intensive boot camp program focused on gaining technical programming and market-driven skills.</p>
          <div size="md-12 sm-6 justify-content-md-center">
            <img className="bootcampCert" height="400px" src="./assets/bootcampCert.png" alt={"Error"} />
          </div>
        </div>
          </Col>
          </Row>
      </Container>
        <Footer />
      </div>
    );
}

export default Resume;