import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../AppNavbar';

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
        console.log(this.state)
        const {item} = this.state;
        let id = item.characterId;
        console.log(id)
        await fetch(`/character/${id}`, {
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
        const {item} = this.state;
        const title = <h2>{'View Character'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="characterName">characterName</Label>
                        <Input type="text" name="characterName" id="characterName" value={item.characterName || ''}
                               autoComplete="characterName"/>

                        <Label for="characterAge">characterAge</Label>
                        <Input type="text" name="characterAge" id="characterAge" value={item.characterAge || ''}
                               autoComplete="characterAge"/>

                        <Label for="characterGender">characterGender</Label>
                        <Input type="text" name="characterGender" id="characterGender" value={item.characterGender || ''}
                               autoComplete="characterGender"/>

                        <Label for="characterRace">characterRace</Label>
                        <Input type="text" name="characterRace" id="characterRace" value={item.characterRace || ''}
                               autoComplete="characterRace"/>

                        <Label for="characterDescription">characterDescription</Label>
                        <Input type="text" name="characterDescription" id="characterDescription" value={item.characterDescription || ''}
                               autoComplete="characterDescription"/>

                        <Label for="characterPurpose">characterPurpose</Label>
                        <Input type="text" name="characterPurpose" id="characterPurpose" value={item.characterPurpose || ''}
                               autoComplete="characterPurpose"/>

                        <Label for="characterBackground">characterBackground</Label>
                        <Input type="text" name="characterBackground" id="characterBackground" value={item.characterBackground || ''}
                               autoComplete="characterBackground"/>

                        <Label for="characterNotes">characterNotes</Label>
                        <Input type="text" name="characterNotes" id="characterNotes" value={item.characterNotes || ''}
                               autoComplete="characterNotes"/>

                        <Label for="characterAlive">characterAlive</Label>
                        <Input type="text" name="characterAlive" id="characterAlive" value={item.characterAlive || ''}
                               autoComplete="characterAlive "/>
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
