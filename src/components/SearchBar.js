export default function SearchBar({ searchMovie }) {
  function updateText(event) {
    searchMovie(event.target.value);
  }
  return <input type="text" onChange={updateText} />;
}
