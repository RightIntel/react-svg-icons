import React from "react";
import PropTypes from "prop-types";

export default function LiniChevronsExpandHorizontal({
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
      className={`Component Lini LiniChevronsExpandHorizontal ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M12.5 15.5c0-0.128 0.049-0.256 0.146-0.354l5.646-5.646-5.646-5.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l6 6c0.195 0.195 0.195 0.512 0 0.707l-6 6c-0.195 0.195-0.512 0.195-0.707 0-0.098-0.098-0.146-0.226-0.146-0.354z" />
        <path d="M0.5 9.5c0-0.128 0.049-0.256 0.146-0.354l6-6c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5.646 5.646 5.646 5.646c0.195 0.195 0.195 0.512 0 0.707s-0.512 0.195-0.707 0l-6-6c-0.098-0.098-0.146-0.226-0.146-0.354z" />
      </g>
    </svg>
  );
}

LiniChevronsExpandHorizontal.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
