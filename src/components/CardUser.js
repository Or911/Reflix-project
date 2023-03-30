import { Link } from 'react-router-dom'
import './CardUser.css'
export default function CardUser({user , eventonclick}){
    function selectUser(){
        eventonclick(user.name)
        
    }
    return(
        <Link to='/catalog'><div className={`userCard ${user.img}`} onClick={selectUser}>
            <img src="" alt="img"/>
            <p>{user.name}</p>
        </div></Link>
    )
}