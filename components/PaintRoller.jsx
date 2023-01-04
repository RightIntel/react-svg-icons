import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPaintRoller(props = {}) {
  props.name = "PaintRoller";
  
  return (
    <Lini {...props}>
      <path d="M17.5 4h-0.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-14c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-0.5h0.5c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-8c-0.827 0-1.5 0.673-1.5 1.5v1.586c-0.582 0.206-1 0.762-1 1.414v5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-5c0-0.652-0.418-1.208-1-1.414v-1.586c0-0.276 0.224-0.5 0.5-0.5h8c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM16 5.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5v2zM9 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5z" />
    </Lini>
  );
}

LiniPaintRoller.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
