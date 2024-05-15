import "./Footer.scss";
import React from "react";
import insta from "../../assets/logos/Instagram-Icon.svg";
import yelp from "../../assets/logos/Yelp-Icon.svg";
import fb from "../../assets/logos/Facebook-Icon.svg";

function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer__address">
                    <h3 className="footer-head">Address</h3>
                    <a href="https://www.google.com/maps/dir//503+Broadway,+New+York,+NY+10012/@40.7224818,-74.0819769,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89c259894ee631e7:0x7b0a31ea522821ee!2m2!1d-73.9995769!2d40.7225111?entry=ttu"
                        title="Directions">
                        <p style="margin-bottom: 0">503 Broadway Penthouse</p>
                        <p style="margin-top: 0">New York</p>
                    </a>
                </div>
                <div className="footer__hours">
                    <h3 className="footer-head">Hours</h3>
                    <p style="margin-bottom: 0">
                        <strong>Monday - Friday</strong>
                        <time> 9am - 7pm </time>
                    </p>
                    <p style="margin-top: 0">
                        <strong>Saturday - Sunday</strong>
                        <time> 10am - 5pm </time>
                    </p>
                </div>
                <div className="footer__social">
                    <h3 className="footer-head">Social</h3>
                    <div className="social_socialList">
                        <a href="https://facebook.com" title="Facebook">
                            <img src={fb} className="footer__social-img"/>
                        </a>
                        <a href="https://yelp.com" title="Yelp">
                            <img src={yelp} className="footer__social-img"/>
                        </a>
                        <a href="https://instagram.com" title="Instagram">
                            <img src={insta} className="footer__social-img"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;