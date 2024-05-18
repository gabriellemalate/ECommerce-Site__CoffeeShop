import "./ShopPage.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ShopPage() {


    return (
        <>
            <nav className="shop-nav" id="shop-nav">
                <ul className="shop-nav__list">
                    <div className="shop-line"></div>
                    <li className="shop-nav__list-item">
                        <a href="#shop-nav"> BEANS </a>
                    </li>
                    <div className="shop-line"></div>
                    <li className="shop-nav__list-item">
                        <a href="#brews"> BREWS </a>
                    </li>
                    <div className="shop-line"></div>
                    <li className="shop-nav__list-item">
                        <a href="#misc"> MISC </a>
                    </li>
                </ul>
            </nav>

            <section className="shop">
                <article className="shop__category">
                    <h2 className="shop-title">Beans</h2>
                    <article className="shop__beans">
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Beans 1</h3>
                            <img />
                            <p className="shop-item__par">

                            </p>
                            <p className="shop-item__price">

                            </p>
                        </article>
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Beans 2</h3>
                            <img />
                            <p className="shop-item__par">

                            </p>
                            <p className="shop-item__price">

                            </p>
                        </article>
                    </article>
                </article>

                <article className="shop__category" id="brews">
                    <h2>Brews</h2>
                    <article className="shop__brews">
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Cold Brew</h3>
                                <img/>
                            <p className="shop-item__par">
                                Bright and delicious coffee blend, brewed over ice.
                            </p>
                            <p className="shop-item__price">

                            </p>
                        </article>
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Iced Chai Latte</h3>
                            <p className="shop-item__par">
                                A creamy drink with a kick, this drink features spicy chai tea
                                blended with your choice of milk and poured over ice.
                            </p>
                            <p className="shop-item__price">$6.99</p>
                        </article>
                    </article>
                </article>

                <article className="shop__category shop__category--food" id="misc">
                    <h2>Misc</h2>
                    <article className="food__foodItems">
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                            
                            </h3>
                            <p className="shop-item__par">

                            </p>
                            <p className="shop-item__price">

                            </p>
                        </article>
                        <article className="shop-item">
                            <h3 className="shop-item__name">

                            </h3>
                            <p className="shop-item__par">

                            </p>
                            <p className="shop-item__price">

                            </p>
                        </article>
                    </article>
                </article>
            </section>
        </>
    );
}

export default ShopPage;