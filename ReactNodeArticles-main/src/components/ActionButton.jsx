import React from "react";

function ActionButton({ label, onAction }) {
    return <button onClick={onAction}>{label}</button>;
}

export default ActionButton;
