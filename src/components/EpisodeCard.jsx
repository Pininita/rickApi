import React from "react";

export const EpisodeCard = (props) => {

    return(
        <>
        <div className="episodecard">
            <h3 className="episodecard-name">{props.name}</h3>
            <div className="episodecard-footer">
                <h3 className="episodecard-episode">{props.episode}</h3>
                <p className="episodecard-date"><b>Date: </b>{props.air_date}</p>
            </div>
        </div>
        </>
    )
}