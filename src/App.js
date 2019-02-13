import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from './character/CharacterList';
import CharacterDisplay from "./character/CharacterDisplay";
import CharacterEdit from "./character/CharacterEdit";


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>

            <Route path='/character' exact={true} component={CharacterList}/>
            <Route path='/character/:id' component={CharacterDisplay}/>
            <Route path='/characteredit/:id' component={CharacterEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
