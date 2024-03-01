import './App.css';
import React from "react";
import AddTaskForm from "./features/board/AddTaskForm";
import Shop from "./features/shop/Shop";
import Game from "./features/game/Game";
import Board from "./features/board/Board";
import TestBoard from "./features/board/TestBoard";
import CV from "./features/cv/CV";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import TaskDetail from "./features/board/TaskDetail";
import Layout from "./features/layout/Layout";

export default function App() {

    return(
        <BrowserRouter>
            <div id="app" className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<CV />} />
                        <Route path="/shop" element={<Shop/>}/>
                        <Route path="/game" element={<Game/>}/>
                        <Route path="/board" element={<Board/>}/>
                        <Route path="/testboard" element={<TestBoard />}/>
                        <Route path="/testboard/new-task" element={<AddTaskForm />}/>
                        <Route path="/testboard/:id" element={<TaskDetail />}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
