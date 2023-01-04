import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniDrawers2(props = {}) {
  props.name = "Drawers2";
  
  return (
    <Lini {...props}>
      <path d="M18.5 3h-17c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h18v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-12c0-0.827-0.673-1.5-1.5-1.5zM1.5 4h17c0.276 0 0.5 0.224 0.5 0.5v2.5h-18v-2.5c0-0.276 0.224-0.5 0.5-0.5zM19 8v3h-18v-3h18zM1 15v-3h18v3h-18z" />
      <path d="M5.5 6h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M5.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M5.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 6h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniDrawers2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
