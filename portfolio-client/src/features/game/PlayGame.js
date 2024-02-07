import React, {useCallback, useEffect, useState} from "react";

export default function PlayGame() {
    const [game, setGame] = useState(() => {
        return(
            <div>
                <h1>Press "Play" to start the game</h1>
                <button id="play" className="btn-grad" onClick={() => setGame(<Cluster />)}>Play</button>
            </div>
        )
    });

    const cluster = [];
    let sum = 0;
    let temporarySum = 0;

    function Cluster() {
        const [isVisible, setIsVisible] = React.useState(true)
        const changeNumbersToHidden = useCallback(() => {
            setIsVisible(false)
        }, []);

        useEffect(() => {
            const interval = setInterval(changeNumbersToHidden, 10000);
            return () => clearInterval(interval)
        }, [changeNumbersToHidden]);

        if(cluster.length === 0) {
            for (let i = 0; i < 16; i++) {
                cluster.push(Math.floor(Math.random() * 10));
            }
        }

        return (
            <>
            <div className="play-game">
                <div className="cluster">
                    {cluster.map((value, i) => (
                        <Cell
                            key={i}
                            number={value}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
            <Sum isVisible={isVisible}/>
            </>
        );
    }

    function Cell({isVisible, number}) {
        return (
            <div style={{pointerEvents: isVisible ? 'none' : ''}} className="cell" onClick = {() => addToSum(number)}>
                <p style={{display: isVisible ? 'block' : 'none'}}>{number}</p>
            </div>
        )
    }

    function Sum({isVisible}) {
        sum = Math.floor(Math.random()*20) + 5;

        return (
            <div className="display hor-center">
                <p>Your number is:</p>
                <p style={{display: isVisible ? 'none' : 'block'}} id="sum">{sum}</p>
            </div>
        )
    }

    function addToSum(cellsValue) {
        temporarySum = temporarySum + cellsValue;
        if (temporarySum === sum) {
            setGame(() =>{
                return (
                    <div>
                        <h1>Correct! Do you wanna play again?</h1>
                        <ReplayButton />
                    </div>
                )
            })
        } else {
            if (temporarySum > sum) {
                setGame(() => {
                    return (
                        <div>
                            <h1>Wrong, sum is lower! Do you wanna play again?</h1>
                            <ReplayButton/>
                        </div>
                    )
                })
            }
        }
        return temporarySum;
    }

    function ReplayButton() {
        return <button className="btn-grad" onClick={() => setGame(() => <PlayGame />)}>Sure!</button>
    }

    return (
        <>
            {game}
        </>
    )
}