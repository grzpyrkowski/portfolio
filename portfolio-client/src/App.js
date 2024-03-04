import './App.css';
import React from "react";
import AddTaskForm from "./features/board/AddTaskForm";
import Shop from "./features/shop/Shop";
import Game from "./features/game/Game";
import Board from "./features/board/Board";
import CV from "./features/cv/CV";
import TaskDetail from "./features/board/TaskDetail";
import Layout from "./features/layout/Layout";
import UpdateTaskForm from "./features/board/UpdateTaskForm";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./features/layout/ErrorPage";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />} errorElement={<ErrorPage />}>
                <Route path="/" element={<CV />} />
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/board" element={<Board />}/>
                <Route path="/board/new-task" element={<AddTaskForm />}/>
                <Route path="/board/:id" element={<TaskDetail />}/>
                <Route path="/board/:id/edit" element={<UpdateTaskForm />}/>
            </Route>
        )
    );

    return(
        <div id="app" className="App">
            <RouterProvider router={router} />
        </div>
    )
}
