import React, { useEffect } from "react";
import "./Success.scss"
import { Link, useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate("/");
        }, 5000);

        // timer clear
        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <article className="success">
            <h1 className="success-head">Purchase Successful</h1>

            <p className="success-details">You'll be redirected in 5 seconds. Or you can {" "}
                <Link className="success-details__redirect" to="/">
                    click here
                </Link>
            </p>

        </article>
    );
}

export default Success;