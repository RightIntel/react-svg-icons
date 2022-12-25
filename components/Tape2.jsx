import React from "react";
import PropTypes from "prop-types";

export default function LiniTape2({
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
      className={`Component Lini LiniTape2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M5.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM5.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.827-0.673-1.5-1.5-1.5z" />
        <path d="M14.5 13c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM14.5 9c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5c0-0.827-0.673-1.5-1.5-1.5z" />
        <path d="M11.5 7h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M18.5 4h-17c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h14.997c0.001 0 0.002 0 0.004 0s0.001-0 0.002-0h1.998c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM4.309 16l0.5-1h10.382l0.5 1h-11.382zM19 15.5c0 0.276-0.224 0.5-0.5 0.5h-1.691l-0.862-1.724c-0.085-0.169-0.258-0.276-0.447-0.276h-11c-0.189 0-0.363 0.107-0.447 0.276l-0.862 1.724h-1.691c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v10z" />
      </g>
    </svg>
  );
}

LiniTape2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
