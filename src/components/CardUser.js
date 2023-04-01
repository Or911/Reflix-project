import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './CardUser.css'
export default function CardUser({user , eventonclick}){
    function selectUser(){
        eventonclick(user.name)
        
    }
    return(
        <Link to='/catalog'><div className={`userCard ${user.img}`} onClick={selectUser}>
            <AccountCircleIcon fontSize='large'/>
            <h4 className='nameUser'>{user.name}</h4>
        </div></Link>
    )
}