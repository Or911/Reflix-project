import './cardMovies.css'
export default function CardMovie(props){
    function addMovieToUser(){
        props.eventonclick(props.movie.id)
    }
    return (
        <div className="cardMovies">
            <img className="imgCardMovies" src={props.movie.img}/>
            <span className='buttonSelect' onClick={addMovieToUser}>+</span>
            
        </div>
    )
}