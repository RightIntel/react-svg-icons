import React from "react";
import PropTypes from "prop-types";

export default function LiniFolderPlus({
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
      className={`Component Lini LiniFolderPlus ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-10.5c0-0.352 0.119-0.856 0.276-1.171l0.553-1.106c0.206-0.413 0.71-0.724 1.171-0.724h7c0.461 0 0.964 0.311 1.171 0.724l0.553 1.106c0.038 0.077 0.191 0.171 0.276 0.171h7.5c0.827 0 1.5 0.673 1.5 1.5v10c0 0.827-0.673 1.5-1.5 1.5zM2 4c-0.086 0-0.238 0.094-0.276 0.171l-0.553 1.106c-0.088 0.176-0.171 0.527-0.171 0.724v10.5c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5h-7.5c-0.461 0-0.965-0.311-1.171-0.724l-0.553-1.106c-0.038-0.077-0.191-0.171-0.276-0.171h-7z" />
        <path d="M12.5 11h-2.5v-2.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v2.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniFolderPlus.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
