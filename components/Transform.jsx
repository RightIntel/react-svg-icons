import React from "react";
import PropTypes from "prop-types";

export default function LiniTransform({
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
      className={`Component Lini LiniTransform ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 4c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v0.5h-5v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v0.5h-5v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h0.5v5h-0.5c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h0.5v5h-0.5c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h5v0.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h5v0.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-0.5v-5h0.5c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-0.5v-5h0.5zM17 2h1v1h-1v-1zM9 2h1v1h-1v-1zM1 2h1v1h-1v-1zM1 10h1v1h-1v-1zM2 19h-1v-1h1v1zM10 19h-1v-1h1v1zM18 19h-1v-1h1v1zM18 11h-1v-1h1v1zM17 9h-0.5c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h0.5v5h-0.5c-0.276 0-0.5 0.224-0.5 0.5v0.5h-5v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5v0.5h-5v-0.5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-5h0.5c0.276 0 0.5-0.224 0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-0.5v-5h0.5c0.276 0 0.5-0.224 0.5-0.5v-0.5h5v0.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h5v0.5c0 0.276 0.224 0.5 0.5 0.5h0.5v5z" />
        <path d="M11.5 10h-1.5v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniTransform.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
