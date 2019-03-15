import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import CharacterList from './character/CharacterList';
import CharacterDisplay from "./character/CharacterDisplay";
import CharacterEdit from "./character/CharacterEdit";
import Callback from './Callback';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import auth0Client from './Auth';

class App extends Component {
    async componentDidMount() {
        if (this.props.location.pathname === '/callback') return;
        try {
            await auth0Client.silentAuth();
            this.forceUpdate();
        } catch (err) {
            if (err.error !== 'login_required') console.log(err.error);
        }
    }

  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>

            <SecuredRoute path='/character/:id' component={CharacterDisplay}/>
            <SecuredRoute path='/character' component={CharacterList} />
            <SecuredRoute path='/characteredit/:id' component={CharacterEdit}/>

            <Route exact path='/callback' component={Callback}/>

          </Switch>
        </Router>
    )
  }
}

export default App;
