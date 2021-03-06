import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

class OrganizationEdit extends Component {

    emptyItem = {
        organizationId: '',
        organizationName: '',
        organizationNotes: '',
        organizationPurpose: ''
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
            const group = await (await fetch(`/api/organization/${this.props.match.params.id}`)).json();
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

        await fetch('/api/organization', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/organization');
    }

    render() {
        if (!auth0Client.isAuthenticated()) return null;

        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Organization' : 'Add Organization'}</h2>;

        return <div>
            <Navbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="organizationName">Name</Label>
                        <Input type="text" name="organizationName" id="organizationName" value={item.organizationName || ''}
                               onChange={this.handleChange} autoComplete="organizationName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="organizationNotes">Notes</Label>
                        <Input type="text" name="organizationNotes" id="organizationNotes" value={item.organizationNotes || ''}
                               onChange={this.handleChange} autoComplete="organizationNotes"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="organizationPurpose">Purpose</Label>
                        <Input type="text" name="organizationPurpose" id="organizationPurpose" value={item.organizationPurpose || ''}
                               onChange={this.handleChange} autoComplete="organizationPurpose"/>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/organization">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(OrganizationEdit);
