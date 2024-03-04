import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {client, updateTask} from "./toDoSlice";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function UpdateTaskForm() {
    const dispatch = useDispatch();
    const par = useParams();
    let navigate = useNavigate();
    const [task, setTask] = useState({
        name: '',
        description: '',
        date: ''
    })

    useEffect(() => {
        client.get(`/${par.id}`)
            .then(data => {
                data.data[0].date = data.data[0].date.slice(0,10);
                setTask(data.data[0]);
            })
    }, [par.id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask((prevState) => ({ ...prevState, [name]: value }));
    };

    const canSave = [task.name, task.description, task.date].every(Boolean);

    function handleSubmit(event) {
        event.preventDefault();
        if (canSave) {
            try {
                dispatch(updateTask(task));
            } 
            catch (err) {
                console.error(err)
            } finally {
                navigate(`/board/${par.id}`)
                navigate(0);
            }
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="uppercase">Update task</h2>
                <label htmlFor="name">
                    <p>Task name: </p>
                    <input className="form-input input-text"
                        type="text"
                        id="name"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    <p>Task description: </p>
                    <textarea className="form-input input-text"
                        id="description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="date">
                    <p>Task termination date: </p>
                    <input className="form-input input-text"
                        type="date"
                        id="date"
                        name="date"
                        value={task.date}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <br/>
                <div>
                    <button className="form-btn btn-grad" type="submit" disabled={!canSave}>Update</button>
                    <Link to={`/board/${par.id}`}>
                        <button className="form-btn btn-grad" style={{float: "right"}}>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}