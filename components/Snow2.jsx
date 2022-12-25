import React from "react";
import PropTypes from "prop-types";

export default function LiniSnow2({
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
      className={`Component Lini LiniSnow2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 10h-1.793l1.146-1.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-1.854 1.854h-4.586l3-3h2.793c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.793l1.646-1.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-1.646 1.646v-1.793c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.793l-3 3v-4.586l1.854-1.854c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-1.146 1.146v-1.793c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.793l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.854 1.854v4.586l-3-3v-2.793c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.793l-1.646-1.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.646 1.646h-1.793c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.793l3 3h-4.586l-1.854-1.854c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1.146 1.146h-1.793c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.793l-1.146 1.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1.854-1.854h4.586l-3 3h-2.793c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.793l-1.646 1.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1.646-1.646v1.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.793l3-3v4.586l-1.854 1.854c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.146-1.146v1.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.793l1.146 1.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.854-1.854v-4.586l3 3v2.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.793l1.646 1.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.646-1.646h1.793c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.793l-3-3h4.586l1.854 1.854c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1.146-1.146h1.793c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniSnow2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
