import React from "react";
import PropTypes from "prop-types";

export default function LiniPlus({
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
      className={`Component Lini LiniPlus ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 10h-8.5v-8.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v8.5h-8.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8.5v8.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.5h8.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniPlus.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
