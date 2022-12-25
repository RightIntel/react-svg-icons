import React from "react";
import PropTypes from "prop-types";

export default function LiniSatellite({
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
      className={`Component Lini LiniSatellite ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 15.085c-0.401 0-0.778-0.156-1.061-0.438l-2.586-2.586c-0.283-0.283-0.438-0.659-0.438-1.061s0.156-0.778 0.438-1.061l4.586-4.586c0.283-0.283 0.659-0.438 1.061-0.438s0.778 0.156 1.061 0.438l2.586 2.586c0.585 0.585 0.585 1.536 0 2.121l-4.586 4.586c-0.283 0.283-0.659 0.438-1.061 0.438zM11.5 5.915c-0.134 0-0.26 0.052-0.354 0.145l-4.586 4.586c-0.094 0.094-0.145 0.219-0.145 0.354s0.052 0.26 0.145 0.353l2.586 2.586c0.094 0.094 0.219 0.145 0.354 0.145s0.26-0.052 0.354-0.145l4.586-4.586c0.195-0.195 0.195-0.512-0-0.707l-2.586-2.586c-0.094-0.094-0.219-0.145-0.354-0.145z" />
        <path d="M5.5 9.5c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707l4-4c0.195-0.195 0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707s-0.512 0.195-0.707 0l-3.646-3.646-3.293 3.293 3.646 3.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M15.5 19.5c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l3.646 3.646 3.293-3.293-3.646-3.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M17 7h-1.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1.293l-2.793-2.793v1.293c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1.5c0-0.674 0.361-0.896 0.516-0.96s0.568-0.163 1.044 0.314l3.086 3.086c0.476 0.477 0.378 0.889 0.314 1.044s-0.287 0.516-0.96 0.516z" />
        <path d="M7 16c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M6 18c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l3 3c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M5 20c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
      </g>
    </svg>
  );
}

LiniSatellite.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
