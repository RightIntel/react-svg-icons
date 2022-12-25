import React from "react";
import PropTypes from "prop-types";

export default function LiniLabel({
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
      className={`Component Lini LiniLabel ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M12.5 17h-11c-0.827 0-1.5-0.673-1.5-1.5v-10c0-0.827 0.673-1.5 1.5-1.5h11c0.704 0 1.574 0.408 2.024 0.948l3.72 4.464c0.509 0.61 0.509 1.566-0 2.177l-3.72 4.464c-0.45 0.541-1.321 0.948-2.024 0.948zM1.5 5c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h11c0.401 0 0.999-0.28 1.256-0.588l3.72-4.464c0.199-0.239 0.199-0.658 0-0.896l-3.72-4.464c-0.257-0.308-0.855-0.588-1.256-0.588h-11z" />
      </g>
    </svg>
  );
}

LiniLabel.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
