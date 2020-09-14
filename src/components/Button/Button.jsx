import React from "react";
import { classNames } from "../../utils/classNames";
import "./Button.css";

export const ButtonKind = {
  DEFAULT: "default",
  DANGER: "danger",
  INFO: "info",
};

export const Button = ({
  children,
  kind = ButtonKind.DEFAULT,
  isBig,
  onClick,
  ...other
}) => (
  <button
    {...other}
    onClick={onClick}
    className={classNames("btn", `btn-${kind}`, { "btn-big": isBig })}
  >
    {children}
  </button>
);
