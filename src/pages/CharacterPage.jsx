import React from 'react'
import { RickAndMortyCharacterCard } from '../high-order-component/RickAndMortyCharacterCard'
import { Link } from 'react-router-dom'

export const CharacterPage = () => {

    return (
        <div>
            <h1>RICK AND MORTY CHARACTERS</h1>
            <section className="links nav-character">
                <Link to="/">
                    <button>Go home</button>
                </Link>
                <Link to="/episodes">
                    <button>Go to episodes</button>
                </Link>
            </section>
            <div className='app-characters-card'>
                <RickAndMortyCharacterCard />
            </div>


        </div>
    )
}

