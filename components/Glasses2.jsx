import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniGlasses2(props = {}) {
  props.name = "Glasses2";
  
  return (
    <Lini {...props}>
      <path d="M19.5 9h-0.627c-0.445-1.723-2.013-3-3.873-3-1.668 0-3.101 1.027-3.7 2.482-0.35-0.3-0.804-0.482-1.3-0.482s-0.95 0.182-1.3 0.482c-0.599-1.455-2.032-2.482-3.7-2.482-1.86 0-3.428 1.277-3.873 3h-0.627c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5c0 2.206 1.794 4 4 4s4-1.794 4-4c0-0.551 0.449-1 1-1s1 0.449 1 1c0 2.206 1.794 4 4 4s4-1.794 4-4h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM5 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM15 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </Lini>
  );
}

LiniGlasses2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
