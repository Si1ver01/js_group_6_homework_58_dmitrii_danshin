import React from "react";
import classes from "./Alert.module.css";

const Alert = ({ type, children, handler, handlerOn }) => {
  const cls = [classes.Alert, classes[type],handlerOn ? classes.pointer : null];
  return (
    <div className={cls.join(" ")} onClick={handlerOn ? handler : null}>
      {/* {!!handler ? <a onClick={handler}>X</a> : null} */}
      <p>{children}</p>
    </div>
  );
};

export default Alert;
