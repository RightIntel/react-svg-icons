import React from "react";
import PropTypes from "prop-types";

export default function LiniLayers({
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
      className={`Component Lini LiniLayers ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M10 12c-0.066 0-0.132-0.013-0.194-0.039l-9.5-4c-0.185-0.078-0.306-0.26-0.306-0.461s0.121-0.383 0.306-0.461l9.5-4c0.124-0.052 0.264-0.052 0.388 0l9.5 4c0.185 0.078 0.306 0.26 0.306 0.461s-0.121 0.383-0.306 0.461l-9.5 4c-0.062 0.026-0.128 0.039-0.194 0.039zM1.788 7.5l8.212 3.457 8.212-3.457-8.212-3.457-8.212 3.457z" />
        <path d="M10 15c-0.066 0-0.132-0.013-0.194-0.039l-9.5-4c-0.254-0.107-0.374-0.4-0.267-0.655s0.4-0.374 0.655-0.267l9.306 3.918 9.306-3.918c0.254-0.107 0.548 0.012 0.655 0.267s-0.012 0.548-0.267 0.655l-9.5 4c-0.062 0.026-0.128 0.039-0.194 0.039z" />
        <path d="M10 18c-0.066 0-0.132-0.013-0.194-0.039l-9.5-4c-0.254-0.107-0.374-0.4-0.267-0.655s0.4-0.374 0.655-0.267l9.306 3.918 9.306-3.918c0.254-0.107 0.548 0.012 0.655 0.267s-0.012 0.548-0.267 0.655l-9.5 4c-0.062 0.026-0.128 0.039-0.194 0.039z" />
      </g>
    </svg>
  );
}

LiniLayers.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
