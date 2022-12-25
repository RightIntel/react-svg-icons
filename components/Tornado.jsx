import React from "react";
import PropTypes from "prop-types";

export default function LiniTornado({
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
      className={`Component Lini LiniTornado ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M10 5c-2.571 0-4.993-0.212-6.821-0.597-0.914-0.192-1.639-0.42-2.156-0.677-0.679-0.338-1.024-0.751-1.024-1.226s0.344-0.888 1.024-1.226c0.516-0.257 1.242-0.485 2.156-0.677 1.827-0.385 4.249-0.597 6.821-0.597 1.223 0 2.414 0.048 3.542 0.142 0.275 0.023 0.48 0.265 0.457 0.54s-0.265 0.48-0.54 0.457c-1.1-0.092-2.263-0.138-3.458-0.138-2.383 0-4.65 0.188-6.384 0.528-2.139 0.42-2.547 0.881-2.609 0.972 0.061 0.091 0.47 0.552 2.609 0.972 1.733 0.341 4.001 0.528 6.384 0.528s4.65-0.188 6.384-0.528c2.266-0.445 2.59-0.936 2.616-0.984 0.007-0.27 0.228-0.488 0.5-0.488 0.276 0 0.5 0.224 0.5 0.5 0 0.475-0.344 0.888-1.024 1.226-0.516 0.257-1.242 0.485-2.156 0.677-1.827 0.385-4.249 0.597-6.821 0.597z" />
        <path d="M9 17c-1.27 0-2.473-0.223-3.385-0.629-1.041-0.463-1.615-1.127-1.615-1.871 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.311 0.391 0.677 1.021 0.957 0.787 0.35 1.845 0.543 2.979 0.543s2.192-0.193 2.979-0.543c0.63-0.28 1.021-0.647 1.021-0.957 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.744-0.574 1.408-1.615 1.871-0.912 0.406-2.115 0.629-3.385 0.629z" />
        <path d="M10 20c-2.243 0-4-1.098-4-2.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.709 1.232 1.5 3 1.5s3-0.791 3-1.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.402-1.757 2.5-4 2.5z" />
        <path d="M9 11c-2.046 0-3.975-0.214-5.432-0.603-1.704-0.454-2.568-1.093-2.568-1.897 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.094 0.31 0.527 1.826 0.931 1.376 0.367 3.213 0.569 5.174 0.569s3.799-0.202 5.174-0.569c1.516-0.404 1.826-0.837 1.826-0.931 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.805-0.864 1.443-2.568 1.897-1.457 0.389-3.387 0.603-5.432 0.603z" />
        <path d="M8.5 14c-1.655 0-3.218-0.217-4.401-0.611-1.735-0.578-2.099-1.346-2.099-1.889 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.162 0.296 0.567 1.415 0.94 1.084 0.361 2.534 0.56 4.085 0.56s3.001-0.199 4.085-0.56c1.12-0.373 1.415-0.778 1.415-0.94 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 0.542-0.364 1.31-2.099 1.889-1.183 0.394-2.746 0.611-4.401 0.611z" />
        <path d="M9.5 8c-2.439 0-4.738-0.212-6.472-0.598-2.037-0.453-3.028-1.075-3.028-1.902 0-0.276 0.224-0.5 0.5-0.5 0.274 0 0.497 0.221 0.5 0.494 0.043 0.132 0.573 0.583 2.43 0.972 1.643 0.344 3.799 0.534 6.070 0.534s4.427-0.19 6.070-0.534c1.857-0.389 2.387-0.84 2.43-0.972 0.003-0.273 0.226-0.494 0.5-0.494 0.276 0 0.5 0.224 0.5 0.5 0 0.827-0.99 1.45-3.028 1.902-1.734 0.385-4.033 0.598-6.472 0.598z" />
      </g>
    </svg>
  );
}

LiniTornado.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
