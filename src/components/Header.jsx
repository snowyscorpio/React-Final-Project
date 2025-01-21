import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images//LogoFlowerShop.png';


function Header() {
  return (
    <div>
      <div className='head-menu'>

        <nav>
          <ul className='menu'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'menu-item active' : 'menu-item'
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'menu-item active' : 'menu-item'
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'menu-item active' : 'menu-item'
                }>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <img src={logo} alt="store's logo" className="logo-small" />
        </div>
      </div>

    </div>

  );
}

export default Header;
