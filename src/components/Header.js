import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import AuthService from '../services/auth.service';
import { toast } from 'react-toastify';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="bg-indigo-600 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold flex items-center space-x-2">
          <span className="text-yellow-400">🌟</span> {/* Optional logo icon */}
          <span>EventSphere</span> {/* Logo name */}
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/events" className="hover:text-yellow-300">Events</Link>
          {user ? (
            <>
              <Link to="/create-event" className="hover:text-yellow-300">Create Event</Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-300">Login</Link>
              <Link 
                to="/register" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
