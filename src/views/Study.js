import { Footer, Nav } from "./Home.js";
import React, { Component } from "react";

export default class Study extends Component {
  render() {
    return (
      <div className="page-container container-margin">
        <Nav />
        <h1 className="page-heading center">Study</h1>
        <img
          src="https://alumni.uwl.ac.uk/image/main-site-images/UWL-logo.png"
          width="300px"
          height="66.5px"
        />
        <p className="page-content plain-text center">
          At the time of writing, I'm a first year student on a Creative
          Computing course a University of West London. It's one of the few
          British universities that rank high enough on the league table to be
          considered of value by any hiring manager, while also caring for its
          students in more than just a monetary way.
          <br />
          <br /> It's been a while since I've had to sit down and look at huge
          paragraphs of compact text for hours on end just to get a grad and
          aving learning difficulties doesn't help. However, UWL does what it
          can to provide more interactive modules, so I'm lucky to get to build
          things and challenge my skills instead of just memorising what some
          old professor said a decade ago.
        </p>
        <Footer />
      </div>
    );
  }
}
