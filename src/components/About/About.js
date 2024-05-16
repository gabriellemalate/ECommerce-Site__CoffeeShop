import "./About.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import plant from "../../assets/images/planting.svg";
import bean from "../../assets/images/coffee-beans.svg";
import cup from "../../assets/images/coffee-cup.svg";
import can from "../../assets/images/tiltedcan.png";


function About() {


    return (
        <>
            <section className="about">
                <div className="about-text">
                    <h2 className="about-text__head">We're Different</h2>
                    <p>
                        We grow and roast our own beans. Every bean, every cup, every step of
                        the way. We strive for excellence.
                    </p>
                    <div className="about-text__images">
                        <img src={plant} alt="seedling plants" className="about-text__images-img"/>
                        <img src={bean} alt="coffeebeans icons" className="about-text__images-img"/>
                        <img src={cup} alt="cup of hot drink icon" className="about-text__images-img"/>
                    </div>
                    <a className="a__button" href="#back-to-top">
                        <div id="button-border"></div>
                        <button className="about__button">LEARN MORE</button>
                    </a>
                </div>

                <article className="right-side">
                    <div className="can-box">
                        <img className="tilted-can" src={can} alt="can of brew"/>
                    </div>
                    <div className="about-can"></div>
                </article>
            </section>
        </>
    );
}

export default About;