import "./styles.css";
import React, { Component } from "react";
import logo from "/img/image.png";

class Header extends Component {
  change(option) {
    localStorage.setItem("lang", option.target.value);
    window.location.reload();
  }

  render() {
    const lang = localStorage.getItem("lang") || "nl";
    return (
      <nav className="container mb-4 mt-4">
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <select
              className="custom-select pull-right"
              onChange={this.change}
              value={lang}
            >
              <option value="nl">Dutch</option>
              <option value="en">English</option>
              <option value="pl">Polish</option>
            </select>
          </div>
        </div>

        <div className="whiteBox">
          <p className="whiteBoxTitle">Wat je vooraf moet weten</p>
          <p className="whiteBoxText">
            De volgende punten zijn belangrijk om te weten voor je aan de slag
            gaat als vrije werker:
          </p>
          <p className="whiteBoxCyanText">
            Klik op de groene 'verder' knop als je de tekst gelezen hebt.
          </p>
          <img class="image-css" src={logo}></img>
          <p className="whiteBoxSubtitle">1. Eigen baas</p>
          <p className="whiteBoxText2">
            Als vrije werker ben je een freelancer (zonder inschrijving bij de
            KvK).
          </p>
          <p className="whiteBoxText2">
            Je bepaalt dus zelf welke klussen je aanneemt!
          </p>
          <button className="whiteBoxButton">Verder</button>
        </div>
      </nav>
    );
  }
}

export default Header;
