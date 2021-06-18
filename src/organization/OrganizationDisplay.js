import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

class OrganizationDisplay extends Component {

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
        console.log(this.state)
        const {item} = this.state;
        let id = item.organizationId;
        console.log(id)
        await fetch(`/api/organization/${id}`, {
            method: 'GET',
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
        const title = <h2>{'View Organization'}</h2>;

        return <div>
            <Navbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="organizationName">Name</Label>
                        <Input type="text" name="organizationName" id="organizationName" value={item.organizationName || ''}
                               autoComplete="organizationName"/>

                        <Label for="organizationNotes">Notes</Label>
                        <Input type="text" name="organizationNotes" id="organizationNotes" value={item.organizationNotes || ''}
                               autoComplete="organizationNotes"/>

                        <Label for="organizationPurpose">Purpose</Label>

                        <Input type="text" name="organizationPurpose" id="organizationPurpose" value={item.organizationPurpose || ''}
                               autoComplete="organizationPurpose"/>

                    </FormGroup>
                    <FormGroup>
                        <Button color="success" tag={Link} to="/organization">Return</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(OrganizationDisplay);
