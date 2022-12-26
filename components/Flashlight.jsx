import React from "react";
import PropTypes from "prop-types";

export default function LiniFlashlight({
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
      className={`Component Lini LiniFlashlight ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13.5 0h-8c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.627 0.22 1.557 0.5 2.118l1.106 2.211c0.21 0.42 0.394 1.201 0.394 1.671v8c0 1.378 1.122 2.5 2.5 2.5h2c1.378 0 2.5-1.122 2.5-2.5v-8c0-0.47 0.184-1.251 0.394-1.671l1.106-2.211c0.28-0.561 0.5-1.491 0.5-2.118v-2c0-0.827-0.673-1.5-1.5-1.5zM5.5 1h8c0.276 0 0.5 0.224 0.5 0.5v0.5h-9v-0.5c0-0.276 0.224-0.5 0.5-0.5zM13.606 5.171l-1.106 2.211c-0.28 0.561-0.5 1.491-0.5 2.118v8c0 0.827-0.673 1.5-1.5 1.5h-2c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.627-0.22-1.557-0.5-2.118l-1.106-2.211c-0.21-0.42-0.394-1.201-0.394-1.671v-0.5h9v0.5c0 0.47-0.184 1.251-0.394 1.671z" />
        <path d="M9.5 13c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniFlashlight.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
