import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniArrowDownSquare(props = {}) {
  props.name = "ArrowDownSquare";
  
  return (
    <Lini {...props}>
      <path d="M17.5 1h-16c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-16c0-0.827-0.673-1.5-1.5-1.5zM1.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5h-16z" />
      <path d="M12.854 12.354l-3 3c-0.195 0.195-0.512 0.195-0.707 0l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.146 2.146v-8.293c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8.293l2.146-2.146c0.098-0.098 0.226-0.146 0.354-0.146s0.256 0.049 0.354 0.146c0.195 0.195 0.195 0.512 0 0.707z" />
    </Lini>
  );
}

LiniArrowDownSquare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
