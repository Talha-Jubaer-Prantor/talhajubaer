import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <ul className="nav justify-content-center">
  
  <li className="nav-item">
    <a style={{"color":"white"}} className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a style={{"color":"white"}} className="nav-link" href="/">Talha Jubaer Prantor</a>
  </li>
  <li className="nav-item">
    <a style={{"color":"white"}} className="nav-link" href='/'>Info</a>
  </li>
  
</ul>
        </div>
    );
};

export default Header;