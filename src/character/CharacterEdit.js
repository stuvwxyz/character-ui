import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

class CharacterEdit extends Component {

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
        characterAlive: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const group = await (await fetch(`/api/character/${this.props.match.params.id}`)).json();
            this.setState({item: group});
        }
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
        const {item} = this.state;

        await fetch('/api/character', {
            method: (item.id) ? 'PUT' : 'POST',
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
        const title = <h2>{item.id ? 'Edit Character' : 'Add Character'}</h2>;

        return <div>
            <Navbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="characterName">Name</Label>
                        <Input type="text" name="characterName" id="characterName" value={item.characterName || ''}
                               onChange={this.handleChange} autoComplete="characterName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterAge">Age</Label>
                        <Input type="text" name="characterAge" id="characterAge" value={item.characterAge || ''}
                               onChange={this.handleChange} autoComplete="characterAge"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterGender">Gender</Label>
                        <Input type="text" name="characterGender" id="characterGender" value={item.characterGender || ''}
                               onChange={this.handleChange} autoComplete="characterGender"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterRace">Race</Label>
                        <Input type="text" name="characterRace" id="characterRace" value={item.characterRace || ''}
                               onChange={this.handleChange} autoComplete="characterRace"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterRelations">Relations (siblings)</Label>
                        <Input type="text" name="characterRelations" id="characterRelations" value={item.characterRelations || ''}
                               onChange={this.handleChange} autoComplete="characterRelations"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterDescription">Description</Label>
                        <Input type="text" name="characterDescription" id="characterDescription" value={item.characterDescription || ''}
                               onChange={this.handleChange} autoComplete="characterDescription"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterPurpose">Purpose</Label>
                        <Input type="text" name="characterPurpose" id="characterPurpose" value={item.characterPurpose || ''}
                               onChange={this.handleChange} autoComplete="characterPurpose"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterBackground">Background</Label>
                        <Input type="text" name="characterBackground" id="characterBackground" value={item.characterBackground || ''}
                               onChange={this.handleChange} autoComplete="characterBackground"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterNotes">Notes</Label>
                        <Input type="text" name="characterNotes" id="characterNotes" value={item.characterNotes || ''}
                               onChange={this.handleChange} autoComplete="characterNotes"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterAlive">Alive</Label>
                        <Input type="text" name="characterAlive" id="characterAlive" value={item.characterAlive || ''}
                               onChange={this.handleChange} autoComplete="characterAlive"/>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/character">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(CharacterEdit);
