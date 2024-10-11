import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  const handleLogout = () => {
    // Remove authentication flag from localStorage
    localStorage.removeItem('isAuthenticated');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Roxana</div>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-300 border-b-2 border-yellow-300'
                  : 'text-white hover:text-yellow-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-300 border-b-2 border-yellow-300'
                  : 'text-white hover:text-yellow-300'
              }
            >
              About
            </NavLink>
          </li>
          {!isAuthenticated ? (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-300 border-b-2 border-yellow-300'
                    : 'text-white hover:text-yellow-300'
                }
              >
                Login
              </NavLink>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-yellow-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
