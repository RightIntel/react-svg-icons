import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniWall(props = {}) {
  props.name = "Wall";
  
  return (
    <Lini {...props}>
      <path d="M18.5 7c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-3h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-18c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.5v3h-5.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v3h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.5v3h-5.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v3h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h18c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5.5v-3h5.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-3h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5.5v-3h5.5zM7 3h8v3h-8v-3zM12 18h-8v-3h8v3zM15 14h-8v-3h8v3zM12 10h-8v-3h8v3z" />
    </Lini>
  );
}

LiniWall.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
