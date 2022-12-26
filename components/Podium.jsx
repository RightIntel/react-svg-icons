import React from "react";
import PropTypes from "prop-types";

export default function LiniPodium({
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
      className={`Component Lini LiniPodium ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 8h-5.5v-4.5c0-0.276-0.224-0.5-0.5-0.5h-6c-0.276 0-0.5 0.224-0.5 0.5v2.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h18c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5zM7 4h5v12h-5v-12zM1 7h5v9h-5v-9zM18 16h-5v-7h5v7z" />
        <path d="M9.5 10c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M4.5 13h-2c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h1.5v-1h-1.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-1.5v1h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M16.5 10h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniPodium.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
