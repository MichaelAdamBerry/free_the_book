import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Stars = ({ averageRating }) => {
  //new Array with length of averageRating in whole numbers
  //Maps array to render Star icon, then renders Half Star if const partial is true
  const full = Number.parseInt(averageRating);
  const partial = Number(averageRating) % 1 > 0;
  return (
    <>
      {[...Array(full)].map((el, ind) => (
        <span>
          <FontAwesomeIcon icon={faStar} style={{ color: "#e2c93d" }} />
        </span>
      ))}
      <span>
        {partial && (
          <FontAwesomeIcon icon={faStarHalf} style={{ color: "#e2c93d" }} />
        )}
      </span>
    </>
  );
};

Stars.propTypes = {
  averageRating: PropTypes.string.isRequired
};

export default Stars;
