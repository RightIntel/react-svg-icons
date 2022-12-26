import React from "react";
import PropTypes from "prop-types";

export default function LiniCreditCard({
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
      className={`Component Lini LiniCreditCard ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 3h-17c-0.827 0-1.5 0.673-1.5 1.5v11c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-11c0-0.827-0.673-1.5-1.5-1.5zM1.5 4h17c0.276 0 0.5 0.224 0.5 0.5v0.5h-18v-0.5c0-0.276 0.224-0.5 0.5-0.5zM19 6v3h-18v-3h18zM18.5 16h-17c-0.276 0-0.5-0.224-0.5-0.5v-5.5h18v5.5c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M17 14h1v1h-1v-1z" />
        <path d="M13 14h3v1h-3v-1z" />
        <path d="M10 14h2v1h-2v-1z" />
      </g>
    </svg>
  );
}

LiniCreditCard.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
