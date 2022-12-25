import React from "react";
import PropTypes from "prop-types";

export default function LiniPencil4({
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
      className={`Component Lini LiniPencil4 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M3.5 17c-0.13 0-0.258-0.051-0.354-0.147-0.137-0.137-0.183-0.342-0.116-0.524l2-5.5c0.025-0.069 0.065-0.131 0.116-0.183l10.5-10.5c0.195-0.195 0.512-0.195 0.707 0l3.5 3.5c0.195 0.195 0.195 0.512 0 0.707l-10.5 10.5c-0.052 0.052-0.114 0.091-0.183 0.116l-5.5 2c-0.056 0.020-0.113 0.030-0.171 0.030zM5.932 11.275l-1.596 4.389 4.389-1.596 10.068-10.068-2.793-2.793-10.068 10.068z" />
        <path d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v10c0 0.827-0.673 1.5-1.5 1.5z" />
      </g>
    </svg>
  );
}

LiniPencil4.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
