import {Link, Outlet} from "react-router-dom";
import React from "react";

export default function Layout() {

    return (
        <>
            <header className="hor-center header-font">
                <h1>Portfolio</h1>
                <nav className="navbar flex">
                    <Link to="/shop" id="nav-shop-button" className="nav-item full-center">Shop</Link>
                    <Link to="/game" id="nav-memo-button" className="nav-item full-center">Memory Game</Link>
                    <Link to="/board" id="nav-todo-button" className="nav-item full-center">To-Do Board</Link>
                </nav>
            </header>
            <main >
                <Outlet />
            </main>
            <footer>
                <p style={{padding: "0 1.5em"}}>
                    I agree to the processing of personal data provided in this document for realising the recruitment process
                    pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in
                    agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on
                    the protection of natural persons with regard to the processing of personal data and on the free movement of
                    such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
                </p>
            </footer>
        </>
    )
}