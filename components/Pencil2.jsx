import React from "react";
import PropTypes from "prop-types";

export default function LiniPencil2({
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
      className={`Component Lini LiniPencil2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0.5 20c-0.13 0-0.258-0.051-0.354-0.146-0.137-0.137-0.183-0.342-0.116-0.524l2-5.5c0.025-0.069 0.065-0.131 0.116-0.183l13.5-13.5c0.195-0.195 0.512-0.195 0.707 0l3.5 3.5c0.195 0.195 0.195 0.512 0 0.707l-13.5 13.5c-0.052 0.052-0.114 0.091-0.183 0.116l-5.5 2c-0.056 0.020-0.113 0.030-0.171 0.030zM2.932 14.275l-1.596 4.389 4.389-1.596 13.068-13.068-2.793-2.793-13.068 13.068z" />
      </g>
    </svg>
  );
}

LiniPencil2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
