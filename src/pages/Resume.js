
import React from "react";
import Nav from "../components/Nav";
import "../App.css"
import Container from "../components/Container";
// import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";


function Resume() {

  return (
    <div>
      <Nav />
      <Container>
        <h1 className="resumeTitle">Ramon Garza III</h1>
        <h5 className="resumeInfoHeader">(832) 773-7728 | ramong5406@gmail.com | Katy, TX 77493</h5>
        <Row>
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>Front-End React Developer/Full Stack Developer leveraging nine years in oil and gas. Has a strong passion for innovation and a
          keen eye for aesthetics and presentation as well as knowledge of Continuous integration/deployment. Recently obtained a certificate
          in web development from the University of Texas, gaining experience while also honing my skills in HTML, CSS , Bootstrap, Javascript,
          React and SQL. Excellent communication skills and collaborator who works well on team-based projects as well as independently. Recognized
          for problem-solving and ability to adapt and implement new information as a part of a fast-paced environment.</p>
        </Row>
        <Row>
          <h2>TECHNICAL SKILLS</h2>
          <p>Node.Js., Express, JavaScript, ES 6+, jQuery, React.js, React 16.8+/Redux, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars,
          HTML, CSS, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, React Hooks, JSON, Sequelize, Java, Springboot,
          debugging, Excel, Vue.js, Python.</p>
        </Row>
        <Row>
          <h2>PROFESSIONAL EXPERIENCE</h2>
        </Row>
        <Row>
          <h4>Spatial Consulting</h4>
        </Row>
        <Row>
          <h5>Full Stack Developer - Houston, TX | 04/2018-Present</h5>
          <p>Interfacing and translating client’s business requirements into technical applications and solutions. Tasked to handle end-to-end 
          software development in a timely manner to meet contract deadlines while also assisting more experienced developers re-factor and 
          debug their code.</p>
          <p>- Increased efficiency and collaboration at work-place by assisting senior devs with front-end code.</p>
        </Row>
        <Row>
          <h4>GCT Logistics</h4>
        </Row>
        <Row>
          <h5>Logistics Manager - Houston,TX | 01/2018-04/2020</h5>
          <p>Effectively coordinated oil and gas material to be delivered to location in a timely and safe manner.</p>
          <p>- Decreased company spending and increased revenue by brokering more deliveries to South Texas instead of out of state.</p>
        </Row>
        <Row>
          <h4>Wood</h4>
        </Row>
        <Row>
          <h4>Multi-Skilled Operator (MSO) - South, TX | 10/2011 - 12/2018</h4>
          <p>Keep track of all single-well and multi-well facilities oil and natural gas production. Apply proper maintenance to equipment when
            and if necessary.</p>
          <ul>
            <li>- Promoted after only one year to team Lead</li>
            <li>- Assigned to largest production facilities owned by company</li>
            <li>- Awarded safety leader in 2012</li>
          </ul>
        </Row>
        <Row>
          <h2>Education</h2>
        </Row>
        <Row>
          <h4>Full Stack Web Development Certificate - University of Texas​; Houston, TX | 2020 </h4>
        </Row>
        <Row>
          <p>A 24-week intensive boot camp program focused on gaining technical programming and market-driven skills.</p>
          <Col size="md-12 sm-6 justify-content-md-center">
            <img className="bootcampCert" height="400px" src="./assets/bootcampCert.png" alt={"Error"} />
          </Col>
        </Row>

        
      </Container>
        
      </div>
    );
}

export default Resume;