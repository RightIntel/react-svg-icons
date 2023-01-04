import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTablet(props = {}) {
  props.name = "Tablet";
  
  return (
    <Lini {...props}>
      <path d="M15.5 20h-12c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h12c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM3.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h12c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-12z" />
      <path d="M10 2.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M9.5 18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 16c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniTablet.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
