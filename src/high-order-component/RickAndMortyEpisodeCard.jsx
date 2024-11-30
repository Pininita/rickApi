import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { EpisodeCard } from "../components/EpisodeCard";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


export const RickAndMortyEpisodeCard = () => {

    const [episodeList, setEpisodeList] = useState([])
    const [offset, setOffset] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode?page=${offset}`)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data)
                setEpisodeList(data.results)

            })
            .catch((error) => console.error("error find: ", error))
    }, [offset])

    const prevPage = () => {
        setOffset(offset - 1)
    }

    const nextPage = () => {
        setOffset(offset + 1)
    }

    return (
        <div className="container-episodePage">
            <div className="episode-item">
                {
                    episodeList.map((cap) => (
                        <div key={cap.id}>
                            <EpisodeCard
                                name={cap.name}
                                episode={cap.episode}
                                air_date={cap.air_date}
                            />
                        </div>
                    ))
                }
            </div>
            <section className="button-section-episodePage">
                <button
                    className="pagination-button"
                    disabled={offset === 1}
                    onClick={prevPage}>
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                    prev
                </button>
                <p>{offset}</p>
                <button
                    className="pagination-button"
                    disabled={offset === 3}
                    onClick={nextPage}>
                    next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </button>
            </section>
        </div>
    )
}