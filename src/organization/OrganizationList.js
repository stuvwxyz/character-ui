import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

class OrganizationList extends Component {

    constructor(props) {
        super(props);
        this.state = {organization: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/organization')
            .then(response => response.json())
            .then(data => this.setState({organization: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/organization/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedOrganization = [...this.state.organization].filter(i => i.id !== id);
            this.setState({organization: updatedOrganization});
        });
    }

    render() {
        if (!auth0Client.isAuthenticated()) return null;

        const {organization, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const organizationList = organization.map(organization => {

            return <tr key={organization.id}>
                <td style={{whiteSpace: 'nowrap'}}>{organization.organizationName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{organization.organizationNotes}</td>
                <td style={{whiteSpace: 'nowrap'}}>{organization.organizationPurpose}</td>

                <td>
                    <ButtonGroup className="float-right">
                        <Button size="sm" color="success" tag={Link} to={"/organization/" + organization.organizationId}>Details</Button>
                        <Button size="sm" color="primary" tag={Link} to={"/organizationedit/" + organization.organizationId}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(organization.organizationId)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Navbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/organizationedit/new">Add Organization</Button>
                    </div>
                    <h3>Organization List</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="15%">Organization</th>
                            <th width="20%">Notes</th>
                            <th width="20%">Purpose</th>
                        </tr>
                        </thead>
                        <tbody>
                        {organizationList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default withRouter(OrganizationList);
