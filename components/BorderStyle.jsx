import React from "react";
import PropTypes from "prop-types";

export default function LiniBorderStyle({
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
      className={`Component Lini LiniBorderStyle ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9 2h1v1h-1v-1z" />
        <path d="M17 18h1v1h-1v-1z" />
        <path d="M9 18h1v1h-1v-1z" />
        <path d="M3 2h1v1h-1v-1z" />
        <path d="M15 2h1v1h-1v-1z" />
        <path d="M3 18h1v1h-1v-1z" />
        <path d="M5 18h1v1h-1v-1z" />
        <path d="M7 18h1v1h-1v-1z" />
        <path d="M11 18h1v1h-1v-1z" />
        <path d="M13 18h1v1h-1v-1z" />
        <path d="M15 18h1v1h-1v-1z" />
        <path d="M1.5 19c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v16c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M7.5 3h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M13.5 3h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 9c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 13c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 17c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniBorderStyle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
