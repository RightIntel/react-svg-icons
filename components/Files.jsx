import React from "react";
import PropTypes from "prop-types";

export default function LiniFiles({
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
      className={`Component Lini LiniFiles ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.5 4h-0.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-0.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-7.5c-0.133 0-0.26 0.053-0.354 0.146l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v10.5c0 0.827 0.673 1.5 1.5 1.5h0.5v0.5c0 0.827 0.673 1.5 1.5 1.5h0.5v0.5c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM5 1.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793zM2 14.5v-9.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h6.5c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5zM4 16.5v-0.5h8.5c0.827 0 1.5-0.673 1.5-1.5v-11.5h0.5c0.276 0 0.5 0.224 0.5 0.5v13c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-0.5h8.5c0.827 0 1.5-0.673 1.5-1.5v-11.5h0.5c0.276 0 0.5 0.224 0.5 0.5v13z" />
      </g>
    </svg>
  );
}

LiniFiles.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
