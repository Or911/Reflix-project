import CardMovie from "../components/CardMovie";
import { MOVIES } from "../mokData";
export default function Catalog(props) {
  let rented = props.userData.moviesID;
  return (
    <>
      <h5>Rented:</h5>
      <div className="catalogSection">
        {rented.map((movieID, i) => (
          <CardMovie key={i} movie={MOVIES[movieID]} />
        ))}
      </div>
      <h5>Catalog:</h5>
      <div className="catalogSection">
        {MOVIES.map((m, i) => (
          <CardMovie key={i} movie={m} eventonclick={props.eventonclick} />
        ))}
      </div>
    </>
  );
}
