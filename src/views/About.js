import {Footer, Nav} from "./Home.js";
import React, {Component} from "react";

export default class About extends Component {
    render() {
        return (
            <div className="page-container container-margin">
               <Nav />
                <h1 className="page-heading center">About Me</h1>
                    <p className="page-content plain-text center">
                       I know way too much about philosophy, cinematography, literary devices, 
                       music, games, and academic thinking for someone who has never formally
                       studied any of these things.<br /><br /> My star sign is Scorpio and my political alignment is whatever makes the most sense.
                    </p>
               <Footer />
            </div>
        )
    }
}
