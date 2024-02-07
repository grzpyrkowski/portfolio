import React from "react";
import {useSelector} from "react-redux";
import Shop from "./shop/Shop";
import Game from "./game/Game";
import Board from "./board/Board";
import AddTaskForm from "./board/AddTaskForm";
import UpdateTaskForm from "./board/UpdateTaskForm";
import CV from "./cv/CV";

export default function Portfolio() {
    const {isAddFormOpen} = useSelector((store) => store.modalAddForm);
    const {isUpdateFormOpen} = useSelector((store) => store.modalUpdateForm);

    const initialState = () => <CV />;
    const [content, setContent] = React.useState(initialState);

    const resetState = () => {
        setContent(initialState())
    }

    return (
        <>
            {isAddFormOpen && <AddTaskForm />}
            {isUpdateFormOpen && <UpdateTaskForm />}
            <header className="hor-center header-font"><h1>Portfolio</h1></header>
            <nav className="navbar flex header-font">
                <div id="nav-shop-button" className="nav-item full-center " onClick={() => setContent(() => <Shop resetState={resetState}/>)}>Shop</div>
                <div id="nav-memo-button" className="nav-item full-center" onClick={() => setContent(() => <Game resetState={resetState}/>)}>Memory Game</div>
                <div id="nav-todo-button" className="nav-item full-center" onClick={() => setContent(() => <Board resetState={resetState}/>)}>To-Do Board</div>
            </nav>
            <main className="flex">
                {content}
            </main>
            <footer><p style={{padding: "0 1.5em"}}>I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p></footer>
        </>
    )
}