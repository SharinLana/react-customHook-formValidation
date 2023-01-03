import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = ({ closeModal }) => {
  return <div className="modalOverlay" onClick={closeModal} />;
};

const ModalWindow = ({ modalObj, closeModal }) => {
  return (
    <div className="modalContainer">
      <h3
        className={`modalMessage ${
          modalObj.message === "Success!" ? "green" : "red"
        }`}
      >
        {modalObj.message}
      </h3>
      <button className="modalBtn" onClick={closeModal}>
        {modalObj.btnText}
      </button>
    </div>
  );
};

const portalElement = document.querySelector("#overlay");

const Modal = ({ modalObj, onCloseModal }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow modalObj={modalObj} closeModal={onCloseModal} />,
        portalElement
      )}
    </>
  );
};

export default Modal;
