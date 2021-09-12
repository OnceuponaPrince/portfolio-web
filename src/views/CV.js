import {Footer, Nav} from "./Home.js";
import React, { Component } from 'react';

export class CV extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <div className="page-container cv container-margin">
                <Nav />
                <h1 className="page-heading center">CV</h1>
                <SectionSelection />
                <Footer />
            </div>
        )
    }
}

class SectionSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName : "Basics"
        }
    }
    switchComponent = (value) => {
        switch(value){
            case "Basics": 
                return <Basics />;
            case "Work":
                return <Work />;
                case "Education":
                    return <Education />;
                    case "Qualifications":
                    return <Qualifications />;
                    case "Skills":
                    return <Skills />;
                    case "Languages":
                    return <Languages />;
            default: return <></>
        }
    }
    selectInlineCSS = () => {
        // External CSS for <select> elements is overridden by browser-level stylesheets. This function returns inline CSS< which will take priority.
        return {border: "1px solid #bfb48f",
            width: "33%",
            padding: "0.5rem 1.5rem",
            paddingRight: "5px",
            display: "block",
            fontFamily: "'Montserrat', sans-serif",
            margin: "2rem auto",
            marginBottom: "0.825rem",
            background: "transparent"};
    }
    render() {
        let inlineStyle = this.selectInlineCSS();
        let switchComponent = this.switchComponent(this.state.componentName);
        return (
            <>
                <div>
                    <label htmlFor="CVSection">Select the portion of my CV that you are most interested in: </label>
                    <select id="CVSection" style={inlineStyle} onChange={(e) => {
                                                                                this.setState({componentName: e.target.value})
                                                                            }}>
                        <option value="Basics">Basics</option>
                        <option value="Work">Work Experience</option>
                        <option value="Education">Education</option>
                        <option value="Qualifications">Qualifications</option>
                        <option value="Skills">Skills</option>
                        <option value="Languages">Languages</option>
                    </select> 
                </div>
                <main>
                    <h1 className="section-name">{this.state.componentName}</h1>
                    <article className="section-content">{switchComponent}</article>
                </main>  
            </>
        )
    }
    
}

const Basics = () => {
    return (
        <>
          <p>Name: Prince John Akpeki</p>
          <p>Skills:<ul>
              <li>Business Development Management</li>
              <li>Game Development</li>
              <li>Web Development</li>
            </ul>
          </p>
          <p>Contact:<ul>
              <li>Email - <i>prince.j.akpeki@gmail.com</i></li>
              <li>Call - <i>+821043541194</i></li>
              <li>Post - <i>Shinchon-ro-1-gil 26 201
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03870
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seoul
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Republic of Korea
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hongdae</i></li>
            </ul>
          </p>
        </>
    );
}

const Work = () => {
    return (
    <>
        <div>
            <div style={{ textAlign: "center" }}>
                <p>Line Games / PiG Corporation</p>
                <p>Business Project Manager</p>
                <p><a href="https://www.line.games/" target="_blank" rel="noreferrer">https://www.line.games/</a></p>
                <p>May 2019 — Present</p>
            </div>
            <p>
                <ul>
                    <li>Research and identify new business opportunities - including new markets, growth areas, trends, customers, partnerships, products and services</li><li>Generate leads and cold call prospective clients for collaboration</li><li>Foster and develop relationships with clients</li><li>Understand the needs of clients and respond effectively with a plan of how to meet these</li><li>Liaise with internal and external teams to facilitate project efficiency</li>
                    <li>Optimising existing business operations</li>
                    <li>Attend seminars, conferences and events to further industry knowledge • Finding, testing, optimising, and publishing potential games</li>
                    <li>Identifying quality games, partnerships and impactful industry trends</li>
                    <li>Management of marketing campaigns and production pipelines</li>
                </ul>
            </p>
        </div>
        <div>
            <div style={{ textAlign: "center" }}>
                <p>Standup Seoul</p>
                <p>Business Development Manager</p>
                <p>December 2019 — July 2020</p>
            </div>
            <p>
                <ul>
                <li>Draw up client contracts with collaborative partners</li>
                <li>Understand the business services and be able to advise and teach others about them</li>
                <li>Ensure staff are on board throughout the organisation, understand the need for change and what is required of them</li>
                <li>Train members of my team, arranging external training where appropriate</li>
                <li>Create promotional strategies and activities for online marketing</li>
                <li>Grow the business from the ground up and build traction with international collaborators</li>
                <li>Seek out financial support and sponsorship partners</li>
                </ul>
            </p>
        </div>
    </>
    );
}

const Education = () => {
    return (
    <>
        <div>
                <p><i>BSc Creative Computing</i>
                <br />University of West London
                <br />Feb 2021 — Present</p>
                <p><i>TQUK Level 5 TEFL/ESL</i>
                <br />London Teacher Training College
                <br />Dec 2017 — Feb 2018</p>
                <p><i>FDeg Computer Science</i>
                <br />University of East London
                <br />Sep 2012 — June 2013</p>
        </div>
    </>
    );
}

const Qualifications = () => {
    return (
    <>
        <div style={{textAlign: "center"}}>
        <p>Facebook Social Media Marketing</p>
        <p>Google IT Support</p> 
        <p>IBM Customer Engagement Specialist </p>
        <p>Responsive Web Design</p>
        <p>Google Digital Garage (Online Marketing)</p>
        </div>
    </>
    );
}

const Skills = () => {
    return (
    <>
        <div style={{textAlign: "center"}}>
            <p>HTML</p>
             <p>CSS</p>
             <p>PHP</p>
             <p>SQL</p>
             <p>Javascript</p>
        </div>
    </>
    );
}

const Languages = () => {
    return (
    <>
        <div style={{textAlign: "center"}}>
            <p>English - Fluent</p>
            <p>Korean - Fluent</p>
            <p>Mandarin - Intermediate</p>
        </div>
    </>
    );
}