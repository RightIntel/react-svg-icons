import React from "react";
import PropTypes from "prop-types";

export default function LiniUnderline({
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
      className={`Component Lini LiniUnderline ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M14.5 18h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M10 15c-2.757 0-5-2.243-5-5v-7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7.5c0 2.206 1.794 4 4 4s4-1.794 4-4v-7.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7.5c0 2.757-2.243 5-5 5z" />
      </g>
    </svg>
  );
}

LiniUnderline.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
