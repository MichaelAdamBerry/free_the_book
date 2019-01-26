import React from "react";

class CoverImg extends React.Component {
  state = { src: "", noImage: false };

  getSrc = () => {
    const { volumeInfo } = this.props;
    if (!volumeInfo.imageLinks) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KU_zDyZNz9WZd-rIoe5lKKJoXBLgdPnCEFqFWhf_-2i9iKds";
    } else {
      const { imageLinks } = volumeInfo;
      const imgArr = Object.keys(imageLinks);
      console.log("imageLink keys", imgArr);
      const key = imgArr[imgArr.length - 1];
      return imageLinks[key];
    }
  };
  render() {
    const src = this.getSrc();

    return <img src={src} alt="book cover" />;
  }
}

export default CoverImg;
