import React from "react";
import PropTypes from "prop-types";

export default function LiniFloppyDisk({
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
      className={`Component Lini LiniFloppyDisk ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13.5 6h-2c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM12 5h1v-2h-1v2z" />
        <path d="M19.854 2.646l-2.5-2.5c-0.094-0.094-0.221-0.146-0.354-0.146h-16.5c-0.276 0-0.5 0.224-0.5 0.5v19c0 0.276 0.224 0.5 0.5 0.5h19c0.276 0 0.5-0.224 0.5-0.5v-16.5c0-0.133-0.053-0.26-0.146-0.354zM6 1h9v6h-9v-6zM16 19h-12v-8h12v8zM19 19h-2v-8.5c0-0.276-0.224-0.5-0.5-0.5h-13c-0.276 0-0.5 0.224-0.5 0.5v8.5h-2v-18h4v6.5c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-6.5h0.793l2.207 2.207v15.793z" />
      </g>
    </svg>
  );
}

LiniFloppyDisk.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
