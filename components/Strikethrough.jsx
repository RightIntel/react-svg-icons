import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniStrikethrough(props = {}) {
  props.name = "Strikethrough";
  
  return (
    <Lini {...props}>
      <path d="M16.5 2h-14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.5v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5h6.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
      <path d="M9.5 18c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M18.5 12h-18c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h18c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5zM1 11h17v-1h-17v1z" />
    </Lini>
  );
}

LiniStrikethrough.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
