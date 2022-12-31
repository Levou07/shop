import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

import logo from '../../img/logo.png'

function Header() {
  const [active, setActive] = useState(0)

  return (
    <div className='header'>
      <Link to="/" className='logo'>
        <img src={logo} alt="logo" />
      </Link>
      <ul className='header-list'>
        <li className={active == 0 ? 'header-item active' : 'header-item'} onClick={(e)=> setActive(e.target.id)} id='0'>
          <Link id='0'>
            <i className="bi bi-house-door" id='0'></i>
          </Link>
        </li>
        <li className={active == 1 ? 'header-item active' : 'header-item'} onClick={(e)=> setActive(e.target.id)} id='1'>
          <Link id='1'>
            <i className="bi bi-gear-wide-connected" id='1'></i>
          </Link>
        </li>
        <li className={active == 2 ? 'header-item active' : 'header-item'} onClick={(e)=> setActive(e.target.id)} id='2'>
          <Link id='2'>
            <i className="bi bi-pie-chart" id='2'></i>
          </Link>
        </li>
        <li className={active == 3 ? 'header-item active' : 'header-item'} onClick={(e)=> setActive(e.target.id)} id='3'>
          <Link id='3'>
            <i className="bi bi-envelope" id='3'></i>
          </Link>
        </li>
        <li className={active == 4 ? 'header-item active' : 'header-item'} onClick={(e)=> setActive(e.target.id)} id='4'>
          <Link id='4'>
            <i className="bi bi-bell" id='4'></i>
          </Link>
        </li>
        <li className={active == 5 ? 'header-item active' : 'header-item'} onClick={(e)=> setActive(e.target.id)} id='5'>
          <Link id='5'>
            <i className="bi bi-gear" id='5'></i>
          </Link>
        </li>
      </ul>
      <button className="logOut" id='6'>
        <i className="bi bi-box-arrow-right"></i>
      </button>
    </div>
  )
}

export default Header