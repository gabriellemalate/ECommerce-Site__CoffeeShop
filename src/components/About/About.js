import "./About.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function About() {


    return (
        <>
            <section class="about">
                <div class="about-text">
                    <h2>We're Different</h2>
                    <p>
                        We grow and roast our own beans. Every bean, every cup, every step of
                        the way. We strive for excellence.
                    </p>
                    <div class="about-text__image-row">
                        <img src="./assets/images/planting.svg" />
                        <img src="./assets/images/coffee-beans.svg" />
                        <img src="./assets/images/coffee-cup.svg" />
                    </div>
                    <a class="a__button" href="#back-to-top">
                        <div id="button-border"></div>
                        <button class="about__button">LEARN MORE</button>
                    </a>
                </div>

                <article class="right-side">
                    <div class="can-box">
                        <img class="tilted-can" src="./assets/images/tiltedcan.png" />
                    </div>
                    <div class="about-can"></div>
                </article>
            </section>
        </>
    );
}

export default About;