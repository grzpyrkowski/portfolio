import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask} from "./toDoSlice";
import updateSvg from "../../data/board/update.svg";
import deleteSvg from "../../data/board/delete.svg"
import {openModalUpdate} from "./modalUpdateFormSlice";
import UpdateTaskForm from "./UpdateTaskForm";

const Task = (props) => {
    const dispatch = useDispatch();
    const { isUpdateFormOpen } = useSelector((store) => store.modalUpdateForm);

    let isDelayed = false;
    const currentDate = new Date();
    let fetchedDate = Date.parse(props.date)
    if( fetchedDate < currentDate ) isDelayed = true;

    const onDeleteClicked = () => {
        try{
            dispatch(deleteTask({id: props.id}));
        } catch (err) { console.error(err) }
    }

    return (
        <div className="task flex" id={"task-" + props.id}>
            {isUpdateFormOpen && <UpdateTaskForm
                id={props.id}
                name={props.name}
                description={props.description}
                requestStatus={props.requestStatus}
                setRequestStatus={props.setRequestStatus}
            />}

            <div className="task-details">
                <p className="uppercase">{props.name}</p>
                <p>{props.description}</p>
                <p
                    style={{color: isDelayed ? '#ff8080' : '#f2f2f2' }}
                >{props.date}</p>
            </div>
            <div className="task-btns-container flex">
                <img className="task-btn"
                    src={updateSvg}
                    alt="update"
                    onClick={() => dispatch(openModalUpdate())}
                />
                <img className="task-btn"
                     alt="trash"
                     src={deleteSvg}
                     onClick={() => onDeleteClicked()}
                />
            </div>
        </div>
    )
}

export default Task;