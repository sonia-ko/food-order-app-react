import classes from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, children }) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay> {children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
