import React from "react";
import CoverImg from "../CoverImg";
import Stars from "../card/Stars";
import { Link } from "react-router-dom";

const ListCardView = props => {
  return (
    <div className="card">
      <Link to={{ pathname: "/volume", search: `id=${props.id}` }}>
        <div>
          <h4>{props.title}</h4>
          <h5>{`${props.author}`}</h5>
          <div className="thumbnailContainer">
            <CoverImg imageLinks={props.imageLinks} maxRes={false} />
          </div>
          <div className="stars">
            {props.averageRating && (
              <Stars averageRating={props.averageRating} />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListCardView;
