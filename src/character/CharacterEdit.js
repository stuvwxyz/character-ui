import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../AppNavbar';

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
            const group = await (await fetch(`/character/${this.props.match.params.id}`)).json();
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

        await fetch('/character', {
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
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Character' : 'Add Character'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="characterName">characterName</Label>
                        <Input type="text" name="characterName" id="characterName" value={item.characterName || ''}
                               onChange={this.handleChange} autoComplete="characterName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterAge">characterAge</Label>
                        <Input type="text" name="characterAge" id="characterAge" value={item.characterAge || ''}
                               onChange={this.handleChange} autoComplete="characterAge"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterGender">characterGender</Label>
                        <Input type="text" name="characterGender" id="characterGender" value={item.characterGender || ''}
                               onChange={this.handleChange} autoComplete="characterGender"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterRace">characterRace</Label>
                        <Input type="text" name="characterRace" id="characterRace" value={item.characterRace || ''}
                               onChange={this.handleChange} autoComplete="characterRace"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterDescription">characterDescription</Label>
                        <Input type="text" name="characterDescription" id="characterDescription" value={item.characterDescription || ''}
                               onChange={this.handleChange} autoComplete="characterDescription"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterPurpose">characterPurpose</Label>
                        <Input type="text" name="characterPurpose" id="characterPurpose" value={item.characterPurpose || ''}
                               onChange={this.handleChange} autoComplete="characterPurpose"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterBackground">characterBackground</Label>
                        <Input type="text" name="characterBackground" id="characterBackground" value={item.characterBackground || ''}
                               onChange={this.handleChange} autoComplete="characterBackground"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterNotes">characterNotes</Label>
                        <Input type="text" name="characterNotes" id="characterNotes" value={item.characterNotes || ''}
                               onChange={this.handleChange} autoComplete="characterNotes"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="characterAlive">characterAlive</Label>
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
