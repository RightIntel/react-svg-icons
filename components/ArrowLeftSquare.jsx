import React from "react";
import PropTypes from "prop-types";

export default function LiniArrowLeftSquare({
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
      className={`Component Lini LiniArrowLeftSquare ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19 2.5v16c0 0.827-0.673 1.5-1.5 1.5h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5zM1 18.5c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16c-0.276 0-0.5 0.224-0.5 0.5v16z" />
        <path d="M7.646 7.146l-3 3c-0.195 0.195-0.195 0.512 0 0.707l3 3c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-2.146-2.146h8.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-8.293l2.146-2.146c0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354c-0.195-0.195-0.512-0.195-0.707 0z" />
      </g>
    </svg>
  );
}

LiniArrowLeftSquare.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
