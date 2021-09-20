import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './components/titleComponent';
import { SearchForm } from './components/searchComponent';


function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>

      <div className="SearchForm-wrapper">
        <SearchForm/>
      </div>
    </div>
  );
}

export default App;
