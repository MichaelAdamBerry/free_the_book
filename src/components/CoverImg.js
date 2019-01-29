import React from "react";
import PropTypes from "prop-types";

export default class CoverImg extends React.Component {
  state = { src: "", noImage: false };

  static propTypes = {
    volumeInfo: PropTypes.object.isRequired,
    maxRes: PropTypes.bool.isRequired
  };

  getImgSrc = () => {
    //place holder if no image. Else if maxRes is true, highest resolution img, else lowest resolution
    const { volumeInfo, maxRes } = this.props;
    if (!volumeInfo.imageLinks) {
      return "http://www.lse.ac.uk/International-History/Images/Books/NoBookCover.png";
    } else {
      const { imageLinks } = volumeInfo;
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
