import React from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {client, getTask} from "./toDoSlice";

export default function TaskDetail() {
    const dispatch = useDispatch;
    
    const par = useParams();
    console.log(par)

    React.useEffect(() => {
        client.get(`${par.id}`)
            .then(data => console.log(data))
    }, [par.id]);
    
    // React.useEffect(() => {
    //     dispatch(getTask(par.id))
    // }, [dispatch, par.id]);

    return (
        <h1>eloo</h1>
    )
}

