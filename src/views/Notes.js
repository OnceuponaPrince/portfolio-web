import {Footer, Nav} from "./Home.js";
import React, { Component } from 'react'

export default class Notes extends Component {
    render() {
        return (
            <div className="page-container container-margin">
                <Nav />
                
                <Footer />
            </div>
        )
    }
}
