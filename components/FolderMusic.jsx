import React from "react";
import PropTypes from "prop-types";

export default function LiniFolderMusic({
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
      className={`Component Lini LiniFolderMusic ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-10.5c0-0.352 0.119-0.856 0.276-1.171l0.553-1.106c0.206-0.413 0.71-0.724 1.171-0.724h7c0.461 0 0.965 0.311 1.171 0.724l0.553 1.106c0.038 0.077 0.191 0.171 0.276 0.171h7.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM2 4c-0.086 0-0.238 0.094-0.276 0.171l-0.553 1.106c-0.088 0.176-0.171 0.527-0.171 0.724v10.5c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-7.5c-0.461 0-0.965-0.311-1.171-0.724l-0.553-1.106c-0.038-0.077-0.191-0.171-0.276-0.171h-7z" />
        <path d="M13.817 8.113c-0.116-0.095-0.268-0.133-0.415-0.104l-5 1c-0.234 0.047-0.402 0.252-0.402 0.49v2.695c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-3.59l4-0.8v2.085c-0.293-0.124-0.633-0.195-1-0.195-1.122 0-2 0.659-2 1.5s0.878 1.5 2 1.5 2-0.659 2-1.5v-4c0-0.15-0.067-0.292-0.183-0.387zM7 14c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5zM12 13c-0.61 0-1-0.296-1-0.5s0.39-0.5 1-0.5 1 0.296 1 0.5-0.39 0.5-1 0.5z" />
      </g>
    </svg>
  );
}

LiniFolderMusic.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
