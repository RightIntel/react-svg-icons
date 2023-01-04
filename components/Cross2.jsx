import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCross2(props = {}) {
  props.name = "Cross2";
  
  return (
    <Lini {...props}>
      <path d="M10.707 10.5l8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-8.646 8.646-8.646-8.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l8.646 8.646-8.646 8.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l8.646-8.646 8.646 8.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646z" />
    </Lini>
  );
}

LiniCross2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
