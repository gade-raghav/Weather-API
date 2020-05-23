import React, {Component} from 'react';
import { Card,Form,Button,Col  } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class Search extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name:'',
            favourite: []
                
            };
        this.nameChange = this.nameChange.bind(this);
        this.submitName = this.submitName.bind(this);
    
    }

    submitName(event) {
        console.log("Name=",this.state.name);
        axios.get('http://localhost:8080/search-name/',{
            params: {
                name: this.state.name
            }
        })
        .then(response => response.data)
        .then((data) =>{
            this.setState({favourite: data})
        }
        
        
        );

        
        
        event.preventDefault();
    }

    nameChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>
                    <FontAwesomeIcon icon={faSearch}/> Search 
                </Card.Header> 
                <Form onSubmit={this.submitName} id="nameFormId"> 
                <Card.Body> 
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Name </Form.Label>
                        <Form.Control required autoComplete="off"
                            type="text" 
                            name="name"
                            value={this.state.name}
                            onChange={this.nameChange}
                            className="bg-dark text-white"
                            placeholder="Enter Name to search for favourite city" />
                    </Form.Group>
                    </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                            Search
                    </Button>
                    </Card.Footer>
                    <Card className="border border-dark bg-dark text-white"> 
                        <Card.Header>
                        <strong>Favourite City: </strong> {this.state.favourite.favourite}
                        </Card.Header>
                    </Card>

                    
                </Form>
            </Card>


        );
    }
}