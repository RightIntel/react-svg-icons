import React from "react";
import PropTypes from "prop-types";

export default function LiniFrameExpand({
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
      className={`Component Lini LiniFrameExpand ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 7c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.827 0 1.5 0.673 1.5 1.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M0.5 7c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.827 0.673-1.5 1.5-1.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M3.5 18h-2c-0.827 0-1.5-0.673-1.5-1.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 18h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.827-0.673 1.5-1.5 1.5z" />
      </g>
    </svg>
  );
}

LiniFrameExpand.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
