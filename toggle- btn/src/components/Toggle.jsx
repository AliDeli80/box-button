import React from "react";

export default function Toggle(props) {
    return (
        <div className="toggle">
            <span>{props.box.title}</span>
            <label className="toggle-control">
                <input type="checkbox" checked={props.activeBoxes.includes(props.box.id)}/>
                <div className="hidden">input</div>
                <span className="control" onClick={(e) => props.handelToggle(props.box.id)}></span>
            </label>
        </div>
    )
}