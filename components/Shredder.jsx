import React from "react";
import PropTypes from "prop-types";

export default function LiniShredder({
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
      className={`Component Lini LiniShredder ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M15.5 11c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5c0 0.827-0.673 1.5-1.5 1.5zM15.5 9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
        <path d="M13.5 5h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 6h-1.5v-4.5c0-0.827-0.673-1.5-1.5-1.5h-10c-0.827 0-1.5 0.673-1.5 1.5v4.5h-1.5c-0.827 0-1.5 0.673-1.5 1.5v9c0 0.827 0.673 1.5 1.5 1.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5.5h1v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5h1v5.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5.5h1v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5h1v5.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5.5h1v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5h1v5.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.827 0 1.5-0.673 1.5-1.5v-9c0-0.827-0.673-1.5-1.5-1.5zM4 1.5c0-0.276 0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5v4.5h-11v-4.5zM18 16.5c0 0.276-0.224 0.5-0.5 0.5h-1.5v-3h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v3h-1.5c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v9z" />
        <path d="M13.5 3h-8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniShredder.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
