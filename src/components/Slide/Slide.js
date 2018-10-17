import React from 'react';
import PropTypes from 'prop-types';

import './Slide.css';

const Slide = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} />
      <h3>Title</h3>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Slide;
