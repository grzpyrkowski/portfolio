import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {client, deleteTask} from "./toDoSlice";
import {useDispatch} from "react-redux";

export default function TaskDetail() {
    const dispatch = useDispatch();
    const par = useParams();
    let navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        client.get(`/${par.id}`)
            .then(data => setTask(data.data[0]))
    }, [par.id]);

    const onDeleteClicked = () => {
        try{
            dispatch(deleteTask({id: par.id}));
        } catch (err) {
            console.error(err)
        } finally {
            navigate("/board")
            navigate(0);
        }
    }

    return (
        <>
            <Link to="/board" className="btn-grad reset-state-btn">Back to Board</Link>
            <div className="single-task">
                { task ? (
                    <div className="task-details">
                        <div className="task-details-name">
                            <h1 className="uppercase">{task.name}</h1>
                        </div>
                        <div>
                            <h2>{task.description}</h2>
                            <h2>{task.date.slice(0, 10)}</h2>
                        </div>
                        <div className="task-details-buttons flex">
                            <Link to={`/board/${par.id}/edit`}>
                                <button className="form-btn btn-grad">Update task</button>
                            </Link>
                            <div>
                                <button className="form-btn btn-grad" onClick={() => onDeleteClicked()}>Delete task</button>
                            </div>
                        </div>
                    </div>
                ) : <h1>Loading</h1>}
            </div>
        </>
    )
}

