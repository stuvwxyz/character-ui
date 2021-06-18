import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

class CharacterDisplay extends Component {

    emptyItem = {
        characterId: '',
        characterName: '',
        characterAge: '',
        characterGender: '',
        characterRace: '',
        characterDescription: '',
        characterPurpose: '',
        characterBackground: '',
        characterNotes: '',
        characterAlive: '',
        characterLocations: []
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            //characterLocations: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const group = await (await fetch(`/api/character/${this.props.match.params.id}`)).json();
            this.setState({item: group});
        }
        
       // await fetch(`/api/character/${this.props.match.params.id}/locations`)
       //     .then(response => response.json())
       //     .then(characterLocations => this.setState({ characterLocations }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        const {item} = this.state;
        let id = item.characterId;
        console.log(id)
        await fetch(`/api/character/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/character');
    }

    render() {
        if (!auth0Client.isAuthenticated()) return null;

        const {item} = this.state;
        const title = <h2>{'View Character'}</h2>;
        
        function ListItem(item) {
            return <li>{item.value}</li>;
        }
        
        return <div>
            <Navbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="characterName">Name</Label>
                        <Input type="text" name="characterName" id="characterName" value={item.characterName || ''}
                               autoComplete="characterName"/>

                        <Label for="characterAge">Age</Label>
                        <Input type="text" name="characterAge" id="characterAge" value={item.characterAge || ''}
                               autoComplete="characterAge"/>

                        <Label for="characterGender">Gender</Label>
                        <Input type="text" name="characterGender" id="characterGender" value={item.characterGender || ''}
                               autoComplete="characterGender"/>

                        <Label for="characterRace">Race</Label>
                        <Input type="text" name="characterRace" id="characterRace" value={item.characterRace || ''}
                               autoComplete="characterRace"/>

                        <Label for="characterRelations">Relations (siblings)</Label>
                        <Input type="text" name="characterRelations" id="characterRelations" value={item.characterRelations || ''}
                               autoComplete="characterRelations"/>

                        <Label for="characterDescription">Description</Label>
                        <Input type="text" name="characterDescription" id="characterDescription" value={item.characterDescription || ''}
                               autoComplete="characterDescription"/>

                        <Label for="characterPurpose">Purpose</Label>
                        <Input type="text" name="characterPurpose" id="characterPurpose" value={item.characterPurpose || ''}
                               autoComplete="characterPurpose"/>

                        <Label for="characterBackground">Background</Label>
                        <Input type="text" name="characterBackground" id="characterBackground" value={item.characterBackground || ''}
                               autoComplete="characterBackground"/>

                        <Label for="characterNotes">Notes</Label>
                        <Input type="text" name="characterNotes" id="characterNotes" value={item.characterNotes || ''}
                               autoComplete="characterNotes"/>

                        <Label for="characterAlive">Alive</Label>
                        <Input type="text" name="characterAlive" id="characterAlive" value={item.characterAlive || ''}
                               autoComplete="characterAlive "/>   
                         <Label for="characterLocations">Character Locations</Label>
                                <ul>
                                   {item.characterLocations.map(location => {
                                       return <li key={`location-${location.locationId}`}>{location.locationName},{location.locationTerrain}</li>                                    })}
                               </ul>                                                                  
                    </FormGroup>
                    <FormGroup>
                        <Button color="success" tag={Link} to="/character">Return</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(CharacterDisplay);
