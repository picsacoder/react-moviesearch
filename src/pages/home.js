import React, { Component } from 'react';
import { Title } from '../components/titleComponent';
import { SearchForm } from '../components/searchComponent';
import { Movies } from '../components/movies';

export class Home extends Component {
    state = {
        used_search: false,
        results: []
    }
    
    _handleResults = (results) => {
        this.setState({results, used_search: true})
    
    }
    
    _renderResults() {
        return this.state.results.length === 0 ? <p>No results</p> : <Movies movies={this.state.results}/>
    }
    render() {
        return (
        <div>
            <Title>Search Movies</Title>

            <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults} />
            </div>
            {this.state.used_search ? this._renderResults() : <small>Search a movie</small>}
        </div>
        )
    }
}