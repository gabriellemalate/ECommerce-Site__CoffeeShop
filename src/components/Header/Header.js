import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className='header'>
            <nav class="top-nav">
                <a class="nav-logo" href="#back-to-top" style="text-decoration: none">
                    <img src="./assets/logos/coffee-beans-logo-and-footer.svg" alt="Logo Coffee Shop" />
                    <h1>nitro</h1>
                </a>

                <ul class="nav-list" style="list-style-type: none">
                    <li class="nav-list__nav-item">
                        <a href="./index.html" style="text-decoration: none"> ABOUT </a>
                    </li>
                    <li class="nav-list__nav-item">
                        <a href="./pages/menu.html" style="text-decoration: none"> MENU </a>
                    </li>
                    <li class="nav-list__nav-item nav-list__nav-item--active">
                        <a href="./pages/menu.html" style="text-decoration: none">
                            SHOP NOW
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;