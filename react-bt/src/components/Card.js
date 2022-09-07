import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-4 g-4">
        <div className="card">
          <img
            src={props.imgLink}
            alt="product-img"
            style={{ height: 200, weight: 200 }}
            className="img-thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.btnLink} className="btn btn-secondary">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
