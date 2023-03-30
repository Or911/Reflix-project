import { Link } from "react-router-dom";

export default function NavBar({userName}){

    return(
      <div className="navBar">
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/catalog"><button>Catalog</button></Link>
        </div>
        <div>
            <h3 className="userName"><span>hi </span>{userName}</h3>
        </div>
      </div>
    )
}