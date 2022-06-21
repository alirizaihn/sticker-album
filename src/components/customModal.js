import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="align-items-center d-flex flex-column">
          <h4>{props.title}</h4>
          <h4>{props.title2}</h4>
        </div>
        {props.children}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};
CustomModal.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string,
};

CustomModal.defaultProps = {
  header: "",
  title: "",
  title2: "",
};
export default CustomModal;
