import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './components/titleComponent';
import { SearchForm } from './components/searchComponent';
import React, { Component } from 'react';

import { Movies } from './components/movies';
import { Detail } from './pages/detail';


class App extends Component {
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
    const url = new URL(document.location)
    const has_id = url.searchParams.has('id')
    if (has_id) {
      return <Detail/>
    }

    return (
      <div className="App">
        <Title>Search Movies</Title>

        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.used_search ? this._renderResults() : <small>Search a movie</small>}
        
        


      </div>
    );
  }
}

export default App;
