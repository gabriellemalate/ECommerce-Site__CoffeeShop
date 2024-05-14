import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className='header'>
            <div className='header_eq'>
                <Link to="/" className="header__logo">
                    NITRO COFFEE
                </Link>

                <div className='header-right'>
                    <div className='header-right__search'>
                        <form className="header-form" action="" method="">
                            <textarea className="header-form__box" type="search" placeholder="Search" />
                        </form>
                        {/* <Link to="">
                        </Link> */}
                    </div>
                    {/* <Link className="header-right__button" to="">
                        <div className="header-right__button-eq">
                        </div>
                    </Link> */}
                    {/* <Link to="">
                    </Link> */}
                </div>
            </div>
        </header>
    );
}

export default Header;