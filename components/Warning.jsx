import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniWarning(props = {}) {
  props.name = "Warning";
  
  return (
    <Lini {...props}>
      <path d="M18.5 19h-18c-0.178 0-0.342-0.094-0.432-0.248s-0.091-0.343-0.004-0.498l9-16c0.089-0.157 0.255-0.255 0.436-0.255s0.347 0.097 0.436 0.255l9 16c0.087 0.155 0.085 0.344-0.004 0.498s-0.254 0.248-0.432 0.248zM1.355 18h16.29l-8.145-14.48-8.145 14.48z" />
      <path d="M9.5 14c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M9.5 17c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniWarning.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
