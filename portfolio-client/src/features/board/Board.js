import './board.css';
import React, {useEffect, useState} from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import {openModalAdd} from "./modalAddFormSlice";
import {useDispatch, useSelector} from "react-redux";
import {getAllTasks, selectAllTasks, getStatus} from "./toDoSlice";

export default function Board (props) {
    const dispatch = useDispatch();
    const { isAddFormOpen } = useSelector((store) => store.modalAddForm);
    const tasks = useSelector(selectAllTasks)
    const [requestStatus, setRequestStatus] = useState(useSelector(getStatus))

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch]);

    let renderedTasks;
    if(requestStatus === "loading") {
        renderedTasks = <p>Loading</p>
    } else if (requestStatus === "success" || "idle") {
        renderedTasks = tasks.map(task => <Task key={task.id} requestStatus={requestStatus} setRequestStatus={setRequestStatus} {...task} />)
    } else if (requestStatus === "error")
        renderedTasks = <p>error</p>

    return (
        <div className="board-content">
            {isAddFormOpen && <AddTaskForm requestStatus={requestStatus} setRequestStatus={setRequestStatus}/>}
            <button className="btn-grad reset-state-btn" onClick={props.resetState}>Back to CV</button>
            <div className="to-do-board">
                <div className="board-main-header hor-center">
                    <div><h1>YOUR TO-DO BOARD</h1></div>
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
    );
};