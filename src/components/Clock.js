import React from "react";
import XMark from "./XMark";


export default function Clock(props) {
    const { hours, minutes, seconds } = props;
    const { handleDelete, name, k} = props;

    return (
        <div className="inputlabel">
            <label className="forlabel">{name}</label>
            <div className="clockandbutton">
                <div className="clock">
                    {hours}:{minutes}:{seconds}
                </div>
                <button className="clockbutton" onClick={(e) => handleDelete(e, k)}>
                    <XMark />
                </button>
            </div>
        </div>
    )
} 