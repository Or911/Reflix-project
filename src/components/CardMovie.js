import "./cardMovies.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Link } from "react-router-dom";
export default function CardMovie(props) {
  function addMovieToUser() {
    props.addMovie(props.movie.id);
  }
  function deleteMovieToUser() {
    props.deleteMovie(props.movie.id);
  }

  return (
    <div className="sizeCardsMovies">
      <div className="cardMovies">
        <Link to={`/catalog/${props.movie.id}`}>
          <img className="imgCardMovies" src={props.movie.img} />
        </Link>
        <span className="buttonSelect">
          {props.add ? (
            <RemoveCircleOutlineIcon onClick={deleteMovieToUser} />
          ) : (
            <AddCircleOutlineIcon onClick={addMovieToUser} />
          )}
        </span>
      </div>
    </div>
  );
}
