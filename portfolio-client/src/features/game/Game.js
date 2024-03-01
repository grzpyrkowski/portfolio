import "./game.css"
import React from "react";
import PlayGame from "./PlayGame";
import {Link} from "react-router-dom";

export default function Game() {
    return (
        <>
            <div className="game-content">
                <div className="instruction">
                    <p>
                        This is memo game.
                        Try to remember numbers in table. After a while they will disappear.
                        Your task is to choose those, which added are equal to sum in the right.
                    </p>
                </div>
                <PlayGame/>
            </div>
        </>
    )
}