import React from 'react'
import OneMovie from './OneMovie'
import './Movie.css'
export default function Movies(props) {
    const {movies=[]} = props
    return (
        <div className="container movies">
            { movies.length ?
            movies.map(movie=>(
            <OneMovie key={movie.imdbID} {...movie}/>
            )) : (
                <h4>Nothing found</h4>
            )
            }
        </div>
    )
}
