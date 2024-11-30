import React from "react";

export const Image = (props) => {

    return(
        <div className="characterPic">
        <img src={props.url} alt="character-image" className="image" />
        </div>
    )
}