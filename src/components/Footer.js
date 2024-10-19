import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-3">
              <i className="bi bi-calendar-event me-2"></i>
              Event Manager
            </h2>
            <p className="text-gray-200">Bringing people together through amazing events.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                  <i className="bi bi-chevron-right me-1"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                  <i className="bi bi-chevron-right me-1"></i> Create Event
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                  <i className="bi bi-chevron-right me-1"></i> Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                  <i className="bi bi-chevron-right me-1"></i> Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
            <p className="mb-1">
              <i className="bi bi-envelope me-2"></i> info@eventmanager.com
            </p>
            <p>
              <i className="bi bi-telephone me-2"></i> (123) 456-7890
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-100 transition-colors duration-200">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="text-center">
          <small className="text-gray-300">
            <i className="bi bi-c-circle me-1"></i> 2023 Event Manager. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
