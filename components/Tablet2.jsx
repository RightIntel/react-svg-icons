import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTablet2(props = {}) {
  props.name = "Tablet2";
  
  return (
    <Lini {...props}>
      <path d="M16.5 20h-13c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h13c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM3.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-13z" />
      <path d="M10.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M15.5 16h-11c-0.276 0-0.5-0.224-0.5-0.5v-13c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5zM5 15h10v-12h-10v12z" />
    </Lini>
  );
}

LiniTablet2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
