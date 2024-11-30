import React from "react";
import { RickAndMortyEpisodeCard } from "../high-order-component/RickAndMortyEpisodeCard";
import { Link } from "react-router-dom";

export const EpisodesPage = () => {

    return (
        <div className="body-episodes">
            <h1>RICK AND MORTY EPISODES</h1>
            <nav>
                <section className="links nav-episodes">
                <Link to="/">
                        <button>Go home</button>
                </Link>
                <Link to="/characters">
                        <button>Go to characters</button>
                </Link>
                </section>
            </nav>
            <section className="main-episodes-page">
                <RickAndMortyEpisodeCard/>         
            </section>
        </div>
    )
}