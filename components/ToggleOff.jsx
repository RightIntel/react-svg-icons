import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniToggleOff(props = {}) {
  props.name = "ToggleOff";
  
  return (
    <Lini {...props}>
      <path d="M13 17h-6c-1.87 0-3.628-0.728-4.95-2.050s-2.050-3.080-2.050-4.95c0-1.87 0.728-3.628 2.050-4.95s3.080-2.050 4.95-2.050h6c1.87 0 3.628 0.728 4.95 2.050s2.050 3.080 2.050 4.95c0 1.87-0.728 3.628-2.050 4.95s-3.080 2.050-4.95 2.050zM7 4c-3.308 0-6 2.692-6 6s2.692 6 6 6h6c3.308 0 6-2.692 6-6s-2.692-6-6-6h-6z" />
      <path d="M7 14c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4c0 2.206-1.794 4-4 4zM7 7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
    </Lini>
  );
}

LiniToggleOff.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
