import 'react-dom/server';

import {Footer, Nav} from "./Home.js";
import React, { Component, useEffect, useState } from 'react';

import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

export class Notes extends Component {
    constructor(props){
        super(props);
    }
    promiseCreator = (value) => {
        let promise = new Promise((resolve, reject) => {
            value ? resolve(value) : reject(value);
        });
        return promise;
    }

    errorString = () => {
        return (<p className="plain-text">An error occurred! Refresh the page or try again later.</p>);
    }
    render() {
        return (
            <div className="page-container notes container-margin">
                <Nav />
                <h1 className="page-heading center">Notes</h1>
                <CardColumn promiseCreator={this.promiseCreator}
                            errorString={this.errorString} />
                <Footer />
            </div>
        )
    }
}

const CardColumn = (props) => {
    const [ready, setReady] = useState(false);
    const [status, setStatus] = useState("Loading entries...");
    const [cardColumn, setCardColumn] = useState("");
    useEffect(() => {
        // Array of files containing each entry and their metadata.
        let noteEntries = require("../data/noteEntries.json");
        let cardArray = [];
        console.log(noteEntries);
        noteEntries.map((value, index) => {
            //Create Card component for each entry.
            cardArray.push(<Card key={index} id={"entry#" + {index}} title={value.title} date={value.date} content={value.content} />);
        });
        if (cardArray.length === noteEntries.length) {
            //Only show all cards when fully loaded
            setCardColumn(cardArray);
            setReady(true);
        } else {
            //
            console.log(cardArray.length);
            let x = cardArray.length;
            let y = noteEntries.length;
            setStatus("Loaded " + x + " out of " + y + " entries...");
        }
    }, [status]);
    return (

        <div className="cards-column center">
           {ready ? cardColumn : status}
        </div>
    );
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

    contentHandler = (text) => {
        text = "<p>" + text.replace(/\n/g, "<br />") + "</p>";
        let HTMLDoc = new DOMParser().parseFromString(text.replace(/\\\"/g,'"'), "text/html");
        text = HTMLDoc.body.innerHTML;
        console.log(text);
        return (text);
    }

    expandIcon = () => {
        // Returns a caret pointing downwards, to be used as the icon for the button that expands each entry.
        return (<i className="bi bi-caret-down-fill"></i>);
    }

    collapseIcon = () => {
         // Returns a caret pointing right, to be used as the icon for the button that collapse each entry.
        return (<i className="bi bi-caret-right-fill"></i>);
    }
    render() {
        let content = this.contentHandler(this.props.content);
        let object = [content];
        let buttonIcon = this.expandIcon();
        this.state.expand ? buttonIcon = this.collapseIcon() : buttonIcon = this.expandIcon();
        return (
            <div key={this.props.id} className="card" role="document">
                        <span className="details" aria-label="Entry information">
                            <h2>{this.props.title}</h2>
                            <h3><TimeAgo date={this.props.date} /></h3>
                            <button className="center" 
                                    onClick={(event) => {
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
                                    }}
                                    title={this.state.buttonTitle}
                                    aria-label={this.state.buttonLabel}
                                    aria-expanded={this.state.expand}>{buttonIcon}</button>
                        </span>
                        
                        <article className={this.state.expand ? "plain-text" : "invisible"}>
                            <div dangerouslySetInnerHTML={{__html: content }}></div>
                        </article>
                    </div>
        );
    }
}