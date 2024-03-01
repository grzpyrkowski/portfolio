import "./shop.css"
import React from "react";
import ListProducts from "./ListProducts";

export default function Shop() {
        return (
            <>
                <div className="shop-content flex">
                    <ListProducts/>
                </div>
            </>
        )
}

