import React from 'react';
import { Link } from 'react-router-dom';
import './assets/CSS/Navbar.css';

const Navbar = () => (
  <>
    <div className="top">
      <h1>Math Whizz!!</h1>
      <div className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/calculator">Calculator</Link>
        <Link className="link" to="/quote">Quote</Link>
      </div>
    </div>
  </>
);

export default Navbar;
