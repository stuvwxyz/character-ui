import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

class CharacterList extends Component {

    constructor(props) {
        super(props);
        this.state = {character: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/character')
            .then(response => response.json())
            .then(data => this.setState({character: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/character/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCharacter = [...this.state.character].filter(i => i.id !== id);
            this.setState({character: updatedCharacter});
        });
    }

    render() {
        const {character, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const characterList = character.map(character => {

            return <tr key={character.id}>
                <td style={{whiteSpace: 'nowrap'}}>{character.characterName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{character.characterAge}</td>
                <td style={{whiteSpace: 'nowrap'}}>{character.characterGender}</td>
                <td style={{whiteSpace: 'nowrap'}}>{character.characterRace}</td>
                <td style={{whiteSpace: 'wrap'}}>{character.characterDescription}</td>
                <td style={{whiteSpace: 'nowrap'}}>{character.characterAlive}</td>

                <td>
                    <ButtonGroup className="float-right">
                        <Button size="sm" color="success" tag={Link} to={"/character/" + character.characterId}>Details</Button>
                        <Button size="sm" color="primary" tag={Link} to={"/characteredit/" + character.characterId}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(character.characterId)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/characteredit/new">Add Character</Button>
                    </div>
                    <h3>Character List</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="15%">Name</th>
                            <th width="20%">Age</th>
                            <th width="20%">Gender</th>
                            <th width="20%">Race</th>
                            <th width="20%">Physical Description</th>
                            <th width="20%">Alive</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {characterList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default CharacterList;
