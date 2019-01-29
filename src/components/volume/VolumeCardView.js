import React from "react";
import moment from "moment";
import CoverImg from "../CoverImg";
import PropTypes from "prop-types";
import Stars from "../card/Stars";

const Catagories = ({ categories }) => {
  return (
    <p>
      {categories.map(e => (
        <span key={Math.random() * 20}>{e} </span>
      ))}
    </p>
  );
};

Catagories.propTypes = {
  catagories: PropTypes.array
};

const VolumeCardView = props => {
  const {
    title,
    author,
    publishedDate,
    imageLinks,
    averageRating,
    description,
    pageCount,
    previewLink,
    categories
  } = props;
  return (
    <div className="volumeContainer">
      <div className="volumeCardContainer">
        <div>
          <div className="miniHeader">
            <div className="imgWrapper">
              <CoverImg imageLinks={imageLinks} maxRes={true} />
            </div>
            <div className="titleInfo">
              <h5>{title}</h5>
              <p>{author}</p>
              <p>Published: {moment(publishedDate).format("Y")}</p>
              <p>{pageCount} pages</p>
              <Catagories categories={categories} />
              {averageRating && <Stars averageRating={averageRating} />}
            </div>
          </div>
          <div className="description">
            <p dangerouslySetInnerHTML={{ __html: `${description}` }} />
          </div>
          <div>
            <a href={previewLink}>Read Preview at Google Books</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeCardView;
