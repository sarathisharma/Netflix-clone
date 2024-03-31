import React from 'react'
import logo from "../../netflixlogo.png"
import {Link} from "react-router-dom"
import {ImSearch} from "react-icons/im"
const Header = () => {
  return (
    <nav className="header">
    
    <img src={logo} alt="logo" />
    <div>
        <Link to="/Home">Home</Link>
        <Link to="/tvshows">TV Show </Link>
        <Link to="/movies">Movies </Link>
        <Link to="/recent">Recently Added </Link>
        <Link to="/mylist">My List </Link>
    </div>
    <ImSearch/>
    </nav>

  )
}

export default Header