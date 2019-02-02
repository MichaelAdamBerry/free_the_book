import React from "react";
import moment from "moment";
import CoverImg from "../CoverImg";
import PropTypes from "prop-types";
import Stars from "../card/Stars";
import { Spring, config, animated as a } from "react-spring";

class CardFlipper extends React.Component {
  state = { flipped: false };

  handleClick = () => {
    this.setState(prevState => ({ flipped: !prevState.flipped }));
  };

  render() {
    const { description, previewLink, imageLinks } = this.props;
    const { flipped } = this.state;
    return (
      <div onClick={this.handleClick} className="imgWrapper">
        <Spring
          config={key =>
            key === "opacity"
              ? { tension: "120", friction: "120" }
              : config.slow
          }
          to={{
            opacity: `${flipped ? "1" : "0"}`,
            transform: `perspective(600px) rotateY(${
              flipped ? "180" : "0"
            }deg)`,
            backgroundColor: `${flipped ? "#2f2f2f" : "#f7fbfc"}`
          }}>
          {({ opacity, transform }) => (
            <>
              <a.div
                className="c front"
                style={{
                  opacity: `${flipped ? "0" : "1"}`,
                  transform
                }}>
                <Front imageLinks={imageLinks} />
              </a.div>
              <a.div
                className="c back"
                style={{
                  opacity,
                  transform
                }}>
                <Back description={description} previewLink={previewLink} />
              </a.div>
              <a.div className="c" style={{ opacity }}>
                <p>{description}</p>
              </a.div>
            </>
          )}
        </Spring>
      </div>
    );
  }
}

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

const Front = ({ imageLinks }) => {
  return <CoverImg imageLinks={imageLinks} maxRes={true} width={"350px"} />;
};

const Back = ({ description, previewLink }) => {
  return <div className="back" />;
};

function VolumeCardView(props) {
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
      <div>
        <div className="miniHeader">
          <div className="titleInfo">
            <h5>{title}</h5>
            <p>{moment(publishedDate).format("Y")}</p>
            <div>
              {averageRating && <Stars averageRating={averageRating} />}
            </div>
          </div>

          <div className="volumeAuthor">
            <h4>{author}</h4>
          </div>
          <div className="titleMeta">
            <p>{pageCount} pages</p>
            {categories && <Catagories categories={categories} />}
          </div>
          <div>
            <CardFlipper
              imageLinks={imageLinks}
              description={description}
              previewLink={previewLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolumeCardView;
