import "./shop.css"
import React from "react";
import ListProducts from "./ListProducts";

export default function Shop(props) {
        return (
            <div className="shop-content flex">
                <button className="btn-grad reset-state-btn" onClick={props.resetState}>Back to CV</button>
                <ListProducts />
            </div>
        )
}

