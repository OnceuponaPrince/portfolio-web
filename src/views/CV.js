import {Footer, Nav} from "./Home.js";
import React, { Component } from 'react';

export default class CV extends Component {
    render() {
        return (
            <div className="page-container container-margin">
                <Nav />
                <h1 className="page-heading center">CV</h1>
                <Footer />
            </div>
        )
    }
}
