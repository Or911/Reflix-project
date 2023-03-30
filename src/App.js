import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes,  } from 'react-router-dom';
import Landing from './page/Landing';
import Catalog from './page/Catalog';
import NavBar from './components/NavBar';



function App() {
  const [users , updateUsers] = useState({
    usersData:{
      Or:{coins:100 , moviesID:[]},
      Ameer: {coins:100 , moviesID:[]},
      Lotem: {coins:100 , moviesID:[]},
      Aiman: {coins:100 , moviesID:[]}
    },
      userConnected:"Or"
  })
  
  function selectUser(name){
    updateUsers({...users ,userConnected:name})
    
  }
  function addMovieToUser(id){
    console.log(id);
    let usersUpdated = {...users}
    usersUpdated.usersData[users.userConnected].moviesID.push(id)
    updateUsers(usersUpdated)
  }
  return (
    <Router>
      <NavBar userName={users.userConnected}/>
      <Routes>
        <Route path="/" element={<Landing eventonclick={selectUser}/>} />
        <Route path="/catalog" element={<Catalog userData={users.usersData[users.userConnected]} eventonclick={addMovieToUser}/>} />


      </Routes>
    </Router>
  );
}

export default App;
