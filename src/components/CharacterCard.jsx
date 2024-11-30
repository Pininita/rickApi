import React from "react";
import { Image } from "./Image.jsx";
import { Title } from "./Title.jsx"
import { Details } from "./Details.jsx";

export function CharacterCard(props) {

    return (
        <>
            <div className="CharacterCard">
                <Image url={props.image} alt='r-&-m-characters' />
                <Title title={props.name} />
                <Details
                    status={props.status}
                    gender={props.gender}
                />
            </div>
        </>
    )
}