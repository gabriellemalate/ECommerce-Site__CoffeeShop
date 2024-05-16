import "./Discounts.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Discounts() {

    return (
        <>
            <article className="discounts">
                <center>
                    <h2 className="discounts__head">
                        Get 20% off your first order with code:
                        <strong>FirstNitro</strong>
                    </h2>
                </center>
            </article>
        </>
    );
}

export default Discounts;