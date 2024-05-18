import "./shop.css"
import React from "react";
import ListProducts from "./ListProducts";
import {Link} from "react-router-dom";

export default function Shop() {
        return (
            <>
                <Link to="/" className="btn-grad reset-state-btn">Back to Main Page</Link>
                <div className="shop-content flex">
                    <ListProducts/>
                </div>
            </>
        )
}