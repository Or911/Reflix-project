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
    <div className="catalog">
      <SearchBar searchMovie={filterMovies} />
      <h1>Rented:</h1>
      <div className="rentedSection">
        {rentedMovies().map((movieID, i) => (<CardMovie key={i} movie={MOVIES[movieID]} add={true} deleteMovie={props.deleteMovie} /> ))}
      </div>
      <h1>Catalog:</h1>
      <div className="catalogSection">
        {moviesIDByFilter.map((m, i) => (
          <CardMovie key={i} movie={MOVIES[m]} addMovie={props.addMovie} />
        ))}
      </div>
    </div>
  )}
