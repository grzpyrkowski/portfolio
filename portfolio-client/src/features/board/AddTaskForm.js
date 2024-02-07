import {useState} from "react";
import {useDispatch} from "react-redux";
import {closeModalAdd} from "./modalAddFormSlice";
import Close from "../../data/board/close.svg"
import {createTask} from "./toDoSlice";

export default function AddTaskForm(props) {
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        name: '',
        description: '',
        date: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask((prevState) => ({ ...prevState, [name]: value }));
    };

    const canSave = [task.name, task.description, task.date].every(Boolean) && props.requestStatus === "idle";

    function handleSubmit(event) {
        event.preventDefault();
        if(canSave) {
            try {
                dispatch(createTask(task));
            } 
            catch (err) { console.error(err) }
        }
        dispatch(closeModalAdd());
        props.setRequestStatus("idle")
    }

    return (
        <aside className="modal">
            <form className="form" onSubmit={handleSubmit}>
                <img className="close"
                    alt="close"
                    src={Close}
                    onClick={() => {dispatch(closeModalAdd())}}
                />
                <h2 className="uppercase">New task</h2>
                <label htmlFor="name">
                    <p>Task name: </p>
                    <input className="form-input input-text"
                        type="text"
                        id="name"
                        name="name"
                        value={task.name}
                        // errorMessage="Tasks name should have 5-100 characters"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    <p>Task description: </p>
                    <textarea className="form-input input-text"
                        id="description"
                        name="description"
                        value={task.description}
                        // errorMessage="Tasks description should have 10-1000 characters"
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
                    <button className="form-btn btn-grad" style={{float: "right"}} onClick={() => {dispatch(closeModalAdd())}}>Cancel</button>
                </div>
            </form>
        </aside>
    )
}