import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    function setActive(params: {isActive: boolean}){
        return params.isActive ? 'nav-link text-danger' : 'nav-link'
    }

    return(
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/admin">Admin</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/settings">Settings</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={setActive}
              to="/contacts">Contacts</NavLink>
          </li>

        </ul>
      </div>
    </nav>
    )
}