import { Link } from "react-router-dom";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ButtonBar from "./Button";


export default function NavBar({user}){
    return(
      <div className="navBar">
        <div>
            <Link to="/" className='buttonBar'><ButtonBar txt={"Home"}/></Link>
            <Link to="/catalog" className='buttonBar'><ButtonBar txt={"Catalog"}/></Link>
        </div>
        <div className="reflixName"><span>R </span><span>E </span><span>F </span><span>L </span><span>I </span><span className="X">X </span></div>
        
            <h3 className="userName"><span>hi </span>{user.name}</h3>
            <div><h4>Budget: <span>{user.coins}</span> <CurrencyExchangeIcon fontSize='small'/> </h4></div>
        
      </div>
    )
}