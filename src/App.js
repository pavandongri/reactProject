import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from 'axios'
import Data from "./components/Data";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";

const App =  () => {

  // const data = await axios('https://assessment.api.vweb.app/rides')
  // console.log(data);

  const[rides,setRides] = useState([]);
  const[user,setUser] = useState({});


  

  useEffect(()=>{

   
    axios.get('https://assessment.api.vweb.app/rides').then(resp => {
     setRides(resp.data);
    // console.log(resp.data);
  
    });
    axios.get('https://assessment.api.vweb.app/user').then(resp => {
     setUser(resp.data);
     //console.log(resp.data);
    });

   

  },[]);

  

  let new_rides = []
  for(let i=0;i<rides.length;i++){
    let ride1 = rides[i];
    let dis = 10000000;
    let s_codes = ride1.station_path;
    for(let j=0;j<s_codes.length;j++){
        let t = Math.abs(s_codes[j] - user.station_code);
        dis = Math.min(dis,t);
    }
    ride1.distance = dis;
    
    new_rides.push(ride1);
  }

  let past_rides=[]
  let upcoming_rides=[]
  let date = new Date("03/01/2022 00:00 AM");
  let current_time = date.getTime();

  function myfunction1(u){
    
      let d = new Date(u.date);
      let t = d.getTime();
      return(t >= current_time)
    
  }

  function myfunction2(u){
    
    let d = new Date(u.date);
    let t = d.getTime();
    return(t < current_time)
  
}

function myfunction3(e1,e2){
  if(e1.distance===e2.distance){
    return -1;
  }
  
  return(e1.distance-e2.distance);
}

  new_rides = new_rides.sort(myfunction3);
  
  upcoming_rides = new_rides.filter(myfunction1)

  past_rides = new_rides.filter(myfunction2)

  let nearest_rides = new_rides;



  return( 
  <Router>
    <Header user={user} />
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to ="/"><h5> Nearest rides   </h5></Link>
            <Link to ="/upcoming"><h5>  Upcoming rides ({upcoming_rides.length}) </h5>  </Link>
            <Link to ="/past"><h5>   Past rides ({past_rides.length})  </h5></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Data rides={nearest_rides}/>}/>
      <Route path="/upcoming" element={<Data rides={upcoming_rides}/>}/>
      <Route path="/past" element={<Data rides={past_rides}/>}/>
    </Routes>
    
  </Router>
  )
}

export default App