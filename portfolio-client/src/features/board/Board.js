import './board.css';
import React, {useEffect, useState} from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import {openModalAdd} from "./modalAddFormSlice";
import {useDispatch, useSelector} from "react-redux";
import {getAllTasks, selectAllTasks, getStatus} from "./toDoSlice";
import {Link} from "react-router-dom";

export default function Board () {
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks)
    const [requestStatus, setRequestStatus] = useState(useSelector(getStatus))
    const { isAddFormOpen } = useSelector((store) => store.modalAddForm);

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch]);

    let renderedTasks;
    if(requestStatus === "loading") {
        renderedTasks = <p>Loading</p>
    } else if (requestStatus === "success" || "idle") {
        renderedTasks = tasks.map(task =>
            <Link to={`/board/${task.id}`}>
                <Task key={task.id} requestStatus={requestStatus} setRequestStatus={setRequestStatus} {...task} />
            </Link>)
    } else if (requestStatus === "error")
        renderedTasks = <p>error</p>

    return (
        <>
            <Link to="/" className="btn-grad reset-state-btn">Back to CV</Link>
            <div className="board-content">
                {isAddFormOpen && <AddTaskForm requestStatus={requestStatus} setRequestStatus={setRequestStatus}/>}
                <div className="to-do-board">
                    <div className="board-main-header hor-center">
                        <h1>YOUR TO-DO BOARD</h1>
                    </div>
                    <div className="hor-center">
                        <button className="btn-grad add-task-btn" onClick={() => dispatch(openModalAdd())}>
                            Add new Task
                        </button>
                    </div>
                    <div className="task-list">
                        {renderedTasks}
                    </div>
                </div>
            </div>
        </>
    );
};