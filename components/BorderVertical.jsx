import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniBorderVertical(props = {}) {
  props.name = "BorderVertical";
  
  return (
    <Lini {...props}>
      <path d="M1 10h1v1h-1v-1z" />
      <path d="M3 10h1v1h-1v-1z" />
      <path d="M5 10h1v1h-1v-1z" />
      <path d="M7 10h1v1h-1v-1z" />
      <path d="M11 10h1v1h-1v-1z" />
      <path d="M13 10h1v1h-1v-1z" />
      <path d="M15 10h1v1h-1v-1z" />
      <path d="M17 10h1v1h-1v-1z" />
      <path d="M1 16h1v1h-1v-1z" />
      <path d="M1 18h1v1h-1v-1z" />
      <path d="M1 14h1v1h-1v-1z" />
      <path d="M1 12h1v1h-1v-1z" />
      <path d="M1 2h1v1h-1v-1z" />
      <path d="M1 8h1v1h-1v-1z" />
      <path d="M1 6h1v1h-1v-1z" />
      <path d="M1 4h1v1h-1v-1z" />
      <path d="M17 16h1v1h-1v-1z" />
      <path d="M17 18h1v1h-1v-1z" />
      <path d="M17 14h1v1h-1v-1z" />
      <path d="M17 12h1v1h-1v-1z" />
      <path d="M17 2h1v1h-1v-1z" />
      <path d="M17 8h1v1h-1v-1z" />
      <path d="M17 6h1v1h-1v-1z" />
      <path d="M17 4h1v1h-1v-1z" />
      <path d="M3 2h1v1h-1v-1z" />
      <path d="M5 2h1v1h-1v-1z" />
      <path d="M7 2h1v1h-1v-1z" />
      <path d="M11 2h1v1h-1v-1z" />
      <path d="M13 2h1v1h-1v-1z" />
      <path d="M15 2h1v1h-1v-1z" />
      <path d="M3 18h1v1h-1v-1z" />
      <path d="M5 18h1v1h-1v-1z" />
      <path d="M7 18h1v1h-1v-1z" />
      <path d="M11 18h1v1h-1v-1z" />
      <path d="M13 18h1v1h-1v-1z" />
      <path d="M15 18h1v1h-1v-1z" />
      <path d="M9.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniBorderVertical.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
