import React from "react";
import PropTypes from "prop-types";

export default function LiniShutter2({
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
      className={`Component Lini LiniShutter2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M20 15.49v-4.989c0-0 0-0 0-0v-4.997c0-0.002 0-0.003 0-0.005v-4.998c0-0.276-0.224-0.5-0.5-0.5h-5.008c-0.001 0-0.002 0-0.003 0h-10.986c-0.002 0-0.004 0-0.005 0h-2.998c-0.276 0-0.5 0.224-0.5 0.5v4.009c0 0 0 0.001 0 0.001v9.987c0 0.002 0 0.003 0 0.005v4.998c0 0.276 0.224 0.5 0.5 0.5h4.997c0.001 0 0.002 0 0.003 0s0.002-0 0.003-0h10.994c0.001 0 0.002 0 0.003 0s0.002-0 0.003-0h2.997c0.276 0 0.5-0.224 0.5-0.5v-4.009c0-0.001 0-0.001 0-0.002zM16.576 19l-8.537-2.668-4.602-4.602-2.437-7.311v-3.419h2.424l8.537 2.668 4.602 4.602 2.437 7.311v3.419h-2.424zM10.707 19l-1.144-1.144 3.661 1.144h-2.517zM5.86 19l-0.856-2.569 2.502 0.782 1.787 1.787h-3.433zM1 7.581l0.856 2.568-0.856-0.856v-1.712zM1 10.707l1.563 1.563 0.875 2.624-2.438-0.762v-3.425zM4.144 13.851l1.838 1.838-1.368-0.427-0.47-1.411zM9.293 1l1.144 1.144-3.661-1.144h2.517zM14.14 1l0.856 2.569-2.502-0.782-1.787-1.787h3.433zM19 9.293l-1.563-1.563-0.875-2.624 2.438 0.762v3.425zM15.856 6.149l-1.838-1.838 1.368 0.427 0.47 1.411zM18.144 9.851l0.856 0.856v1.712l-0.856-2.568zM19 4.82l-2.828-0.884-0.979-2.936h3.806v3.82zM1 15.18l2.828 0.884 0.979 2.936h-3.806v-3.82z" />
      </g>
    </svg>
  );
}

LiniShutter2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
