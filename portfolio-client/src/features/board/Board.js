import './board.css';
import React, {useEffect} from "react";
import {getAllTasks, selectAllTasks} from "./toDoSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import arrowSvg from "../../data/board/arrow.svg"

export default function Board() {
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const navigate = useNavigate();

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(getAllTasks());
        }
    }, [dispatch, tasks.length]);

    const renderedTasks = tasks.map(task => (
        <Link to={`/board/${task.id}`} className="task flex" key={task.id}>
            <div className="task-details">
                <p className="uppercase">{task.name}</p>
                <p>{task.description}</p>
                <p>{task.date}</p>
            </div>
            <div className="task-btns-container">
                <img className="task-btn" src={arrowSvg} alt="go-further"/>
            </div>
        </Link>
    ))

    return (
        <>
            <Link to="/" className="btn-grad reset-state-btn">Back to CV</Link>
            <div className="hor-center board-content">
                <Link to="/board/new-task">
                      <button className="btn-grad add-task-btn">
                          Add new Task
                      </button>
                </Link>
                {renderedTasks}
            </div>
        </>
    )
}