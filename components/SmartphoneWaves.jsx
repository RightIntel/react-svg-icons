import React from "react";
import PropTypes from "prop-types";

export default function LiniSmartphoneWaves({
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
      className={`Component Lini LiniSmartphoneWaves ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M12.5 16h-5c-0.827 0-1.5-0.673-1.5-1.5v-9c0-0.827 0.673-1.5 1.5-1.5h5c0.827 0 1.5 0.673 1.5 1.5v9c0 0.827-0.673 1.5-1.5 1.5zM7.5 5c-0.276 0-0.5 0.224-0.5 0.5v9c0 0.276 0.224 0.5 0.5 0.5h5c0.276 0 0.5-0.224 0.5-0.5v-9c0-0.276-0.224-0.5-0.5-0.5h-5z" />
        <path d="M10.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M15.5 6c-0.276 0-0.5-0.224-0.5-0.5 0-1.378-1.122-2.5-2.5-2.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c1.93 0 3.5 1.57 3.5 3.5 0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M17.5 6c-0.276 0-0.5-0.224-0.5-0.5 0-2.481-2.019-4.5-4.5-4.5-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c3.033 0 5.5 2.467 5.5 5.5 0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M7.5 18c-1.93 0-3.5-1.57-3.5-3.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.378 1.122 2.5 2.5 2.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
        <path d="M7.5 20c-3.033 0-5.5-2.467-5.5-5.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 2.481 2.019 4.5 4.5 4.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniSmartphoneWaves.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
