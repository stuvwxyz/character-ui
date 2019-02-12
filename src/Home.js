import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.svg';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Begin your adventure
                        </p>
                        <Container fluid>
                            <Button color="link"><Link to="/character">Manage Characters</Link></Button>
                        </Container>
                    </header>
                </div>
            </div>
        );
    }
}

export default Home;
