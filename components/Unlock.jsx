import React from "react";
import PropTypes from "prop-types";

export default function LiniUnlock({
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
      className={`Component Lini LiniUnlock ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13.5 1c-2.481 0-4.5 2.019-4.5 4.5v2.5h-7.5c-0.827 0-1.5 0.673-1.5 1.5v8c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5h-1.5v-2.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1c0-2.481-2.019-4.5-4.5-4.5zM11.5 9c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h10z" />
      </g>
    </svg>
  );
}

LiniUnlock.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
