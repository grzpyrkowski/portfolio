import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError();
    console.error(err)

    return (
        <div className="error-page hor-center">
            <h1>This site is empty!</h1>
            <h3>Nothing to see here :(</h3>
            <p>{err.statusText || err.message}</p>
        </div>
    );
}