import React from "react";
import PropTypes from "prop-types";

//render prop Card should passes props to render prop to be consumed by List and Volume
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: this.props.volume,
      volumeInfo: this.props.volume.volumeInfo
    };
  }

  getProps = () => {
    const volume = this.state.volume;
    const volumeInfo = this.state.volumeInfo;
    return {
      id: volume.id,
      title: volumeInfo.title ? volumeInfo.title : "",
      author: volumeInfo.authors ? volumeInfo.authors[0] : "",
      averageRating: volumeInfo.averageRating ? volumeInfo.averageRating : "",
      imageLinks: volumeInfo.imageLinks ? volumeInfo.imageLinks : ""
    };
  };
  render() {
    return this.props.render({ props: this.getProps() });
  }
}

Card.propTypes = {
  volume: PropTypes.object.isRequired
};

export default Card;
