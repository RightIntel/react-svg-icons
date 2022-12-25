import React from "react";
import PropTypes from "prop-types";

export default function LiniDumbbell({
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
      className={`Component Lini LiniDumbbell ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0.5 12c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M19.5 12c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 7c-0.175 0-0.343 0.031-0.5 0.086v-0.586c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v3.5h-8v-3.5c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v0.586c-0.157-0.056-0.325-0.086-0.5-0.086-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5 0.175 0 0.343-0.031 0.5-0.086v0.586c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-3.5h8v3.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-0.586c0.157 0.056 0.325 0.086 0.5 0.086 0.827 0 1.5-0.673 1.5-1.5v-4c0-0.827-0.673-1.5-1.5-1.5zM2.5 13c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5zM5 14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8zM16 14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8zM18 12.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4z" />
      </g>
    </svg>
  );
}

LiniDumbbell.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
