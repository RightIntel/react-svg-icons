import React from "react";
import PropTypes from "prop-types";

export default function LiniBottle2({
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
      className={`Component Lini LiniBottle2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M11 8.050v-5.050c0.551 0 1-0.449 1-1v-1c0-0.551-0.449-1-1-1h-3c-0.551 0-1 0.449-1 1v1c0 0.551 0.449 1 1 1v5.050c-1.14 0.232-2 1.242-2 2.45v8c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-8c0-1.207-0.86-2.217-2-2.45zM8 1h3l0 1h-3v-1zM12 18.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.827 0.673-1.5 1.5-1.5 0.276 0 0.5-0.224 0.5-0.5v-5.5h1v5.5c0 0.276 0.224 0.5 0.5 0.5 0.827 0 1.5 0.673 1.5 1.5v8z" />
      </g>
    </svg>
  );
}

LiniBottle2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
