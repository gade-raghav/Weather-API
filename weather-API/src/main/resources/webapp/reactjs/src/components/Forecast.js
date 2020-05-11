import React, {Component} from 'react';
import { Card,Form,Button,Col  } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class Forecast extends Component {
    
    constructor(props){
        super(props);
        this.state = { lat:'', lon:'', weather:[] };
        this.submitCity = this.submitCity.bind(this);
        this.latChange = this.latChange.bind(this);
        this.lonChange = this.lonChange.bind(this);
    
    }

    submitCity(event) {
        console.log("lon=",this.state.lon);
        
        axios.get('http://localhost:8080/weather/forecast/',{
            params: {
                lat: this.state.lat,
                lon: this.state.lon
            }
        })
        .then(response => console.log(response.data));
        event.preventDefault();
    }

    latChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    lonChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faCloud}/> Forecast Weather</Card.Header>
                <Form onSubmit={this.submitCity} id="cityFormId">
                    <Card.Body>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control required
                            type="text"
                            name="lat"
                            value={this.state.lat}
                            onChange={this.latChange}
                            className="bg-dark text-white"
                            placeholder="Enter lat" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Longitude</Form.Label>
                            <Form.Control required
                            type="text"
                            name="lon"
                            value={this.state.lon}
                            onChange={this.lonChange}
                            className="bg-dark text-white"
                            placeholder="Enter lon" />
                    </Form.Group>
                    </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                        Submit
                    </Button>
                    </Card.Footer>
                </Form>
            </Card>


        );
    }
}