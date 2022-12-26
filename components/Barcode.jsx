import React from "react";
import PropTypes from "prop-types";

export default function LiniBarcode({
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
      className={`Component Lini LiniBarcode ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0 3h1v14h-1v-14z" />
        <path d="M16 3h0.5v14h-0.5v-14z" />
        <path d="M3.5 3h0.5v14h-0.5v-14z" />
        <path d="M12 3h1v14h-1v-14z" />
        <path d="M2 3h1v14h-1v-14z" />
        <path d="M7.5 3h0.5v14h-0.5v-14z" />
        <path d="M6 3h1v14h-1v-14z" />
        <path d="M19.5 3h0.5v14h-0.5v-14z" />
        <path d="M17 3h1v14h-1v-14z" />
        <path d="M8.5 3h0.5v14h-0.5v-14z" />
        <path d="M10 3h1v14h-1v-14z" />
      </g>
    </svg>
  );
}

LiniBarcode.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
