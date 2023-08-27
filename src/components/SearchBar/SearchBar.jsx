import { useRef } from 'react'
import { useMovieSearchContext } from '../../context/MovieSearchContext';
import style from './SearchBar.module.css';


const SearchBar = () => {
  const searchInputRef = useRef();
  const {
    handleSearchQuery
  } = useMovieSearchContext();

  const onSubmitSearchForm = (e) => {
    e.preventDefault();
    if (searchInputRef.current.value.trim() === '') {
      return;
    }

    handleSearchQuery(searchInputRef.current.value);
    searchInputRef.current.value = null;
  }

  return (
    <form onSubmit={onSubmitSearchForm}>
      <input
        className={style['search-bar']}
        type='text' 
        placeholder='Search the movie'
        ref={searchInputRef}
      />
      <button
        className={`${style['search-submit-btn']} ${style.btn}`} 
        type='submit'
      > 
        Submit 
      </button>
    </form>
  
  )
}

export default SearchBar;