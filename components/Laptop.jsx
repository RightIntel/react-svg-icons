import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniLaptop(props = {}) {
  props.name = "Laptop";
  
  return (
    <Lini {...props}>
      <path d="M3.5 14h13c0.827 0 1.5-0.673 1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5h-13c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5zM3 4.5c0-0.276 0.224-0.5 0.5-0.5h13c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5h-13c-0.276 0-0.5-0.224-0.5-0.5v-8z" />
      <path d="M19.5 15h-19c-0.276 0-0.5 0.224-0.5 0.5v1c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-1c0-0.276-0.224-0.5-0.5-0.5zM18.5 17h-17c-0.276 0-0.5-0.224-0.5-0.5v-0.5h18v0.5c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniLaptop.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
