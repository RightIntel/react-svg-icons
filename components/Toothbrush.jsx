import React from "react";
import PropTypes from "prop-types";

export default function LiniToothbrush({
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
      className={`Component Lini LiniToothbrush ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M1.5 14c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M3.5 14c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M5.5 14c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M7.5 14c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M19.5 18h-18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5h18c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-18c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h18c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M9.5 14c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M9 9h-6c-1.654 0-3-1.346-3-3s1.346-3 3-3h0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.5c1.103 0 2 0.897 2 2s-0.897 2-2 2zM2.020 4.257c-0.608 0.343-1.020 0.996-1.020 1.743 0 1.103 0.897 2 2 2h6c0.551 0 1-0.449 1-1s-0.449-1-1-1h-5.5c-0.827 0-1.5-0.673-1.5-1.5 0-0.083 0.007-0.164 0.020-0.243z" />
      </g>
    </svg>
  );
}

LiniToothbrush.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
