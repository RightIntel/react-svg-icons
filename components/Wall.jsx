import React from "react";
import PropTypes from "prop-types";

export default function LiniWall({
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
      className={`Component Lini LiniWall ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 7c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-3h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-18c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.5v3h-5.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v3h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.5v3h-5.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v3h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h18c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5.5v-3h5.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-3h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5.5v-3h5.5zM7 3h8v3h-8v-3zM12 18h-8v-3h8v3zM15 14h-8v-3h8v3zM12 10h-8v-3h8v3z" />
      </g>
    </svg>
  );
}

LiniWall.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
