import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default class Stars extends React.Component {
  render() {
    const { averageRating } = this.props;
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
  }
}
