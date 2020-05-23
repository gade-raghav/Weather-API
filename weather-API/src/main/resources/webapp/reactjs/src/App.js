import React from 'react';
import './App.css';
import {Container, Row,Col} from 'react-bootstrap';
import Navigationbar from "./components/Navigationbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Favourite from "./components/Favourite";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
function App() {
  const marginTop = {
    marginTop:"20px"
  }


  return (
  <Router>
   <Navigationbar/>
   <Container>
     <Row>
       <Col lg={12} style={marginTop}>
         <Switch>
           <Route path="/" exact component={Welcome}/>
           <Route path="/current" exact component={Current}/>
           <Route path="/forecast" exact component={Forecast}/>
           <Route path="/favourite" exact component={Favourite}/>
           <Route path="/search" exact component={Search}/>
         </Switch>
    </Col>
     </Row>

   </Container>
   <Footer/>
  </Router>
  );
}

export default App;
