import React from "react";
import PropTypes from "prop-types";

export default function LiniMic({
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
      className={`Component Lini LiniMic ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 14c-1.93 0-3.5-1.57-3.5-3.5v-6c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v6c0 1.93-1.57 3.5-3.5 3.5zM9.5 2c-1.378 0-2.5 1.122-2.5 2.5v6c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5v-6c0-1.378-1.122-2.5-2.5-2.5z" />
        <path d="M16 10.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 3.033-2.467 5.5-5.5 5.5s-5.5-2.467-5.5-5.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 3.416 2.649 6.225 6 6.481v2.019h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-2.019c3.351-0.256 6-3.065 6-6.481z" />
      </g>
    </svg>
  );
}

LiniMic.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
