import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowReturn(props = {}) {
  props.name = "ArrowReturn";
  
  return (
    <Lini {...props}>
      <path d="M18.5 5c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5h-15.293l4.146-4.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707l5 5c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-4.146-4.146h15.293c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniArrowReturn.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
