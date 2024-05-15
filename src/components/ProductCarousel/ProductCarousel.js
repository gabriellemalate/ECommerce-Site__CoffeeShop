import "./ProductCarousel.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import coffeebeans from "../../assets/images/coffeebeans.png"
import brew from "../../assets/images/inhousebrew.png"
import coldbrew from "../../assets/images/coldbrew.png"

function ProductCarousel() {


    return (
        <>
            <section className="product">
                <h2 className="product-head">Our Products</h2>
                <div className="product-container">
                    <div className="product-container__product" id="coffee-beans">
                        <img src={coffeebeans} alt="bag of coffeebeans product" className="product-container__product-img"/>
                        <div className="product-container__product--style">
                            <div className="product-details">
                                <h3 className="product-details__title"
                                >Coffee Beans</h3>
                                <p className="product-details__detail">pack of 3</p>
                            </div>
                            <p className="product__price">$19</p>
                        </div>
                    </div>
                    <div className="product-container__product" id="cold-brew">
                        <img src={coldbrew} alt="cup of cold brew" className="product-container__product-img"/>
                        <div className="product-container__product--style">
                            <div className="product-details">
                                <h3 className="product-details__title"
                                >Cold Brew</h3>
                                <p className="product-details__detail">1 can</p>
                            </div>
                            <p className="product__price">$5</p>
                        </div>
                    </div>

                    <div className="product-container__product" id="inhouse-brew">
                        <img src={brew} alt="cup of in-house brew" className="product-container__product-img"/>
                        <div className="product-container__product--style">
                            <div className="product-details">
                                <h3 className="product-details__title"
                                >In-house Brew</h3>
                                <p className="product-details__detail">1 cup</p>
                            </div>
                            <p className="product__price">$3</p>
                        </div>
                    </div>
                </div>

                <Link to="/menu" className="product-link">
                    <div id="view-button-border"></div>
                    <button className="product-container__view-button">VIEW ALL</button>
                </Link>
            </section>
        </>
    );
}

export default ProductCarousel;