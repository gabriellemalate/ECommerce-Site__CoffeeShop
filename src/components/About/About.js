import "./About.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import plant from "../../assets/images/planting.svg";
import bean from "../../assets/images/coffee-beans.svg";
import cup from "../../assets/images/coffee-cup.svg";


function About() {


    return (
        <>
            <section className="about">
                <div className="about-text">
                    <h2>We're Different</h2>
                    <p>
                        We grow and roast our own beans. Every bean, every cup, every step of
                        the way. We strive for excellence.
                    </p>
                    <div className="about-text__image-row">
                        <img src={plant} />
                        <img src={bean} />
                        <img src={cup} />
                    </div>
                    <a className="a__button" href="#back-to-top">
                        <div id="button-border"></div>
                        <button className="about__button">LEARN MORE</button>
                    </a>
                </div>

                <article className="right-side">
                    <div className="can-box">
                        <img className="tilted-can" src="./assets/images/tiltedcan.png" />
                    </div>
                    <div className="about-can"></div>
                </article>
            </section>
        </>
    );
}

export default About;