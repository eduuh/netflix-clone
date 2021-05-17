import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios'
import requests from './Request'

function Banner() {
    const [movie, setmovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setmovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
            return request
        }
        fetchData()

    }, [])

    console.log(movie)
    function trancate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }
    return (
        <header className="banner" style={{
            backgroundsize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">{trancate(movie.overview, 150)}</h1>
            </div>
            <div className="banner_fade">
            </div>
        </header>
    )
}

export default Banner