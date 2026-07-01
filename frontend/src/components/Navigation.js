import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { FiHome, FiTrendingUp, FiFileText, FiUser, FiLogOut } from 'react-icons/fi';

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-2xl font-bold text-blue-600">💰 Expenses App</Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-blue-600">
              <FiHome className="mr-2" /> Dashboard
            </Link>
            <Link to="/expenses" className="flex items-center text-gray-600 hover:text-blue-600">
              <FiTrendingUp className="mr-2" /> Expenses
            </Link>
            <Link to="/reports" className="flex items-center text-gray-600 hover:text-blue-600">
              <FiFileText className="mr-2" /> Reports
            </Link>
            <Link to="/profile" className="flex items-center text-gray-600 hover:text-blue-600">
              <FiUser className="mr-2" /> {user?.name}
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-red-600"
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;