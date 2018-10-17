import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import Slide from '../../components/Slide/Slide';
import Navigation from '../../components/Navigation/Navigation';
import fetchImages from '../../actions/images';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      total: 12,
    };
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchImages());
  }

  clickNext() {
    this.setState({
      current:
        this.state.current < this.state.total
          ? this.state.current + 1
          : this.state.total,
    });
  }

  clickPrev() {
    this.setState({
      current: this.state.current > 1 ? this.state.current - 1 : 0,
    });
  }

  renderImages() {
    const { images } = this.props;
    const displayImage = images[this.state.current];
    return <Slide image={displayImage} key={this.state.current} />;
  }

  renderTitle() {
    return <h1>Carousel Test</h1>;
  }

  render() {
    const { loading, images } = this.props;
    if (loading) {
      return <Loading loading />;
    }
    return (
      <div id="slider">
        {this.renderTitle()}
        <div id="slider-wrapper">{images && this.renderImages()}</div>
        <div id="slider-navigation">
          <Navigation
            onClickPrev={this.clickPrev}
            onClickNext={this.clickNext}
            total={this.state.total}
            current={this.state.current}
          />
        </div>
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
