import React from "react";
import PropTypes from "prop-types";

export default function LiniBatteryPower({
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
      className={`Component Lini LiniBatteryPower ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 8h-0.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-14c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-1.5h0.5c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5zM16 14.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-3.5h4.050c0.232 1.14 1.242 2 2.45 2h2c0.276 0 0.5-0.224 0.5-0.5v-0.5h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-1h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-0.5c0-0.276-0.224-0.5-0.5-0.5h-2c-1.207 0-2.217 0.86-2.45 2h-4.050v-3.5c0-0.276 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.224 0.5 0.5v8zM9 12h-1.5c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h1.5v3zM18 11.5c0 0.276-0.224 0.5-0.5 0.5h-0.5v-3h0.5c0.276 0 0.5 0.224 0.5 0.5v2z" />
      </g>
    </svg>
  );
}

LiniBatteryPower.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
