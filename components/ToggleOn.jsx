import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniToggleOn(props = {}) {
  props.name = "ToggleOn";
  
  return (
    <Lini {...props}>
      <path d="M7 17h6c1.87 0 3.628-0.728 4.95-2.050s2.050-3.080 2.050-4.95c0-1.87-0.728-3.628-2.050-4.95s-3.080-2.050-4.95-2.050h-6c-1.87 0-3.628 0.728-4.95 2.050s-2.050 3.080-2.050 4.95c0 1.87 0.728 3.628 2.050 4.95s3.080 2.050 4.95 2.050zM13 4c3.308 0 6 2.692 6 6s-2.692 6-6 6h-6c-3.308 0-6-2.692-6-6s2.692-6 6-6h6z" />
      <path d="M13 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 2.206 1.794 4 4 4zM13 7c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
    </Lini>
  );
}

LiniToggleOn.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
