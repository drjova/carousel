import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../components/Loading';
import Slide from '../components/Slide';
import fetchImages from '../actions/images';

class Slider extends Component {
  componentDidMount() {
    this.props.dispatch(fetchImages());
  }

  renderImages() {
    const { images } = this.props;
    return images.map((image, index) => (
      <Slide image={image} width={300} height={300} key={index} />
    ));
  }

  renderNavigation() {}

  render() {
    const { loading } = this.props;
    if (loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        {this.renderNavigation()}
        {this.renderImages()}
      </div>
    );
  }
}

Slider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  images: PropTypes.arrayOf(PropTypes.string),
};

Slider.defaultProps = {
  images: [],
};

const mapStateToProps = state => ({
  loading: state.images.loading,
  images: state.images.data,
  error: state.images.error,
});
const dispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  dispatchToProps
)(Slider);
