import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTask} from "./toDoSlice";
import {Link, useNavigate} from "react-router-dom";

export default function AddTaskForm() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [task, setTask] = useState({
        name: '',
        description: '',
        date: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask((prevState) => ({ ...prevState, [name]: value }));
    };

    const canSave = [task.name, task.description, task.date].every(Boolean);

    function handleSubmit(event) {
        event.preventDefault();
        if(canSave) {
            try {
                dispatch(createTask(task));
            } 
            catch (err) {
                console.error(err)
            } finally {
                navigate("/board")
                navigate(0);
            }
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="uppercase">New task</h2>
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
                    <button className="form-btn btn-grad" type="submit" disabled={!canSave}>Add task</button>
                    <Link to="/board">
                        <button className="form-btn btn-grad" style={{float: "right"}}>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}