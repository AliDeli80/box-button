import React from "react";
import Toggle from "./Toggle";

export default function Sidebar(props) {

    const toggle = props.boxes.map(box => {
        return (
            <Toggle
            handelToggle={props.handelToggle}
            activeBoxes={props.activeBoxes}
            box={box}
            />
        )
    })

    return (
        <aside>
            {toggle}
        </aside>
    )
}