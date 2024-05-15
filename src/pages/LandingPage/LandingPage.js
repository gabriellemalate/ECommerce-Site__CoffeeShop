import "./LandingPage.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Hero from "../../assets/images/coffeebeans-hero.png";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

function LandingPage() {


    return (
        <>
            <main className="hero" id="back-to-top">
                <article className="hero-items">
                    <h2 className="hero-items__head">Nitro Coffee</h2>
                    <p className="hero-items__detail">
                        Coffee is a brewed drink prepared from roasted coffee beans, the seeds
                        of berries from certain Coffee species.
                    </p>

                    <Link to="/shop" className="hero-items__link">
                        <div id="button-border"></div>
                        <button className="hero-items__shop-button">SHOP NOW</button>
                    </Link>
                </article>
                <div className="hero-items__hero-image">
                    <img src={Hero} alt ="bag of coffeebeans" className="hero-items__hero-image-img"/>
                </div>
            </main>
            <ProductCarousel />
        </>
    );
}

export default LandingPage;