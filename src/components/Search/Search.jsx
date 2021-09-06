import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './search.css'
import BlackSearch from '../../assets/icons/BlackSearch.svg'
import { setSearchText } from '../../redux/movie/movie.actions'
import SearchIcon from '../../assets/icons/WhiteSearch.svg'


const Search = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(setSearchText(text));
    setText('');
  }
  return (
    <form className='searchForm' onSubmit={submitForm}>
      <i><img src={BlackSearch} alt="Search" /></i>
      <input value={text} onChange={e => setText(e.target.value)} type="search" placeholder='Search' />
      <button>Search</button>
      <button className='mobile'><img src={SearchIcon} alt="Search" /></button>
    </form>
  )
}

export default Search