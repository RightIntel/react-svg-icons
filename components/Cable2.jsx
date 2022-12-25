import React from "react";
import PropTypes from "prop-types";

export default function LiniCable2({
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
      className={`Component Lini LiniCable2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M6.5 14h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.55c1.14-0.232 2-1.242 2-2.45v-7c0-0.276-0.224-0.5-0.5-0.5h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v7c0 1.207 0.86 2.217 2 2.45v1.55c0 0.827 0.673 1.5 1.5 1.5h3c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.827-0.673-1.5-1.5-1.5zM4 3v1h-3v-1h3zM1 9.5v-4.5h3v4.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5z" />
        <path d="M11.5 2h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v7c0 1.207 0.86 2.217 2 2.45v7.55c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-7.55c1.14-0.232 2-1.242 2-2.45v-7c0-0.276-0.224-0.5-0.5-0.5zM11 3v1h-3v-1h3zM11 9.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-4.5h3v4.5z" />
        <path d="M18.5 2h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5v7c0 1.207 0.86 2.217 2 2.45v1.55c0 0.276-0.224 0.5-0.5 0.5h-3c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h3c0.827 0 1.5-0.673 1.5-1.5v-1.55c1.14-0.232 2-1.242 2-2.45v-7c0-0.276-0.224-0.5-0.5-0.5zM18 3v1h-3v-1h3zM18 9.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-4.5h3v4.5z" />
      </g>
    </svg>
  );
}

LiniCable2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
