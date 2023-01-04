import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniMinus(props = {}) {
  props.name = "Minus";
  
  return (
    <Lini {...props}>
      <path d="M18.5 11h-18c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniMinus.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
