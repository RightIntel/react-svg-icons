import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniWindow(props = {}) {
  props.name = "Window";
  
  return (
    <Lini {...props}>
      <path d="M18.5 1h-17c-0.827 0-1.5 0.673-1.5 1.5v15c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-15c0-0.827-0.673-1.5-1.5-1.5zM1.5 2h17c0.276 0 0.5 0.224 0.5 0.5v2.5h-18v-2.5c0-0.276 0.224-0.5 0.5-0.5zM18.5 18h-17c-0.276 0-0.5-0.224-0.5-0.5v-11.5h18v11.5c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M3 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M5 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M7 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
    </Lini>
  );
}

LiniWindow.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
