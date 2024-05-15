import "./ProductCarousel.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductCarousel() {


    return (
        <>
            <section className="our-products">
                <h2>Our Products</h2>
                <div className="product-container">
                    <div className="product-container__product" id="coffee-beans">
                        <img src="./assets/images/coffeebeans.png" />
                        <div className="product-container__product--style">
                            <div className="product-details">
                                <h3>Coffee Beans</h3>
                                <p className="product-details__detail">pack of 3</p>
                            </div>
                            <p className="product__price">$19</p>
                        </div>
                    </div>
                    <div className="product-container__product" id="cold-brew">
                        <img src="./assets/images/coldbrew.png" />
                        <div className="product-container__product--style">
                            <div className="product-details">
                                <h3>Cold Brew</h3>
                                <p className="product-details__detail">1 can</p>
                            </div>
                            <p className="product__price">$5</p>
                        </div>
                    </div>

                    <div className="product-container__product" id="inhouse-brew">
                        <img src="./assets/images/inhousebrew.png" />
                        <div className="product-container__product--style">
                            <div className="product-details">
                                <h3>In-house Brew</h3>
                                <p className="product-details__detail">1 cup</p>
                            </div>
                            <p className="product__price">$3</p>
                        </div>
                    </div>
                </div>

                <a href="./pages/menu.html" className="a__button">
                    <div id="view-button-border"></div>
                    <button className="product-container__view-button">VIEW ALL</button>
                </a>
            </section>
        </>
    );
}

export default ProductCarousel;