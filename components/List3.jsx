import React from "react";
import PropTypes from "prop-types";

export default function LiniList3({
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
      className={`Component Lini LiniList3 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M2 6c-0.128 0-0.256-0.049-0.354-0.146l-1.5-1.5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.146 1.146 4.146-4.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4.5 4.5c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M19.5 5h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M2 13c-0.128 0-0.256-0.049-0.354-0.146l-1.5-1.5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.146 1.146 4.146-4.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4.5 4.5c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M19.5 12h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M2 20c-0.128 0-0.256-0.049-0.354-0.146l-1.5-1.5c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l1.146 1.146 4.146-4.146c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-4.5 4.5c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M19.5 19h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniList3.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
