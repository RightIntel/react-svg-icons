import React from "react";
import PropTypes from "prop-types";

export default function LiniUnlink({
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
      className={`Component Lini LiniUnlink ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M5.5 6c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M4.5 8h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M7.5 5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M16.5 17c-0.128 0-0.256-0.049-0.354-0.146l-2-2c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2 2c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
        <path d="M18.5 13h-3c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M12.5 19c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M14 11c-0.185 0-0.372-0.010-0.555-0.031-0.274-0.030-0.472-0.277-0.442-0.552s0.278-0.473 0.552-0.442c0.147 0.016 0.296 0.024 0.445 0.024 2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 0.149 0.008 0.298 0.024 0.445 0.030 0.274-0.168 0.522-0.442 0.552s-0.522-0.168-0.552-0.442c-0.020-0.183-0.030-0.37-0.030-0.555 0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5z" />
        <path d="M6 19c-2.757 0-5-2.243-5-5s2.243-5 5-5c0.185 0 0.372 0.010 0.555 0.031 0.274 0.030 0.472 0.277 0.442 0.552s-0.277 0.472-0.552 0.442c-0.147-0.016-0.296-0.024-0.445-0.024-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4c0-0.148-0.008-0.298-0.024-0.445-0.030-0.274 0.168-0.522 0.442-0.552s0.522 0.168 0.552 0.442c0.020 0.183 0.031 0.37 0.031 0.555 0 2.757-2.243 5-5 5z" />
      </g>
    </svg>
  );
}

LiniUnlink.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
