import React from "react";
import PropTypes from "prop-types";

export default function LiniExpand({
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
      className={`Component Lini LiniExpand ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M7.854 7.146l-6.146-6.146h3.793c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.793l6.146 6.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z" />
        <path d="M19.5 0h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h3.793l-6.146 6.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.353 0.146s0.256-0.049 0.353-0.146l6.147-6.146v3.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5z" />
        <path d="M7.854 12.147c-0.195-0.195-0.512-0.195-0.707 0l-6.146 6.146v-3.793c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.793l6.146-6.147c0.195-0.195 0.195-0.512 0-0.707z" />
        <path d="M19.5 14c-0.276 0-0.5 0.224-0.5 0.5v3.793l-6.147-6.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l6.147 6.146h-3.793c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniExpand.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
