import { useState } from "react";
import { MOVIES } from "../mokData";
import CardMovie from "../components/CardMovie";
import SearchBar from "../components/SearchBar";

export default function Catalog(props) {
  const [moviesIDByFilter, setMoviesIDByFilter] = useState(MOVIES.map((m) => m.id));
  
  function rentedMovies() {
    let rentedMoviesID = props.userData.moviesID;
    return rentedMoviesID.filter((m) => moviesIDByFilter.includes(m));
  }

  function filterMovies(text) {
    let filterMovies = MOVIES.filter((m) =>
      m.title.toLowerCase().includes(text.toLowerCase())
    ).map((m) => m.id);
    setMoviesIDByFilter(filterMovies);
  }

  return (
    <>
      <SearchBar searchMovie={filterMovies} />
      <h5>Rented:</h5>
      <div className="catalogSection">
        {rentedMovies().map((movieID, i) => (<CardMovie key={i} movie={MOVIES[movieID]} add={true} deleteMovie={props.deleteMovie} /> ))}
      </div>
      <h5>Catalog:</h5>
      <div className="catalogSection">
        {moviesIDByFilter.map((m, i) => (
          <CardMovie key={i} movie={MOVIES[m]} addMovie={props.addMovie} />
        ))}
      </div>
    </>
  )}
