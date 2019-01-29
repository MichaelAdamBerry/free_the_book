import React from "react";
import CoverImg from "./CoverImg";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardView = ({ volume }) => {
  return (
    <div className="card">
      <Link to={{ pathname: "/volume", search: `id=${volume.id}` }}>
        <div>
          <h4>{volume.volumeInfo.title}</h4>
          <h5>
            {!volume.volumeInfo.authors === false &&
              `by ${volume.volumeInfo.authors[0]}`}
          </h5>
          <div className="thumbnailContainer">
            <CoverImg volumeInfo={volume.volumeInfo} maxRes={false} />
          </div>
          <div className="stars">
            <span>
              {volume.volumeInfo.averageRating && (
                <Stars averageRating={volume.volumeInfo.averageRating} />
              )}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Card = ({ volume }) => {
  return <CardView volume={volume} />;
};

Card.propTypes = {
  volume: PropTypes.object.isRequired
};

export default Card;
