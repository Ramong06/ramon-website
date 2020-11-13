
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import Container from "../components/Container";
import BioCard from "../components/BioCard";


function AboutPage() {

  return (
    <div>
      <Nav />
      <Hero backgroundImage="https://i.pinimg.com/originals/b1/1e/37/b11e3745bca523dd73f7f7d3e0fec53e.jpg"></Hero>
      <Container>
        <Row>
        </Row>
        <Row> 
          <Col size="md-12 sm-6 justify-content-md-center" id="bioCard">
            <BioCard />  
          </Col>
        </Row>
      </Container>
      <Footer />
      </div>
    );
}

export default AboutPage;