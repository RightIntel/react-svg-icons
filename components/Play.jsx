import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPlay(props = {}) {
  props.name = "Play";
  
  return (
    <Lini {...props}>
      <path d="M18.5 20h-17c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM1.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-17z" />
      <path d="M6.5 16c-0.080 0-0.16-0.019-0.233-0.057-0.164-0.086-0.267-0.257-0.267-0.442v-11c0-0.186 0.103-0.356 0.267-0.442s0.363-0.075 0.516 0.031l8 5.5c0.136 0.093 0.217 0.247 0.217 0.412s-0.081 0.319-0.217 0.412l-8 5.5c-0.085 0.058-0.184 0.088-0.283 0.088zM7 5.451v9.099l6.617-4.549-6.617-4.549z" />
    </Lini>
  );
}

LiniPlay.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
