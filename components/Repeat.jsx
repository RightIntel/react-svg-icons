import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRepeat(props = {}) {
  props.name = "Repeat";
  
  return (
    <Lini {...props}>
      <path d="M17.354 3.146l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-13.293c-0.827 0-1.5 0.673-1.5 1.5v9c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h13.293l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707z" />
      <path d="M17.5 6c-0.276 0-0.5 0.224-0.5 0.5v9c0 0.276-0.224 0.5-0.5 0.5h-13.293l2.146-2.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3 3c-0.195 0.195-0.195 0.512 0 0.707l3 3c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2.146-2.146h13.293c0.827 0 1.5-0.673 1.5-1.5v-9c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniRepeat.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
