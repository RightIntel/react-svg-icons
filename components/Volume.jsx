import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniVolume(props = {}) {
  props.name = "Volume";
  
  return (
    <Lini {...props}>
      <path d="M8.15 3.207c-0.247 0-0.494 0.104-0.736 0.309l-4.098 3.483h-1.816c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h1.816l4.098 3.483c0.241 0.205 0.489 0.309 0.736 0.309 0 0 0 0 0 0 0.272 0 0.516-0.132 0.67-0.362 0.119-0.179 0.18-0.408 0.18-0.68v-12.5c0-0.72-0.427-1.043-0.85-1.043zM1 12.5v-4c0-0.276 0.224-0.5 0.5-0.5h1.5v5h-1.5c-0.276 0-0.5-0.224-0.5-0.5zM8 16.669l-4-3.4v-5.538l4-3.4v12.338z" />
    </Lini>
  );
}

LiniVolume.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
