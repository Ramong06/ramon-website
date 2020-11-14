import React from "react";
import "../App.css"
import HomeNavbar from "../components/HomeNavbar";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Container from "../components/Container"
import Background from "../components/Background";

function HomePage() {

    return (
        <div>
            <HomeNavbar />
            <Background></Background>
        </div>
    );
}

export default HomePage;