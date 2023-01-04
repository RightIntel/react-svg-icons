import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniChevronRightSquare(props = {}) {
  props.name = "ChevronRightSquare";
  
  return (
    <Lini {...props}>
      <path d="M0 18.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5h-16c-0.827 0-1.5-0.673-1.5-1.5zM18 2.5c0-0.276-0.224-0.5-0.5-0.5h-16c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16z" />
      <path d="M6.5 15.5c0-0.128 0.049-0.256 0.146-0.354l4.646-4.646-4.646-4.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l5 5c0.195 0.195 0.195 0.512 0 0.707l-5 5c-0.195 0.195-0.512 0.195-0.707 0-0.098-0.098-0.146-0.226-0.146-0.354z" />
    </Lini>
  );
}

LiniChevronRightSquare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
