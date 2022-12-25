import React from "react";
import PropTypes from "prop-types";

export default function LiniQuoteOpen({
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
      className={`Component Lini LiniQuoteOpen ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M4.5 8c-0.924 0-1.783 0.28-2.499 0.759 1.297-2.245 3.725-3.759 6.499-3.759 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-2.27 0-4.405 0.884-6.010 2.49s-2.49 3.74-2.49 6.010c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM4.5 16c-1.93 0-3.5-1.57-3.5-3.5 0-0.030 0.001-0.060 0.001-0.090 0.048-1.888 1.599-3.41 3.499-3.41 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z" />
        <path d="M15.5 8c-0.924 0-1.783 0.28-2.499 0.759 1.297-2.245 3.725-3.759 6.499-3.759 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-2.27 0-4.405 0.884-6.010 2.49s-2.49 3.74-2.49 6.010c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM15.5 16c-1.93 0-3.5-1.57-3.5-3.5 0-0.030 0.001-0.060 0.001-0.090 0.048-1.888 1.599-3.41 3.499-3.41 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z" />
      </g>
    </svg>
  );
}

LiniQuoteOpen.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
