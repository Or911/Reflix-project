import { useParams } from "react-router-dom"
import { MOVIES } from "../mokData";
import './DescriptionMovie.css'
export default function DescriptionMovie(){
    let {id}= useParams()
    let movie =  MOVIES.find(m => m.id == id)
    return(
    <div className="descriptionPage">
        <div className="descriptionCardMovies">
            <h1>{movie.title} ({movie.year})</h1>
            <img className="descriptionImg" src={movie.img}/>
            <div>
                <h5>Description</h5>
                <p>{movie.descrShort}</p>
            </div>
        </div>
    </div>
    )
}