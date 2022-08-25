import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export const Header = ({ title, onAdd, showAdd }) => {
  // const clickHandler = () => {
  //   console.log('click header');
  // };

  return (
    <header className="header">
      <h1>{title}</h1>

      {/* <Button text="Add" onClick={clickHandler} /> */}
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'taskSTACK',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
