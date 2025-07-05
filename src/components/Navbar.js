import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showBackButton, setShowBackButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && location.pathname !== '/') {
        setShowBackButton(true);
      } else {
        setShowBackButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className="navbar">
      <div className="logo">Surendar G</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right Section */}
      <div className="right-section">
        {showBackButton && (
          <button className="back-button" onClick={goBack} title="Go Back">
            ←
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
