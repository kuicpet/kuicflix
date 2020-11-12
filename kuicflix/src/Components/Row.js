import React, { useState, useEffect } from 'react';
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    useEffect(() => {
         async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request;
         }
         fetchData();
    }, [fetchUrl])

    //console.log(movies)
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie.name || "")
            .then(url => {
                const urlParams =  new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                <h3>{title}</h3> 
            <div className="posters m-2 pb-3">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`poster ${isLargeRow && "posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
                </div>
            </div>
        </div>
    )
}

export default Row
