import React from "react";
import PropTypes from "prop-types";

export default function LiniChevronDownCircle({
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
      className={`Component Lini LiniChevronDownCircle ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.218 17.218c1.794-1.794 2.782-4.18 2.782-6.718s-0.988-4.923-2.782-6.717-4.18-2.782-6.718-2.782-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782zM1 10.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5z" />
        <path d="M4 9c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l4.646 4.646 4.646-4.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-5 5c-0.195 0.195-0.512 0.195-0.707 0l-5-5c-0.098-0.098-0.146-0.226-0.146-0.354z" />
      </g>
    </svg>
  );
}

LiniChevronDownCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
