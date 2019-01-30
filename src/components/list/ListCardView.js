import React from "react";
import CoverImg from "../CoverImg";
import Stars from "../card/Stars";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function CardHeader({ title, author }) {
  return (
    <>
      {" "}
      <h4 data-testid="bookTitle">{title}</h4>
      <h5 data-testid="bookAuthor">{author}`}</h5>
    </>
  );
}

const ListCardView = props => {
  return (
    <div className="card">
      <Link to={{ pathname: "/volume", search: `id=${props.id}` }}>
        <div>
          <CardHeader title={props.title} author={props.author} />
          <div className="thumbnailContainer">
            <CoverImg imageLinks={props.imageLinks} maxRes={false} />
          </div>
          <div className="stars">
            {!props.averageRating === false && (
              <Stars averageRating={props.averageRating} />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

ListCardView.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  averageRating: PropTypes.number
};

export default ListCardView;
