import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'
import Search from '../../assets/icons/Search.svg'
import Heart from '../../assets/icons/Heart.svg'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <Link to='/'>
        <img src={Logo} alt="ShowFlix" />
      </Link>
      <Link>
        <span className='bar-icons search'><img className='searchIcon' src={Search} alt='Search' /></span>
        <span className='searchText'>Search</span>
      </Link>
      <Link>
        <span className='bar-icons'><img className='heartIcon' src={Heart} alt='Search' /></span>
        <span className='watchlistText'>Watchlist</span>
      </Link>
    </div>
  );
}


export default SideBar;