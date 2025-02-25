import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/LogoFlowerShop.png';
import logInIcon from '../assets/images/login.png';


function Header() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <header>
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
                ⟡ Home ⟡
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive ? 'menu-item active' : 'menu-item'
                }>
                ⟡ About ⟡
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'menu-item active' : 'menu-item'
                }>
                ⟡ Contact ⟡
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <NavLink to={user ? '/account' : '/login'}>
            <img src={logInIcon} alt="User Icon" className="logIn-logo" />
          </NavLink>
          <img src={logo} alt="store's logo" className="logo-small" />

        </div>
      </div>

    </header>

  );
}

export default Header;
