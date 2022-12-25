import React from "react";
import PropTypes from "prop-types";

export default function LiniAlignLeft({
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
      className={`Component Lini LiniAlignLeft ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0.5 20c-0.276 0-0.5-0.224-0.5-0.5v-19c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v19c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M11.5 9h-8c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.827 0.673-1.5 1.5-1.5h8c0.827 0 1.5 0.673 1.5 1.5v4c0 0.827-0.673 1.5-1.5 1.5zM3.5 3c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-8z" />
        <path d="M17.5 18h-14c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v4c0 0.827-0.673 1.5-1.5 1.5zM3.5 12c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5h-14z" />
      </g>
    </svg>
  );
}

LiniAlignLeft.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
