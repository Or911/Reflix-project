import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes,  } from 'react-router-dom';
import Landing from './page/Landing';
import Catalog from './page/Catalog';
import NavBar from './components/NavBar';
import DescriptionMovie from './page/DescriptionMovie';



function App() {
  const [users , updateUsers] = useState({
    usersData:{
      Or:{name: "Or" ,coins:100 , moviesID:[]},
      Ameer: {name: "Ameer" ,coins:100 , moviesID:[]},
      Lotem: {name: "Lotem" ,coins:100 , moviesID:[]},
      Aiman: {name: "Aiman" ,coins:100 , moviesID:[]}
    },
      userConnected:"Or"
  })
  
  function selectUser(name){
    updateUsers({...users ,userConnected:name})
  }
  function addMovieToUser(id){
    if(users.usersData[users.userConnected].moviesID.some(m => m == id )){
      alert('You have already added this movie')
      return
    }
    if(!coinsCalculation('subtract')){
      alert(`you don't have enough coins`)
      return}
    let usersUpdated = {...users}
    usersUpdated.usersData[users.userConnected].moviesID.push(id)
    updateUsers(usersUpdated)
  }
  function deleteMovieToUser(id){
    let usersUpdated = {...users}
    let UpdatedMovieList = usersUpdated.usersData[users.userConnected].moviesID.filter(i=> i !== id)
    usersUpdated.usersData[users.userConnected].moviesID = UpdatedMovieList
    updateUsers(usersUpdated)
    coinsCalculation('add')
  }
  
  function coinsCalculation(operation){
    let movievValue = 30
      let user = {...users}
      if(operation === "subtract"){
        if (user.usersData[user.userConnected].coins >= movievValue ){
          user.usersData[user.userConnected].coins -= movievValue
          return true
        }
      }
      if(operation === "add"){
        user.usersData[user.userConnected].coins += movievValue
      }
      updateUsers(user)
  }

  return (
    <Router>
      <NavBar user={users.usersData[users.userConnected]}/>
      <Routes>
        <Route path="/" element={<Landing eventonclick={selectUser}/>} />
        <Route path="/catalog" element={<Catalog userData={users.usersData[users.userConnected]} addMovie={addMovieToUser} deleteMovie={deleteMovieToUser}/>} />
        <Route path='/catalog/:id' element={<DescriptionMovie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
