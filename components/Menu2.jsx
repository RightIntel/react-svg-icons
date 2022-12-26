import React from "react";
import PropTypes from "prop-types";

export default function LiniMenu2({
  size = 20,
  color = "",
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
      className={`Component Lini LiniMenu2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 7h-17c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM1.5 5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-17z" />
        <path d="M18.5 12h-17c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM1.5 10c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-17z" />
        <path d="M18.5 17h-17c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM1.5 15c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-17z" />
      </g>
    </svg>
  );
}

LiniMenu2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
