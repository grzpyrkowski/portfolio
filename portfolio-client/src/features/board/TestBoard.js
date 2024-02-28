import './board.css';
import React, {useEffect} from "react";
import {getAllTasks, selectAllTasks} from "./toDoSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function TestBoard() {
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks)

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch]);

    const renderedTasks = tasks.map(task => (
        <Link to={`/testboard/${task.id}`} key={task.id}>
            <h1>{task.name}</h1>
            <h1>{task.description}</h1>
            <h1>{task.date}</h1>
        </Link>
    ))

    return (
        <div>
            {renderedTasks}
        </div>
    )
}