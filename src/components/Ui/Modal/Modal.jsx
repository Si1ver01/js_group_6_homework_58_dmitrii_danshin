import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, show, closeHandler, title }) => {
  return (
    <div className={classes.Backdrop}>
      <div className={classes.Modal}>
        <div className={classes.Header}>
          <span className={classes.Close} onClick={closeHandler}>Close</span>
        </div>
        <div className={classes.Main}>
          <h1>{title}</h1>
          <hr />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
