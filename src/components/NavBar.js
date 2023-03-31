import { Link } from "react-router-dom";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useState } from "react";


export default function NavBar({user}){
    return(
      <div className="navBar">
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/catalog"><button>Catalog</button></Link>
        </div>
        <div>
            <h3 className="userName"><span>hi </span>{user.name}</h3>
            <div><h4>Budget: <span>{user.coins}</span> <CurrencyExchangeIcon fontSize='small'/> </h4></div>
        </div>
      </div>
    )
}