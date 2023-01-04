import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPlusSquare(props = {}) {
  props.name = "PlusSquare";
  
  return (
    <Lini {...props}>
      <path d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z" />
      <path d="M14.5 10h-4.5v-4.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4.5h-4.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4.5v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5h4.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniPlusSquare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
