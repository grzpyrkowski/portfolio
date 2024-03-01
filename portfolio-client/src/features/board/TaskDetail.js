import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {client} from "./toDoSlice";

export default function TaskDetail() {
    const par = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        client.get(`/${par.id}`)
            .then(data => setTask(data.data[0]))
    }, [par.id]);

    console.log(task)

    return (
        <div className="single-task">
            { task ? (
                <>
                    <div className="task-details">
                        <h1>{task.name}</h1>
                        <h1>{task.description}</h1>
                        <h1>{task.date.slice(0, 10)}</h1>
                    </div>
                    <div className="task-actions">
                        <Link to={``}>

                        </Link>
                        <Link to={``}>

                        </Link>
                    </div>
                </>
            ) : <h1>Loading</h1>}
        </div>
    )
}

