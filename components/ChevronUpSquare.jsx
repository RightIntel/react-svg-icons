import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniChevronUpSquare(props = {}) {
  props.name = "ChevronUpSquare";
  
  return (
    <Lini {...props}>
      <path d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z" />
      <path d="M14.5 13.5c-0.128 0-0.256-0.049-0.354-0.146l-4.646-4.646-4.646 4.646c-0.195 0.195-0.512 0.195-0.707 0s-0.195-0.512 0-0.707l5-5c0.195-0.195 0.512-0.195 0.707 0l5 5c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
    </Lini>
  );
}

LiniChevronUpSquare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
