import React from "react";
import PropTypes from "prop-types";

export default function LiniMove({
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
      className={`Component Lini LiniMove ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.354 10.146l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-6.793v-6.793l2.146 2.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-3-3c-0.195-0.195-0.512-0.195-0.707 0l-3 3c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l2.146-2.146v6.793h-6.793l2.146-2.146c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-3 3c-0.195 0.195-0.195 0.512 0 0.707l3 3c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2.146-2.146h6.793v6.793l-2.146-2.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l3 3c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2.146 2.146v-6.793h6.793l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707z" />
      </g>
    </svg>
  );
}

LiniMove.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
