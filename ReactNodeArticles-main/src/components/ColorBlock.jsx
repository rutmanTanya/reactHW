import React from "react";

function ColorBlock({ color = "gray" }) {
    const blockStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: color,
    };

    return <div style={blockStyle}></div>;
}

export default ColorBlock;
