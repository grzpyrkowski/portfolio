import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
// import {useDispatch} from "react-redux";
import {client, getTask} from "./toDoSlice";

export default function TaskDetail() {
    // const dispatch = useDispatch;
    const par = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        client.get(`/${par.id}`)
            .then(data => setTask(data.data[0]))
    }, [par.id]);


    // React.useEffect(() => {
    //     dispatch(getTask(par.id))
    // }, [dispatch, par.id]);
    console.log(task)

    return (
        <div>
            { task ? (
                <div>
                    <h1>{task.name}</h1>
                    <h1>{task.description}</h1>
                    <h1>{task.date}</h1>
                </div>
        ) : <h1>Loading</h1> }
        </div>
    )
}

