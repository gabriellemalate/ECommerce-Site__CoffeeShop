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

                <ul className="header-nav">
                    <li className="header-nav__nav-item">
                        <Link to="/"> ABOUT </Link>
                    </li>
                    <li className="header-nav__nav-item">
                        <Link to="/menu"> MENU </Link>
                    </li>
                    <li className="header-nav__nav-item header-nav__nav-item--active">
                        <Link to="/shop">
                            SHOP NOW
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;