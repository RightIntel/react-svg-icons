import React from "react";
import PropTypes from "prop-types";

export default function LiniCross2({
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
      className={`Component Lini LiniCross2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M10.707 10.5l8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-8.646 8.646-8.646-8.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l8.646 8.646-8.646 8.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l8.646-8.646 8.646 8.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646z" />
      </g>
    </svg>
  );
}

LiniCross2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
