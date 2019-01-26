import React from "react";

export default class CoverImg extends React.Component {
  state = { src: "", noImage: false };

  getSrc = () => {
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
    const src = this.getSrc();
    return <img src={src} alt="book cover" />;
  }
}
