import React from "react";
import PropTypes from "prop-types";

export default class CoverImg extends React.Component {
  state = { src: "", noImage: false };

  static propTypes = {
    maxRes: PropTypes.bool.isRequired
  };

  getSrc = () => {
    //place holder if no image. Else if maxRes is true, highest resolution img, else lowest resolution
    const { imageLinks, maxRes } = this.props;
    if (!imageLinks) {
      return "http://www.lse.ac.uk/International-History/Images/Books/NoBookCover.png";
    } else {
      const imgArr = Object.keys(imageLinks);
      const key = !maxRes ? imgArr[0] : imgArr[imgArr.length - 1];
      const height = !maxRes ? "198px" : "300px";
      return { key: imageLinks[key], height: height };
    }
  };
  render() {
    const src = this.getSrc();
    return (
      <img
        src={src.key}
        alt="book cover"
        style={{ height: src.height, width: "auto" }}
      />
    );
  }
}
