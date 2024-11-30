import React from "react";
import { CharacterCard } from "../components/CharacterCard";
import { useEffect } from "react";
import { useState } from "react";
import { ButtonComponent } from "../components/ButtonComponent";
import {useLocation, useNavigate} from 'react-router-dom'

export const RickAndMortyCharacterCard = () => {

    const [characterList, setCharacterList] = useState([]);
    const [offset, setOffset] = useState(1)

    const [nameFilter, setNameFilter] = useState('')
    const [genderFilter, setGenderFilter] = useState('')

    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name') || '';
    const gender = queryParams.get('gender') || '';

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${offset}&name=${name}&gender=${gender}`)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data)
                setCharacterList(data.results)
            })
            .catch((error) => console.error("error found: ", error))
    }, [offset, name, gender])

    const handleSearch = () => {
        navigate(`?name=${nameFilter}&gender=${genderFilter}`)
    }
    
    return (
        <>
            {/* starting search bar */}
            <div className="search-bar">
                <input type="text" id='searchInput' placeholder='Search...' value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} className="search-bar-input" />
                <select name="" id="gender" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} className="search-bar-select">
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="genderless">Genderless</option>
                </select>
                <button type="button" onClick={handleSearch} className="search-bar-button">Search</button>
            </div>
            {/* ending search bar */}
            <div className="item-charactercard">
                {characterList && characterList.length > 0 ? (
                    characterList.map((characters) => {
                        return (
                            <div className="character-card-container" key={characters.id}>
                                <CharacterCard
                                    name={characters.name}
                                    image={characters.image}
                                    gender={characters.gender}
                                    status={characters.status}
                                />
                            </div>
                        )
    
    
                    })
                ) : (<p>no hay personajes disponibles</p>)
                }
            </div>
            <br />
            <section className='button-section-characterpage'>
                <ButtonComponent
                    pages={offset}
                    setpages={setOffset}
                />
            </section>
        </>
    )
}
