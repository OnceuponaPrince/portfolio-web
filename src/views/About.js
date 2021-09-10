import {Footer, Nav} from "./Home.js";
import React, {Component} from "react";

export default class About extends Component {
    render() {
        return (
            <div className="page-container container-margin">
               <Nav />
                <h1 className="page-heading center">About Me</h1>
                <p className="page-content plain-text center">Something... something... random fact about me. Now we all laugh as we run down to the stream to skip stones. "What a lovely day this is!"</p>
               <Footer />
            </div>
        )
    }
}
