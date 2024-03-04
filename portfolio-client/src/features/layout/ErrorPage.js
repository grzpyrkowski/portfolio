import {Link, useRouteError} from "react-router-dom";
import React from "react";

export default function ErrorPage() {
    const err = useRouteError();
    console.error(err)

    return (
        <div className="error-page hor-center">
            <h1>This site is empty!</h1>
            <h3>Nothing to see here :(</h3>
            <br/>
            <Link to="/" className="btn-grad">Back to main page</Link>
        </div>
    );
}