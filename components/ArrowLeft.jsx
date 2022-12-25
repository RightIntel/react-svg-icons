import React from "react";
import PropTypes from "prop-types";

export default function LiniArrowLeft({
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
      className={`Component Lini LiniArrowLeft ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0.646 10.146l6-6c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5.146 5.146h16.293c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-16.293l5.146 5.146c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146s-0.256-0.049-0.354-0.146l-6-6c-0.195-0.195-0.195-0.512 0-0.707z" />
      </g>
    </svg>
  );
}

LiniArrowLeft.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
