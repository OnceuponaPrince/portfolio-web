import {Footer, Nav} from "./Home.js";
import React, { Component, useState } from 'react';

import TimeAgo from 'react-timeago';

export default class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            // JSONs containing each entry and their metadata.
            files: [
                "data/autism_adhd_and_other_superpowers.txt",
                "data/terminal_and_git.txt",
                "data/writing_code_comedy.txt",
                "data/i_failed_a_resit.txt"
            ]
        }
    }
    
    render() {
        let fileArray = this.state.files;
        let entries = [];
        /* 
        fileArray.map((value) => {
            entries.push((<Card title=value.title date=value.date id=value.id content=value.content />));
        });
        */
        return (
            <div className="page-container container-margin">
                <Nav />
                <h1 className="page-heading center">Notes</h1>
                <div className="card-column center">{entries}</div>             
                <Footer />
            </div>
        )
    }
}

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            expand: false,
            buttonTitle: "Expand entry",
            buttonLabel: "Expand",
        }
    }


    expandIcon = () => {
        // Returns a caret pointing downwards, to be used as the icon for the button that expands each entry.
        return (<i className="bi bi-caret-down-fill"></i>);
    }

    collapseIcon = () => {
         // Returns a caret pointing right, to be used as the icon for the button that collapse each entry.
        return (<i className="bi bi-caret-right-fill"></i>);
    }
    
    changeStates = (event) => {
        if (!this.state.expand) {
            this.setState({
                expand: true,
                buttonTitle: "Collapse entry",
                buttonLabel: "Collapse"
            })
        } else {
            this.setState({
                expand: false,
                buttonTitle: "Expand entry",
                buttonLabel: "Expand"
            })
        }
    }

    render() {
        let buttonIcon = this.expandIcon();
        this.state.expand ? button = this.collapseIcon() : button = this.expandIcon();
        return (
            <div className="card" aria-role="document">
                        <span class="details" aria-label="Entry information">
                            <h2>{this.props.title}</h2>
                            <h3><TimeAgo date={this.props.date} /></h3>
                            <button className="center" 
                                    onClick={this.changeStates()}
                                    title={this.state.buttonTitle}
                                    aria-label={this.state.buttonLabel}
                                    aria-expanded={this.state.expand}>{buttonIcon}</button>
                        </span>
                        
                        <article id={this.props.id} className={this.state.expand ? "plain-text" : "invisible"}>
                                <p>{this.props.content}</p>
                        </article>
                    </div>
        );
    }
}
