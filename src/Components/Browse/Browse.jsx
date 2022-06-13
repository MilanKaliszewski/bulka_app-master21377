import React from 'react';
import {type} from "@testing-library/user-event/dist/type";

function Browse(props) {

    const rolls = {...localStorage}
    let renderedOutput = [];
    for (const [key, value] of Object.entries(rolls)) {
        renderedOutput.push(JSON.parse(value))
    }
    return (
        <div className="navbar__right-side rolls">
            {
                renderedOutput.map((k, v) => {
                    return <Bulka name={k.name} meat={k.meat} butter={k.butterType} cheese={k.cheese[0]} cheeseAmount={k.cheese[1]} />
                })
            }
        </div>
    );
}

export default Browse;

const Bulka = (props) => {
    return (
        <div className={"roll"}>
            <span className={"roll__nazwa name"}>{props.name}</span> <br/>
            <span className={"roll__mieso name"}>Mięso:</span> {props.meat}<br/>
            <span className={"roll__maslo name"}>Masło:</span>  {props.butter}<br/>
            <span className={"roll__ser name"}> Ser, plasterki:</span> {props.cheese}, {props.cheeseAmount}
        </div>
    )
}