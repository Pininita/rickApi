import React from "react";

export const Details = (props) => {
    return (
        <>
            <p><strong>Status: </strong>{props.status}</p>
            <p><strong>Gender: </strong>{props.gender}</p>
        </>
    )
}