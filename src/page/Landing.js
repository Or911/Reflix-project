import './Landing.css'
import CardUser from "../components/CardUser"

export default function Landing({eventonclick}){
    let users = [
    {name:"Or" , img:"red"},
     {name:"Ameer" , img:"blue"} ,
     {name:"Lotem" , img:'../img/5183000.jpg'} ,
     {name:"Aiman" , img:"red"}
    ]
    return(
        <div className='landingPage'>
            <h2>WHO'S WATCHING ?</h2>
            <div className="usersContainer">
              { users.map((user , index)=> <CardUser key={index} user={user} eventonclick={eventonclick}/> )}  
            </div>
        </div>
    )
}