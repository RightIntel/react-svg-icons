import React from "react";
import PropTypes from "prop-types";

export default function LiniBook2({
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
      className={`Component Lini LiniBook2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M14.5 18h-10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M16.5 3c-0.276 0-0.5 0.224-0.5 0.5v15c0 0.276-0.224 0.5-0.5 0.5h-11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h9c0.827 0 1.5-0.673 1.5-1.5v-12c0-0.827-0.673-1.5-1.5-1.5h-10c-0.827 0-1.5 0.673-1.5 1.5v15c0 1.378 1.122 2.5 2.5 2.5h11c0.827 0 1.5-0.673 1.5-1.5v-15c0-0.276-0.224-0.5-0.5-0.5zM3.5 2h10c0.276 0 0.5 0.224 0.5 0.5v12c0 0.276-0.224 0.5-0.5 0.5h-9c-0.562 0-1.082 0.187-1.5 0.501v-13.001c0-0.276 0.224-0.5 0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniBook2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
