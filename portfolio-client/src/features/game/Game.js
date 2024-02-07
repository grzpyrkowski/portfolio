import "./game.css"
import React from "react";
import PlayGame from "./PlayGame";

export default function Game(props) {
    return (
        <div className="game-content">
            <button className="btn-grad reset-state-btn" onClick={props.resetState}>Back to CV</button>
            <div className="instruction">
                <p>
                    This is memo game.
                    Try to remember numbers in table. After a while they will disappear.
                    Your task is to choose those, which added are equal to sum in the right.
                </p>
            </div>
            <PlayGame/>
        </div>
    )
}