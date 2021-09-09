import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="page-container">
        <header className="center">
          <img
            className="profile-photo"
            width="50%"
            height="auto"
            style={{ maxHeight: "344px", maxWidth: "344px" }}
            src="images/profile_pic.jpg"
            alt="Prince's Photo"
          />
          <h1 className="welcome-title">
            <span className="welcome">Welcome</span> <br /> to the portfolio of
            the world's most <s>resilient</s> rebellious beginner coder
            <span class="cursor">_</span>
          </h1>
        </header>
      </div>
    );
  }
}
