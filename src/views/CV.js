import { Footer, Nav } from "./Home.js";
import React, { Component } from "react";

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
    );
  }
}

class SectionSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "Basics",
    };
  }
  switchComponent = (value) => {
    switch (value) {
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
      default:
        return <></>;
    }
  };
  selectInlineCSS = () => {
    // External CSS for <select> elements is overridden by browser-level stylesheets. This function returns inline CSS< which will take priority.
    return {
      border: "1px solid #bfb48f",
      width: "33%",
      padding: "0.5rem 1.5rem",
      paddingRight: "5px",
      display: "block",
      fontFamily: "'Montserrat', sans-serif",
      margin: "2rem auto",
      marginBottom: "0.825rem",
      background: "transparent",
    };
  };
  render() {
    let inlineStyle = this.selectInlineCSS();
    let switchComponent = this.switchComponent(this.state.componentName);
    return (
      <>
        <div>
          <label htmlFor="CVSection">
            Select the portion of my CV that you are most interested in:{" "}
          </label>
          <select
            id="CVSection"
            style={inlineStyle}
            onChange={(e) => {
              this.setState({ componentName: e.target.value });
            }}
          >
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
    );
  }
}

const Basics = () => {
  return (
    <>
      <p>Name: Prince John Akpeki</p>
      <p>
        Skills:
        <ul>
          <li>Business Development Management</li>
          <li>Game Development</li>
          <li>Web Development</li>
        </ul>
      </p>
      <p>
        Contact:
        <ul>
          <li>
            Email - <i>prince.j.akpeki@gmail.com</i>
          </li>
          <li>
            Call - <i>+821043541194</i>
          </li>
          <li>
            Post -{" "}
            <i>
              Shinchon-ro-1-gil 26 201
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03875
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seoul
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Republic of Korea
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hongdae
            </i>
          </li>
        </ul>
      </p>
      <p>Possessing a background in Computer Science and extensive experiences ranging from Sales and Account Management to Data Analysis and Software Engineering, hiis services extend to a diverse audience while tackling projects leveraging logical and pragmatic techniques. Since arriving in Korea he has embraced Korean culture and developed a truly unique business personality.</p>
    </>
  );
};

const Work = () => {
  return (
    <>
    <div>
        <div style={{ textAlign: "center" }}>
          <p>Gambae</p>
          <p>Co-Founder & Creative Technologies</p>
          <p>July 2021—Present</p>
        </div>
          <ul>
            <li>Provide analysis and conduct market research on Korean sectors</li>
            <li>
            Harness latest technological stacks to create digital experiences
            </li>
            <li>
            Identify potential partnerships and seek out a potential client base
            </li>
            <li>
            Advise clients on services that satisfy their needs
            </li>
            <li>
            Follow best practices to ensure client satisfaction
            </li>
            <li>
            Capitalise on market gap for establishing business operations
            </li>
            <li>Pivot and stay ahead of market trends</li>
          </ul>
      </div>
      <hr />
      <div>
        <div style={{ textAlign: "center" }}>
          <p>Line Games / PiG Corporation</p>
          <p>Business Project Manager</p>
          <p>
            <a href="https://www.line.games/" target="_blank" rel="noreferrer">
              https://www.line.games/
            </a>
          </p>
          <p>May 2019 — Sept 2021</p>
        </div>
          <ul>
            <li>
            Research and identify new business opportunities
            </li>
            <li>
            Generate leads and cold call prospective clients
            </li>
            <li>Foster and develop relationships with clients</li>
            <li>
            Understand the needs of clients and respond effectively an appropriate plan of action
            </li>
            <li>
            Liaise with internal and external teams to facilitate project efficiency
            </li>
            <li>Optimising existing business operations</li>
            <li>
            Attend seminars, conferences and events to further industry knowledge -
including identifying market trends
            </li>
            <li>
            Identify, test, and publish games from indie development partnerships
            </li>
            <li>Manage marketing campaigns and production pipelines</li>
          </ul>
      </div>
      <hr />
      <div>
        <div style={{ textAlign: "center" }}>
          <p>Standup Seoul</p>
          <p>Business Development Manager</p>
          <p>December 2019 — June 2021</p>
        </div>
        <p>
          <ul>
            <li>Draw up client contracts with collaborative partners</li>
            <li>
            Manage staff ensuring they understand the need for change and the
needs of the organisation
            </li>
            <li>
            Train members of my team and arranging external training
            </li>
            <li>
            Create promotional strategies and activities for online marketing
            </li>
            <li>
            Grow the business and build traction with international collaborators
            </li>
            <li>
            Seek out financial support and sponsorship partners
            </li>
            <li>Identify potential performance venues
</li>
          </ul>
        </p>
      </div>
    </>
  );
};

const Education = () => {
  return (
    <>
      <div>
      <p>
          <i>Self-taught Programmer</i>
          <br />
          Virtual Learning Sources
          <br />
          April 2021 — Present
        </p>
        <p>
          <i>BSc Creative Computing</i>
          <br />
          University of West London
          <br />
          Feb 2021 — Present
        </p>
        <p>
          <i>TQUK Level 5 TEFL/ESL</i>
          <br />
          London Teacher Training College
          <br />
          Dec 2017 — Feb 2018
        </p>
        <p>
          <i>FDeg Computer Science</i>
          <br />
          University of East London
          <br />
          Sep 2012 — June 2013
        </p>
      </div>
    </>
  );
};

const Qualifications = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>Facebook Social Media Marketing</p>
        <p>IBM Customer Engagement Specialist </p>
        <p>Responsive Web Design</p>
        <p>Javascript Fundamentals</p>
        <p>Google Digital Garage - Online Marketing</p>
        <p>Business English Teacher’s License</p>
        <p>TESOL</p>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Sass</p>
        <p>React</p>
        <p>Javascript</p>
        <p>Angular</p>
        <p>Unity</p>
      </div>
    </>
  );
};

const Languages = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>English - Fluent</p>
        <p>Korean - Fluent</p>
        <p>Mandarin - Intermediate</p>
      </div>
    </>
  );
};
