import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniBorderOuter(props = {}) {
  props.name = "BorderOuter";
  
  return (
    <Lini {...props}>
      <path d="M3 10h1v1h-1v-1z" />
      <path d="M5 10h1v1h-1v-1z" />
      <path d="M7 10h1v1h-1v-1z" />
      <path d="M9 10h1v1h-1v-1z" />
      <path d="M11 10h1v1h-1v-1z" />
      <path d="M13 10h1v1h-1v-1z" />
      <path d="M15 10h1v1h-1v-1z" />
      <path d="M9 16h1v1h-1v-1z" />
      <path d="M9 14h1v1h-1v-1z" />
      <path d="M9 12h1v1h-1v-1z" />
      <path d="M9 8h1v1h-1v-1z" />
      <path d="M9 6h1v1h-1v-1z" />
      <path d="M9 4h1v1h-1v-1z" />
      <path d="M16.5 19h-14c-0.827 0-1.5-0.673-1.5-1.5v-14c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v14c0 0.827-0.673 1.5-1.5 1.5zM2.5 3c-0.276 0-0.5 0.224-0.5 0.5v14c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-14c0-0.276-0.224-0.5-0.5-0.5h-14z" />
    </Lini>
  );
}

LiniBorderOuter.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
