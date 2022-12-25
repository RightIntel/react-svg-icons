import React from "react";
import PropTypes from "prop-types";

export default function LiniTombstone({
  size = 20,
  color = "#333",
  className = "",
  ...moreProps
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className={`Component Lini LiniTombstone ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M7 8v-1c0-0.551-0.449-1-1-1h-1c-0.551 0-1 0.449-1 1v3.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h0.191l0.862 1.724c0.088 0.175 0.264 0.277 0.448 0.277 0.075 0 0.151-0.017 0.223-0.053 0.247-0.123 0.347-0.424 0.224-0.671l-0.659-1.319c0.412-0.124 0.712-0.506 0.712-0.958zM5 7h1v1h-1v-1z" />
        <path d="M8.5 11c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M10.5 11c-0.276 0-0.5-0.224-0.5-0.5v-3.5c0-0.551 0.449-1 1-1h1c0.551 0 1 0.449 1 1v1c0 0.551-0.449 1-1 1h-1v1.5c0 0.276-0.224 0.5-0.5 0.5zM11 8h1v-1h-1v1z" />
        <path d="M17.51 2.49c-1.605-1.605-3.74-2.49-6.010-2.49h-3c-2.27 0-4.405 0.884-6.010 2.49s-2.49 3.74-2.49 6.010v10c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-10c0-2.27-0.884-4.405-2.49-6.010zM1 18.5v-10c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5v10c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5zM19 18.5c0 0.276-0.224 0.5-0.5 0.5h-1.586c0.056-0.157 0.086-0.325 0.086-0.5v-10c0-2.27-0.884-4.405-2.49-6.010-0.554-0.554-1.171-1.022-1.834-1.397 3.579 0.566 6.324 3.672 6.324 7.407v10z" />
      </g>
    </svg>
  );
}

LiniTombstone.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
