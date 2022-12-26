import React from "react";
import PropTypes from "prop-types";

export default function LiniSmartphoneEmbed({
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
      className={`Component Lini LiniSmartphoneEmbed ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13.5 16h-7c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.5h6v-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M13.5 5c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-6v1.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M10.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M14.5 20h-9c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.827-0.673 1.5-1.5 1.5z" />
        <path d="M15.5 5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-9c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3c0-0.827 0.673-1.5 1.5-1.5h9c0.827 0 1.5 0.673 1.5 1.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M6 13c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707l3-3c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.646 2.646 2.646 2.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M14 13c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.646-2.646-2.646-2.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l3 3c0.195 0.195 0.195 0.512 0 0.707l-3 3c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M8.5 13c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l3-6c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-3 6c-0.088 0.175-0.264 0.277-0.448 0.277z" />
      </g>
    </svg>
  );
}

LiniSmartphoneEmbed.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
