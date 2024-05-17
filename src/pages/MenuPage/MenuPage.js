import "./MenuPage.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MenuPage() {


    return (
        <>

            <section className="menu-hero">
                <center>
                    <div className="menu-hero__container">
                        <div className="menu-hero__head">MENU</div>
                        <center>
                            <h2>.</h2>
                        </center>
                    </div>
                </center>
            </section>

            <nav className="menu-nav" id="menu-nav">
                <ul className="menu-nav__list">
                    <div className="menu-line"></div>
                    <li className="menu-nav__list-item">
                        <a href="#menu-nav"> HOT DRINKS </a>
                    </li>
                    <div className="menu-line"></div>
                    <li className="menu-nav__list-item">
                        <a href="#coldDrinks"> COLD DRINKS </a>
                    </li>
                    <div className="menu-line"></div>
                    <li className="menu-nav__list-item">
                        <a href="#pastries"> PASTRIES </a>
                    </li>
                </ul>
            </nav>

            <section className="menu">
                <article className="menu__category menu__category--hot">
                    <h2 className="menu-title">Hot Drinks</h2>
                    <article className="hot__hot-items">
                        <article className="menu-item">
                            <h3 className="menu-item__name"> In-House Brew</h3>
                            <p className="menu-item__par">
                                Our in-house medium roast is a classNameic balance between sweet
                                vanilla, nutty hazelnut, and a smooth low acidity to bring
                                everything together.
                            </p>
                            <p className="menu-item__price">$2.99</p>
                        </article>
                        <article className="menu-item">
                            <h3 className="menu-item__name">
                                Espresso</h3>
                            <p className="menu-item__par">
                                A balance between bold and smooth, powerful and sweet, our
                                signature espresso blend is a complex flavor profile. It features
                                strong notes of semi-sweet chocolate and caramel, with mild
                                acidity and a bright floral finish.
                            </p>
                            <p className="menu-item__price">$4.99</p>
                        </article>
                    </article>
                </article>

                <article className="menu__category menu__category--cold" id="coldDrinks">
                    <h2>Cold Drinks</h2>
                    <article className="cold__coldItems">
                        <article className="menu-item">
                            <h3 className="menu-item__name">
                                Cold Brew</h3>
                            <p className="menu-item__par">
                                Our bright and delicious coffee blend, brewed over ice to give you
                                a cold coffee freshness with all the flavor of our amazing
                                in-house coffee.
                            </p>
                            <p className="menu-item__price">$3.99</p>
                        </article>
                        <article className="menu-item">
                            <h3 className="menu-item__name">
                                Iced Chai Latte</h3>
                            <p className="menu-item__par">
                                A creamy drink with a kick, this drink features spicy chai tea
                                blended with your choice of milk and poured over ice.
                            </p>
                            <p className="menu-item__price">$6.99</p>
                        </article>
                    </article>
                </article>

                <article className="menu__category menu__category--food" id="pastries">
                    <h2>Pastries</h2>
                    <article className="food__foodItems">
                        <article className="menu-item">
                            <h3 className="menu-item__name">
                                Bacon Oatmeal Raisin Cookie</h3>
                            <p className="menu-item__par">
                                An infused bacon, sugar and egg mixture is folded into a perfect
                                blend of oats, flour, raisins and cinnamon to create a soft and
                                chewy textured cookie.
                            </p>
                            <p className="menu-item__price">$3.50</p>
                        </article>
                        <article className="menu-item">
                            <h3 className="menu-item__name">
                                Blueberry, Lemon and Thyme Muffin</h3>
                            <p className="menu-item__par">
                                Tart and sweet, this classNameic blueberry and lemon combination comes
                                with an earthy twist.
                            </p>
                            <p className="menu-item__price">$2.50</p>
                        </article>
                    </article>
                </article>
            </section>
        </>
    );
}

export default MenuPage;