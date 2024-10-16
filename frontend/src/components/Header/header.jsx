import {useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { authContext } from "../../context/AuthContext";

const Links = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Doctors',
  },
  {
    path: '/services',
    display: 'Our Services',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  },
];

const Header = () => {

  const {user, role, token} = useContext(authContext);


  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="">
            <img src={logo} alt="Logo" />
          </div>

          {/* MENU */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {Links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* LOGIN BUTTON */}
          <div className="flex items-center gap-4">
            <h1>{user?.name}</h1>
            <Link to="/login">
              <button className="btn bg-primaryColor py-2 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
