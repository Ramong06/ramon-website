
import React from "react";
import Nav from "../components/Nav";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import Container from "../components/Container";
import InsideJobCard from "../components/InsideJobCard";
import AskWinstonCard from "../components/AskWinstonCard";
import EmployeeDirCard from "../components/EmployeeDirCard";
import PasswordGenCard from "../components/PasswordGenCard";


function Portfolio() {

  return (
    <div>
      <Nav />
      <Container>
        <Row>
          <Col size="md-3 sm-6 justify-content-md-center" id="bioCard"> 
          <InsideJobCard />
          </Col>
          <div className="col-md-1 col-md-offset-1"></div>
          <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
          <AskWinstonCard />
          </Col>
          <div className="col-md-1 col-md-offset-1"></div>
          <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
          <EmployeeDirCard />
          </Col>
          <div className="col-md-1 col-md-offset-1"></div>
          <Col size="md-3 sm-6 justify-content-md-right" id="bioCard"> 
          <PasswordGenCard />
          </Col>
        </Row>
      </Container>
      <Footer />
  </div>
    );
}

export default Portfolio;