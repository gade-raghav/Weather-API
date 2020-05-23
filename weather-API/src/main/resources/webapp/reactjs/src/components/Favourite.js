import React, {Component} from 'react';
import { Card,Form,Button,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave,faUndo,faStar} from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast'
import axios from 'axios';

export default class Favourite extends Component {


    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.resetFav= this.resetFav.bind(this);
        this.nameChange=this.nameChange.bind(this);
        this.favChange=this.favChange.bind(this);
        this.submitFav=this.submitFav.bind(this)
        
    
    }

    initialState= {

        name:'', favourite:'',favs: [], favourtiee:''
    }

    submitFav(event) {

        var fav ={
            name: this.state.name,
            favourite: this.state.favourite
        };
       

        axios.post("http://localhost:8080/add",fav
        )
            .then(response => {
                if(response.data != null) {
                    this.setState({"show" : true});
                    setTimeout(() => this.setState({"show": false}), 3000);
                    
                    } else {
                        this.setState({"show" : false});
                    }
                });

            
        this.setState(this.initialState);
        event.preventDefault()
    }

    resetFav(event) {

        this.setState(() => this.initialState);
    }

    nameChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    favChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    

    
    

    
render() {
    
        const {name,favourite} = this.state;

        return(

            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast children ={{show:this.state.show, message:"Favourite Saved Successfully."}} />
                </div>
                <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faStar}/> Add Favourties</Card.Header>
                <Form onReset={this.resetFav} onSubmit={this.submitFav} id="cityFormId">
                    <Card.Body>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control required autoComplete="off"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.nameChange}
                            className="bg-dark text-white"
                            placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Favourite City</Form.Label>
                            <Form.Control required autoComplete="off"
                            type="text"
                            name="favourite"
                            value={favourite}
                            onChange={this.favChange}
                            className="bg-dark text-white"
                            placeholder="Enter favourite city" />
                    </Form.Group>
                    </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                       <FontAwesomeIcon icon={faSave}/>Submit
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button size="sm" variant="info" type="reset">
                        <FontAwesomeIcon icon={faUndo}/> Reset 
                    </Button>
                    </Card.Footer>
                    </Form>
                    </Card>

                

            </div>
       )
    }



}