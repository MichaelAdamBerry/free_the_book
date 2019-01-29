import React from "react";
import PropTypes from "prop-types";

export default class CoverImg extends React.Component {
  state = { src: "", noImage: false };

  static propTypes = {
    maxRes: PropTypes.bool.isRequired
  };

  getImgSrc = () => {
    //place holder if no image. Else if maxRes is true, highest resolution img, else lowest resolution
    const { imageLinks, maxRes } = this.props;
    if (!imageLinks) {
      return "http://www.lse.ac.uk/International-History/Images/Books/NoBookCover.png";
    } else {
      const imgArr = Object.keys(imageLinks);
      const key = maxRes === true ? imgArr[imgArr.length - 1] : imgArr[0];
      return imageLinks[key];
    }
  };
  render() {
    const src = this.getImgSrc();
    return <img src={src} alt="book cover" />;
  }
}
