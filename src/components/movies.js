import React, { Component } from "react";
import PropTypes from "prop-types";
import { Movie } from "./movieComponent";


export class Movies extends Component { 
    static propTypes = { 
        movies: PropTypes.array
    }


    render () { 
        const {movies} = this.props
        
        return (
            <div className="MoviesList">
                {
                movies.map(movie => { 
                    return (
                        <div  key={movie.imdbID} className="MoviesList-item">
                            <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster}/>
                        </div>
                    )
                })
                }
            </div>
        )
    
    
    }
}