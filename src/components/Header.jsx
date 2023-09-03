import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const [inp, setInp] =useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.changeLocation(inp);
    }
  return (
    <nav className="navbar navbar-dark bg-dark p-2">
  <span className="navbar-brand mb-0 h1 ">Weather App</span>
  <span> <form>
    
    <input onChange={(e) => {
        console.log(e.target.value)
        setInp(e.target.value)}}/> <button className="btn btn-warning" onClick={(e) => {handleSubmit(e)}}>Go</button>
    </form></span>
</nav>
  )
}

export default Header