import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//         children : [
//             {
//                 path: "/shop",
//                 element: <Shop />,
//             }
//         ],
//     },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);