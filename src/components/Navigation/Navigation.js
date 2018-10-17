import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

class Navigation extends Component {
  renderPrevArrow() {
    const { total, current, onClickPrev } = this.props;

    if (current > 0) {
      return <button onClick={onClickPrev}>Prev</button>;
    }

    return null;
  }
  renderNextArrow() {
    const { total, current, onClickNext } = this.props;
    if (current < total - 1) {
      return <button onClick={onClickNext}>Next</button>;
    }
    return null;
  }

  render() {
    return (
      <div id="navigation">
        {this.renderPrevArrow()}
        {this.renderNextArrow()}
      </div>
    );
  }
}

Navigation.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
};

export default Navigation;
