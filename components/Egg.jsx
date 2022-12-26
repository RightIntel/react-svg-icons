import React from "react";
import PropTypes from "prop-types";

export default function LiniEgg({
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
      className={`Component Lini LiniEgg ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 20c-2.003 0-3.887-0.78-5.303-2.197s-2.197-3.3-2.197-5.303c0-1.874 0.359-3.694 1.066-5.408 0.726-1.758 1.798-3.354 3.187-4.743 0.865-0.865 2.018-1.342 3.247-1.342s2.381 0.477 3.247 1.342c1.389 1.389 2.462 2.985 3.187 4.743 0.708 1.714 1.066 3.534 1.066 5.408 0 2.003-0.78 3.887-2.197 5.303s-3.3 2.197-5.303 2.197zM9.5 2.006c-0.961 0-1.863 0.373-2.539 1.049-2.554 2.554-3.961 5.908-3.961 9.445 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-3.536-1.407-6.891-3.961-9.445-0.677-0.677-1.578-1.049-2.539-1.049z" />
      </g>
    </svg>
  );
}

LiniEgg.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
