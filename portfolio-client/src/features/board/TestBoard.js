import './board.css';
import React, {useEffect} from "react";
import {getAllTasks, selectAllTasks} from "./toDoSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import arrowSvg from "../../data/board/arrow.svg"
import {openModalAdd} from "./modalAddFormSlice";

export default function TestBoard() {
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks)

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch]);

    // let isDelayed = false;
    // const currentDate = new Date();
    // let fetchedDate = Date.parse(task.date)
    // if( fetchedDate < currentDate ) isDelayed = true;

    const renderedTasks = tasks.map(task => (
        <Link to={`/testboard/${task.id}`} className="task flex" key={task.id}>
            <div className="task-details">
                <p className="uppercase">{task.name}</p>
                <p>{task.description}</p>
                <p
                    // style={{color: isDelayed ? '#ff8080' : '#f2f2f2'}}
                >{task.date}</p>
            </div>
            <div className="task-btns-container">
                <img className="task-btn" src={arrowSvg} alt="go-further"/>
            </div>
        </Link>
    ))

    return (
        <>
            <div className="hor-center board-content">
                <Link to="/testboard/new-task">
                      <button className="btn-grad add-task-btn">
                          Add new Task
                      </button>
                </Link>
                {renderedTasks}
            </div>
        </>
    )
}