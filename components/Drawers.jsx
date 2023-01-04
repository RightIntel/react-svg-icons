import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniDrawers(props = {}) {
  props.name = "Drawers";
  
  return (
    <Lini {...props}>
      <path d="M15.5 3h-11c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.5h12v0.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-12c0-0.827-0.673-1.5-1.5-1.5zM4.5 4h11c0.276 0 0.5 0.224 0.5 0.5v2.5h-12v-2.5c0-0.276 0.224-0.5 0.5-0.5zM16 8v3h-12v-3h12zM4 15v-3h12v3h-12z" />
      <path d="M10.5 6h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M10.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M10.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniDrawers.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
