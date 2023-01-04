import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniGradient2(props = {}) {
  props.name = "Gradient2";
  
  return (
    <Lini {...props}>
      <path d="M18.5 20h-17c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM1.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-17z" />
      <path d="M10.707 10l7.146-7.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-7.146 7.146-0.793-0.793 5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-0.793-0.793 4.146-4.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-4.146 4.146-0.793-0.793 2.646-2.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2.646 2.646-0.793-0.793 1.146-1.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-1.146 1.146-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707l1.146 1.146-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707l1.146 1.146-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707l1.146 1.146-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707l1.146 1.146-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1.146-1.146 1.146 1.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.146-1.146 0.793-0.793 2.646 2.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2.646-2.646 0.793-0.793 4.146 4.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-4.146-4.146 0.793-0.793 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646 0.793-0.793 7.146 7.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-7.146-7.146zM7.793 8.5l-0.793 0.793-0.793-0.793 0.793-0.793 0.793 0.793zM6.293 10l-0.793 0.793-0.793-0.793 0.793-0.793 0.793 0.793zM6.293 7l-0.793 0.793-0.793-0.793 0.793-0.793 0.793 0.793zM3.207 5.5l0.793-0.793 0.793 0.793-0.793 0.793-0.793-0.793zM3.207 8.5l0.793-0.793 0.793 0.793-0.793 0.793-0.793-0.793zM3.207 11.5l0.793-0.793 0.793 0.793-0.793 0.793-0.793-0.793zM4 15.293l-0.793-0.793 0.793-0.793 0.793 0.793-0.793 0.793zM5.5 13.793l-0.793-0.793 0.793-0.793 0.793 0.793-0.793 0.793zM7 12.293l-0.793-0.793 0.793-0.793 0.793 0.793-0.793 0.793zM8.5 10.793l-0.793-0.793 0.793-0.793 0.793 0.793-0.793 0.793z" />
    </Lini>
  );
}

LiniGradient2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
