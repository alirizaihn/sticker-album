import React from "react";

const SetCard = () => {
  return (
    <div className="text-center mb-3 card">
      <div className="align-items-center d-flex flex-column">
        <img
          src={`${"/facebook.jpg"}`}
          alt="card1"
          className="card-img-top w-75"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">Sticker Set</h4>
        <div>
          <button className="btn btn-outline-primary">Open</button>
        </div>
      </div>
    </div>
  );
};

export default SetCard;
