import React from "react";
import PropTypes from "prop-types";

export default function LiniFileCode({
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
      className={`Component Lini LiniFileCode ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM16.793 6h-3.293c-0.276 0-0.5-0.224-0.5-0.5v-3.293l3.793 3.793zM16.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M7 17c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707l2-2c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1.646 1.646 1.646 1.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M9.5 17c-0.037 0-0.074-0.004-0.112-0.013-0.269-0.062-0.438-0.33-0.376-0.599l0.914-4c0.062-0.269 0.33-0.438 0.599-0.376s0.438 0.33 0.376 0.599l-0.914 4c-0.053 0.232-0.259 0.389-0.487 0.389z" />
        <path d="M13 17c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1.646-1.646-1.646-1.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707l-2 2c-0.098 0.098-0.226 0.146-0.354 0.146z" />
      </g>
    </svg>
  );
}

LiniFileCode.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
