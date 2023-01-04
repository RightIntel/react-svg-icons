import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniChevronDown(props = {}) {
  props.name = "ChevronDown";
  
  return (
    <Lini {...props}>
      <path d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z" />
    </Lini>
  );
}

LiniChevronDown.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
