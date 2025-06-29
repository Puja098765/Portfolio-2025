import React from 'react';
import { FaReact } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const data =[
    {
        label: 'HOME',
        to : '/',
    },
    {
        label: 'ABOUT',
        to : '/about',
    },
    {
        label: 'CONTACT',
        to : '/contact',
    },
    {
        label: 'PORTFOLIO',
        to : '/portfolio',
    },
    {
        label: 'SKILLS',
        to : '/skills',
    },
    {
        label: 'RESUME',
        to : '/resume',
    },
]

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
         <Link to={"/"} className="navbar__container__logo">
         <FaReact size={30} />
         </Link>
        </div>
        <ul className="navbar__container__menu">
            {
                data.map((item, key) =>(
                    <li key={key} className="navbar__container__menu__item">
                        <Link className="navbar__container__menu__item__links" to={item.to}>
                        {item.label}
                        </Link>
                    </li>
                ))
            }

        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
