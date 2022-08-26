import React from 'react';

import About from '../About/About';
import AjLogo32x32 from '../../images/favicon-32x32.png';
import { Link } from 'react-router-dom';

const Footer = ({}) => {
  return (
    <footer>
      <img src={AjLogo32x32} />
      <p>&copy; 2022 arnold.rip</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
