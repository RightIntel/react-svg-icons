import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTombstoneHipster(props = {}) {
  props.name = "TombstoneHipster";
  
  return (
    <Lini {...props}>
      <path d="M7 7v-1c0-0.551-0.449-1-1-1h-1c-0.551 0-1 0.449-1 1v3.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h0.191l0.862 1.724c0.088 0.175 0.264 0.277 0.448 0.277 0.075 0 0.151-0.017 0.223-0.053 0.247-0.123 0.347-0.424 0.224-0.671l-0.659-1.319c0.412-0.124 0.712-0.506 0.712-0.958zM5 6h1v1h-1v-1z" />
      <path d="M8.5 10c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M10.5 10c-0.276 0-0.5-0.224-0.5-0.5v-3.5c0-0.551 0.449-1 1-1h1c0.551 0 1 0.449 1 1v1c0 0.551-0.449 1-1 1h-1v1.5c0 0.276-0.224 0.5-0.5 0.5zM11 7h1v-1h-1v1z" />
      <path d="M17.51 2.49c-1.605-1.605-3.74-2.49-6.010-2.49h-3c-2.27 0-4.405 0.884-6.010 2.49s-2.49 3.74-2.49 6.010v10c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-10c0-2.27-0.884-4.405-2.49-6.010zM1 18.5v-10c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v10c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5zM19 18.5c0 0.276-0.224 0.5-0.5 0.5h-1.586c0.056-0.157 0.086-0.325 0.086-0.5v-10c0-2.27-0.884-4.405-2.49-6.010-0.554-0.554-1.171-1.022-1.834-1.397 3.579 0.566 6.324 3.672 6.324 7.407v10z" />
      <path d="M14.923 14.233c-0.111-0.175-0.318-0.264-0.521-0.224-0.187 0.037-0.368 0.056-0.536 0.056-0 0-0 0-0 0-0.872-0-1.402-0.503-1.962-1.036-0.533-0.506-1.084-1.030-1.903-1.030-0.597 0-1.133 0.263-1.5 0.679-0.367-0.416-0.903-0.679-1.5-0.679-0.819 0-1.37 0.524-1.903 1.030-0.561 0.533-1.090 1.036-1.962 1.036-0.169 0-0.349-0.019-0.536-0.056-0.203-0.041-0.411 0.048-0.521 0.224s-0.101 0.401 0.023 0.567c1.157 1.543 2.642 1.867 3.685 1.867 0.621 0 1.115-0.117 1.355-0.187 0.531-0.154 1.018-0.542 1.36-1.028 0.343 0.486 0.83 0.873 1.36 1.028 0.24 0.070 0.734 0.187 1.355 0.187 1.042-0 2.528-0.324 3.685-1.867 0.124-0.166 0.134-0.391 0.023-0.567zM6.86 15.52c-0.188 0.055-0.579 0.147-1.076 0.147-0.585 0-1.349-0.131-2.069-0.654 0.935-0.179 1.556-0.768 2.070-1.258 0.492-0.468 0.815-0.755 1.214-0.755 0.551 0 1 0.449 1 1 0 0.611-0.554 1.349-1.14 1.52zM11.215 15.667c-0.497 0-0.887-0.092-1.076-0.147-0.586-0.17-1.14-0.909-1.14-1.52 0-0.551 0.449-1 1-1 0.4 0 0.722 0.287 1.214 0.755 0.515 0.489 1.135 1.079 2.070 1.257-0.721 0.523-1.485 0.654-2.069 0.654z" />
    </Lini>
  );
}

LiniTombstoneHipster.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
