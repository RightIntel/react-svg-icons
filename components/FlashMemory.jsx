import React from "react";
import PropTypes from "prop-types";

export default function LiniFlashMemory({
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
      className={`Component Lini LiniFlashMemory ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.5 20h-13c-0.827 0-1.5-0.673-1.5-1.5v-12.5c0-0.688 0.367-1.574 0.854-2.061l3.086-3.086c0.487-0.487 1.373-0.854 2.061-0.854h8.5c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM8 1c-0.415 0-1.060 0.267-1.354 0.561l-3.086 3.086c-0.293 0.293-0.561 0.939-0.561 1.354v12.5c0 0.276 0.224 0.5 0.5 0.5h13c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-8.5z" />
        <path d="M15.5 5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M11.5 5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M9.5 5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M7.5 5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M13.5 5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniFlashMemory.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
