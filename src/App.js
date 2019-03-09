import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from './character/CharacterList';
import CharacterDisplay from "./character/CharacterDisplay";
import CharacterEdit from "./character/CharacterEdit";
import Callback from './Callback';
import SecuredRoute from './SecuredRoute/SecuredRoute';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>

            <SecuredRoute path='/character' component={CharacterList} />
            <SecuredRoute path='/character/:id' component={CharacterDisplay}/>
            <SecuredRoute path='/characteredit/:id' component={CharacterEdit}/>

            <Route exact path='/callback' component={Callback}/>

          </Switch>
        </Router>
    )
  }
}

export default App;
