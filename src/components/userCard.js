import React from "react";
import PropTypes from "prop-types";
import Utils from "../utils/utils";

const UserCard = ({ userName, month, position, photoId }) => {
  const workTime = Utils.convertMonthTime(month);
  return (
    <div className="card mb-3">
      <div className="align-items-center d-flex flex-column">
        <img
          src={photoId ? `/photos/${photoId}.jpeg` : `${"/person.jpg"}`}
          alt="card1"
          className="card-img-top w-75"
        />
      </div>

      <div className="align-items-center d-flex flex-column">
        <h6 className="card-title">{userName}</h6>
        <div className="descriptionBox">
          <p className="card-text ">{position}</p>
        </div>
      </div>
      <div className="align-items-center card-footer d-flex flex-column">
        <small className="text-muted">{workTime}</small>
      </div>
    </div>
  );
};
UserCard.propTypes = {
  userName: PropTypes.string,
  month: PropTypes.number,
  position: PropTypes.string,
  photoId: PropTypes.number,
};

UserCard.defaultProps = {
  userName: " ",
  month: null,
  position: " ",
  photoId: null,
};
export default UserCard;
