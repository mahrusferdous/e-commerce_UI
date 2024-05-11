import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import "../App.css";

function Home() {
    return (
        <div>
            <NavBar />
            <Container className="home-page">
                <h1>Welcome to the Home page</h1>
                <p>Here you can find all the products you need</p>
            </Container>
        </div>
    );
}

export default Home;
