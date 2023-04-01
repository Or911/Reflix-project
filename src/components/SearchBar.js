import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ searchMovie }) {
  function updateText(event) {
    searchMovie(event.target.value);
  }
  return (
  <div className='inputColor'>
  <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search movie" onChange={updateText}/>
<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
  <SearchIcon />
</IconButton>
</div>
  )
}
