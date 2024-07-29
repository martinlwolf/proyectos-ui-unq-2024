import React from 'react';
import '../styles/sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import '../icons';
import { explore, following, friends, home, profile, line } from '../icons';
import { Logout } from './buttons/Logout';
import LoginSidebar from './buttons/LoginSidebar';

const Sidebar = () => {
  const isAuthenticated = localStorage.getItem('token') != undefined;
  const id = localStorage.getItem('id');
  const location = useLocation()
  console.log(location)

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className='btn-sidebar' to="/"> 
            <span className="icono">
            {home(location.pathname === "/")}
            </span>
            <p className={location.pathname === "/" ? "c-tiktok" : ""}>For You</p>
          </Link>
        </li>
        <li>
          <Link className='btn-sidebar' to={isAuthenticated ? "/following" : "/form/login"}> 
          <span className="icono">
            {following(location.pathname === "/following")}
          </span>
          <p className={location.pathname === "/following" ? "c-tiktok" : ""}>Following</p>
          </Link>
        </li>
        <li>
          <Link className='btn-sidebar' to={isAuthenticated ? "/friends" : "/form/login"} > 
          <span className="icono">
            {friends(location.pathname === "/friends")}
          </span>
          <p className={location.pathname === "/friends" ? "c-tiktok" : ""}>Friends</p>
        </Link>
        </li>
        <li>
        <Link className='btn-sidebar' to="/explore"> 
            <span className="icono">
              {explore(location.pathname === "/explore")}
            </span>
            <p className={location.pathname === "/explore" ? "c-tiktok" : ""}>Explore</p>
        </Link>
        </li>
        <li>
          <Link className='btn-sidebar' to={isAuthenticated ? `/user/${id}` : "/form/login"} > 
            <span className="icono">
              {profile(location.pathname.includes("/user"))}
            </span>
            <p className={location.pathname.includes("/user") ? "c-tiktok" : ""}>Profile</p>
          </Link>
        </li>
      </ul>
      <span className='line'>
        {line()}
      </span>
      <p>Log in to follow creators, like videos, and view comments.</p>
      
      {isAuthenticated ? 
        <Logout/> :
        <LoginSidebar/>
      }
    </div>
  );
}

export default Sidebar;





