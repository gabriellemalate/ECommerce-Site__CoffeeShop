import "./LandingPage.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LandingPage() {


    return (
        <>
            <main className="hero" id="back-to-top">
                <article className="hero-items">
                    <h2>Nitro Coffee</h2>
                    <p>
                        Coffee is a brewed drink prepared from roasted coffee beans, the seeds
                        of berries from certain Coffee species.
                    </p>

                    <a href="./pages/menu.html" className="a__button">
                        <div id="button-border"></div>
                        <button className="hero-items__shop-button">SHOP NOW</button>
                    </a>
                </article>
                <div className="hero-items__hero-image">
                    <img src="./assets/images/coffeebeans-hero.png" />
                </div>
            </main>
        </>
    );
}

export default LandingPage;