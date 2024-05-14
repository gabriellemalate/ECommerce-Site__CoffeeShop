import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Beans from "../../assets/logos/coffee-beans-logo-and-footer.svg";

function Header() {

    return (
        <header className='header'>
            <nav className="header__logo">
                <a className="header__logo-link" href="#back-to-top">
                    <img className="header__logo-img" src={Beans} alt="Logo CoffeeBeans" />
                    <Link to="/" className="header__logo-head">nitro coffee</Link>
                </a>

                <ul className="header-nav" style="list-style-type: none">
                    <li className="header-nav__nav-item">
                        <Link to="/"> ABOUT </Link>
                    </li>
                    <li className="header-nav__nav-item">
                        <Link> MENU </Link>
                    </li>
                    <li className="header-nav__nav-item header-nav__nav-item--active">
                        <Link>
                            SHOP NOW
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;