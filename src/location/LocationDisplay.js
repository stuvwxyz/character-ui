import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

class LocationDisplay extends Component {

    emptyItem = {
        locationId: '',
        locationName: '',
        locationLocation: '',
        locationTerrain: '',
        locationNotes: ''
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
            const group = await (await fetch(`/api/location/${this.props.match.params.id}`)).json();
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
        let id = item.locationId;
        console.log(id)
        await fetch(`/api/location/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/location');
    }

    render() {
        if (!auth0Client.isAuthenticated()) return null;

        const {item} = this.state;
        const title = <h2>{'View Location'}</h2>;

        return <div>
            <Navbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="locationName">Name</Label>
                        <Input type="text" name="locationName" id="locationName" value={item.locationName || ''}
                               autoComplete="locationName"/>

                        <Label for="locationLocation">Where is it Located?</Label>
                        <Input type="text" name="locationLocation" id="locationLocation" value={item.locationLocation || ''}
                               autoComplete="locationLocation"/>

                        <Label for="locationTerrain">Terrain</Label>
                        <Input type="text" name="locationTerrain" id="locationTerrain" value={item.locationTerrain || ''}
                               autoComplete="locationTerrain"/>

                        <Label for="locationNotes">Notes</Label>
                        <Input type="text" name="locationNotes" id="locationNotes" value={item.locationNotes || ''}
                               autoComplete="locationNotes"/>

                    </FormGroup>
                    <FormGroup>
                        <Button color="success" tag={Link} to="/location">Return</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(LocationDisplay);
