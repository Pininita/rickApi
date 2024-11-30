import React from "react";
import { Link } from "react-router-dom";
import characterHome from "../pics/characters-home.webp"
import episodesHome from "../pics/episodes-home.jpg"


export const HomePage = () => {

    return (
        <>
            <h1>
                Welcome To Rick And Morty's Page
            </h1>
            <h3>
                Quick Links
            </h3>
            <section className="home-links">
                <div className="links"> 
                    <img src={characterHome} alt="characters-home" />
                    <Link to="/characters">
                        <button>Go to characters</button>
                    </Link>
                </div>
                <div className="links">
                    <img src={episodesHome} alt="episodes-home" />
                    <Link to="/episodes">
                        <button>Go to episodes</button>
                    </Link>
                </div>
            </section>
        </>
    )
}