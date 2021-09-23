import React, {Component} from "react";
import PropTypes from "prop-types";


const API_KEY = '6d884e4'

export class Detail extends Component {
    static propTypes = { 
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { 
        movie: {}
    }

    _fetchMovie({id}) { 
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then( res => res.json() )
            .then (
                movie => { 
                    console.log(movie)
                    this.setState({movie})
                }
            )
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this._fetchMovie({id})
    }

    render() {
        const {Title, Poster, Metascore, Plot} = this.state.movie 
        return (
            
            <div className="container">
                <h1 className="title">{Title}</h1>
                <img src={Poster}></img>
                <p>Plot:</p>
                <p>{Plot}</p>
                <br/>
                <p>Score: {Metascore}</p>
            </div>
        )
    }
}