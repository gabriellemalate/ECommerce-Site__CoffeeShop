import "./Footer.scss"
import React from "react";
import { Link } from "react-router-dom";

function Footer() {


    return (
        <>
            <footer>
                <div className="address">
                    <h3>Address</h3>
                    <Link to="https://www.google.com/maps/dir//503+Broadway,+New+York,+NY+10012/@40.7224818,-74.0819769,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c259894ee631e7:0x7b0a31ea522821ee!2m2!1d-73.9995769!2d40.7225111?entry=ttu"
                        title="Directions">
                        <p style="margin-bottom: 0">503 Broadway Penthouse</p>
                        <p style="margin-top: 0">New York</p>
                    </Link>
                </div>
                <div className="hours">
                    <h3>Hours</h3>
                    <p style="margin-bottom: 0">
                        <strong>Monday - Friday</strong>
                        <time> 9am - 7pm </time>
                    </p>
                    <p style="margin-top: 0">
                        <strong>Saturday - Sunday</strong>
                        <time> 10am - 5pm </time>
                    </p>
                </div>
                <div className="social">
                    <h3>Social</h3>
                    <div className="social_socialList">
                        <Link to="https://facebook.com" title="Facebook">
                            <img src="./assets/logos/Facebook-Icon.svg" />
                        </Link>
                        <Link to="https://yelp.com" title="Yelp">
                            <img src="./assets/logos/Yelp-Icon.svg" />
                        </Link>
                        <Link to="https://instagram.com" title="Instagram">
                            <img src="./assets/logos/Instagram-Icon.svg" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;