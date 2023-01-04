import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniLan(props = {}) {
  props.name = "Lan";
  
  return (
    <Lini {...props}>
      <path d="M18.5 10h-8.5v-2h1.5c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h1.5v2h-8.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.5v2h-1.5c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-1.5v-2h9v2h-1.5c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-1.5v-2h3.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM8 4h3v3h-3v-3zM6 17h-3v-3h3v3zM16 17h-3v-3h3v3z" />
    </Lini>
  );
}

LiniLan.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
