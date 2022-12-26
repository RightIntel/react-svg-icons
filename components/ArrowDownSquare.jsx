import React from "react";
import PropTypes from "prop-types";

export default function LiniArrowDownSquare({
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
      className={`Component Lini LiniArrowDownSquare ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 1h-16c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h16c0.827 0 1.5-0.673 1.5-1.5v-16c0-0.827-0.673-1.5-1.5-1.5zM1.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5h-16z" />
        <path d="M12.854 12.354l-3 3c-0.195 0.195-0.512 0.195-0.707 0l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.146 2.146v-8.293c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8.293l2.146-2.146c0.098-0.098 0.226-0.146 0.354-0.146s0.256 0.049 0.354 0.146c0.195 0.195 0.195 0.512 0 0.707z" />
      </g>
    </svg>
  );
}

LiniArrowDownSquare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
