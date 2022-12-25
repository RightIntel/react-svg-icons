import React from "react";
import PropTypes from "prop-types";

export default function LiniSortNumericDesc({
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
      className={`Component Lini LiniSortNumericDesc ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M8.854 14.646c-0.195-0.195-0.512-0.195-0.707 0l-3.146 3.146v-17.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v17.293l-3.146-3.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l4 4c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l4-4c0.195-0.195 0.195-0.512 0-0.707z" />
        <path d="M17.5 8h-2c-1.483 0-2.363-1.151-2.4-1.2-0.166-0.221-0.121-0.534 0.1-0.7s0.534-0.121 0.7 0.1c0.004 0.006 0.626 0.8 1.6 0.8h2c0.827 0 1.5-0.673 1.5-1.5v-0.5h-3.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5h2c1.378 0 2.5 1.122 2.5 2.5v3c0 1.378-1.122 2.5-2.5 2.5zM15.5 1c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5h3.5v-1.5c0-0.827-0.673-1.5-1.5-1.5h-2z" />
        <path d="M17.5 12h-2c-1.378 0-2.5 1.122-2.5 2.5v3c0 1.378 1.122 2.5 2.5 2.5h2c1.378 0 2.5-1.122 2.5-2.5v-3c0-1.378-1.122-2.5-2.5-2.5zM14 14.5c0-0.827 0.673-1.5 1.5-1.5h2c0.27 0 0.524 0.072 0.743 0.198l-4.145 4.836c-0.063-0.166-0.098-0.346-0.098-0.534v-3zM19 17.5c0 0.827-0.673 1.5-1.5 1.5h-2c-0.27 0-0.524-0.072-0.743-0.198l4.145-4.836c0.063 0.166 0.098 0.346 0.098 0.533v3z" />
      </g>
    </svg>
  );
}

LiniSortNumericDesc.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
