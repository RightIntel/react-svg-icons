import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowUp(props = {}) {
  props.name = "ArrowUp";
  
  return (
    <Lini {...props}>
      <path d="M9.146 0.646l-6 6c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l5.146-5.146v16.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-16.293l5.146 5.146c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354l-6-6c-0.195-0.195-0.512-0.195-0.707 0z" />
    </Lini>
  );
}

LiniArrowUp.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
