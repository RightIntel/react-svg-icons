import React from "react";
import PropTypes from "prop-types";

export default function LiniChevronDownSquare({
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
      className={`Component Lini LiniChevronDownSquare ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 1h-16c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-16c0-0.827-0.673-1.5-1.5-1.5zM1.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5h-16z" />
        <path d="M14.5 7.5c-0.128 0-0.256 0.049-0.354 0.146l-4.646 4.646-4.646-4.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5 5c0.195 0.195 0.512 0.195 0.707 0l5-5c0.195-0.195 0.195-0.512 0-0.707-0.098-0.098-0.226-0.146-0.354-0.146z" />
      </g>
    </svg>
  );
}

LiniChevronDownSquare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
