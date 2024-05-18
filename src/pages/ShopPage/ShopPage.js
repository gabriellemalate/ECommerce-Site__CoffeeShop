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
                        <a href="#coldDrinks"> BREWS </a>
                    </li>
                    <div className="shop-line"></div>
                    <li className="shop-nav__list-item">
                        <a href="#pastries"> MISC </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default ShopPage;