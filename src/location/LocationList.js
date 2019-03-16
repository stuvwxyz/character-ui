import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

class LocationList extends Component {

    constructor(props) {
        super(props);
        this.state = {location: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/location')
            .then(response => response.json())
            .then(data => this.setState({location: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/location/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedLocation = [...this.state.location].filter(i => i.id !== id);
            this.setState({location: updatedLocation});
        });
    }

    render() {
        if (!auth0Client.isAuthenticated()) return null;

        const {location, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const locationList = location.map(location => {

            return <tr key={location.id}>
                <td style={{whiteSpace: 'nowrap'}}>{location.locationName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{location.locationLocation}</td>
                <td style={{whiteSpace: 'nowrap'}}>{location.locationTerrain}</td>
                <td style={{whiteSpace: 'nowrap'}}>{location.locationNotes}</td>

                <td>
                    <ButtonGroup className="float-right">
                        <Button size="sm" color="success" tag={Link} to={"/location/" + location.locationId}>Details</Button>
                        <Button size="sm" color="primary" tag={Link} to={"/locationedit/" + location.locationId}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(location.locationId)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Navbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/locationedit/new">Add Location</Button>
                    </div>
                    <h3>Location List</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="15%">Name</th>
                            <th width="25%">Where is it located?</th>
                            <th width="30%">Terrain</th>
                            <th width="30%">Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {locationList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default withRouter(LocationList);
