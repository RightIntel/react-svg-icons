import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCheck(props = {}) {
  props.name = "Check";
  
  return (
    <Lini {...props}>
      <path d="M5.5 17.5c-0.128 0-0.256-0.049-0.354-0.146l-5-5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4.646 4.646 13.646-13.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-14 14c-0.098 0.098-0.226 0.146-0.354 0.146z" />
    </Lini>
  );
}

LiniCheck.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
