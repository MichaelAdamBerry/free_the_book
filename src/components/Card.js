import React from "react";
import CoverImg from "./CoverImg";
import Stars from "./Stars";
import { Link } from "react-router-dom";

export default function Card({ volume }) {
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
}
