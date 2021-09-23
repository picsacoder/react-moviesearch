import './App.css';
import 'bulma/css/bulma.css'
import React, { Component } from 'react';
import { Detail } from './pages/detail';
import { Route, Switch } from 'react-router';
import { Home } from './pages/home';
import { noExist } from './pages/404';


class App extends Component {



  render() {
    const url = new URL(document.location)
    const Page = url.searchParams.has('id') ? <Detail id={url.searchParams.get('id')}/> :  <Home/>


    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/detail/:id" component={Detail}/>

          <Route component={noExist}/>
        </Switch>


      </div>
    );
  }
}

export default App;
