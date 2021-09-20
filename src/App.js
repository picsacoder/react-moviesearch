import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './components/titleComponent';
import { SearchForm } from './components/searchComponent';
import React, { Component } from 'react';

import { Movies } from './components/movies';


class App extends Component {
  state = {
    results: []
  }

  _handleResults = (results) => {
    this.setState({results})

  }



  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>

        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        
        {this.state.results.length === 0 ? <p>No results</p> : <Movies movies={this.state.results}/>}


      </div>
    );
  }
}

export default App;
