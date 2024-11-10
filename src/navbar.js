
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { path: '/home', label: 'Home' },
    { path: '/bouquets', label: 'Bouquets' },
    { path: '/fleurs', label: 'Fleurs' },
    { path: '/moncompte', label: 'Mon Compte' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Fleurs-bnk</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {menuItems.map(item => (
              <li className="nav-item" key={item.path}>
                <Link className="nav-link" to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
