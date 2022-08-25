import React from 'react';

import AjLogo32x32 from '../../images/favicon-32x32.png';

const Footer = ({}) => {
  return (
    <footer>
      <img src={AjLogo32x32} />
      <p>&copy; 2022 arnold.rip</p>
      <a href="/about">About</a>
    </footer>
  );
};

export default Footer;
