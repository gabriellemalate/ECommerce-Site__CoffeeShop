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
                <article className="shop__category shop__category--hot">
                    <h2 className="shop-title">Hot Drinks</h2>
                    <article className="hot__hot-items">
                        <article className="shop-item">
                            <h3 className="shop-item__name"> In-House Brew</h3>
                            <p className="shop-item__par">
                                Our in-house medium roast is a classNameic balance between sweet
                                vanilla, nutty hazelnut, and a smooth low acidity to bring
                                everything together.
                            </p>
                            <p className="shop-item__price">$2.99</p>
                        </article>
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Espresso</h3>
                            <p className="shop-item__par">
                                A balance between bold and smooth, powerful and sweet, our
                                signature espresso blend is a complex flavor profile. It features
                                strong notes of semi-sweet chocolate and caramel, with mild
                                acidity and a bright floral finish.
                            </p>
                            <p className="shop-item__price">$4.99</p>
                        </article>
                    </article>
                </article>

                <article className="shop__category shop__category--cold" id="coldDrinks">
                    <h2>Cold Drinks</h2>
                    <article className="cold__coldItems">
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Cold Brew</h3>
                            <p className="shop-item__par">
                                Our bright and delicious coffee blend, brewed over ice to give you
                                a cold coffee freshness with all the flavor of our amazing
                                in-house coffee.
                            </p>
                            <p className="shop-item__price">$3.99</p>
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

                <article className="shop__category shop__category--food" id="pastries">
                    <h2>Pastries</h2>
                    <article className="food__foodItems">
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Bacon Oatmeal Raisin Cookie</h3>
                            <p className="shop-item__par">
                                An infused bacon, sugar and egg mixture is folded into a perfect
                                blend of oats, flour, raisins and cinnamon to create a soft and
                                chewy textured cookie.
                            </p>
                            <p className="shop-item__price">$3.50</p>
                        </article>
                        <article className="shop-item">
                            <h3 className="shop-item__name">
                                Blueberry, Lemon and Thyme Muffin</h3>
                            <p className="shop-item__par">
                                Tart and sweet, this classNameic blueberry and lemon combination comes
                                with an earthy twist.
                            </p>
                            <p className="shop-item__price">$2.50</p>
                        </article>
                    </article>
                </article>
            </section>
        </>
    );
}

export default ShopPage;