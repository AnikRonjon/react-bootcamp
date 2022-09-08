import React from "react";
import PropTypes from 'prop-types'
import Image from "../assets/picture/card-img.png";

const Card = ({imgLink, btnLink, title, text}) => {
  return (
    <>
      <div className="col-4 g-4">
        <div className="card">
          <img
            src={imgLink}
            alt="product-img"
            style={{ height: 200, weight: 200 }}
            className="img-thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href={btnLink} className="btn btn-secondary">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  imgLink: Image,
  title: "Businessman",
  text: "You wanna be one of them.",
  btnLink: "https://google.com"
}


export default Card;
