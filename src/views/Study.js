import {Footer, Nav} from "./Home.js";
import React, { Component } from 'react';

export default class Study extends Component {
    render() {
        return (
            <div className="page-container container-margin">
                <Nav />
                <h1 className="page-headings center">Study</h1>
                <Footer />
            </div>
        )
    }
}
