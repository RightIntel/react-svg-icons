import React from "react";
import PropTypes from "prop-types";

export default function LiniAccessibility({
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
      className={`Component Lini LiniAccessibility ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 8c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9.5 4c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5z" />
        <path d="M13.985 8.379c-0.067-0.268-0.338-0.431-0.606-0.364l-3.879 0.97-3.879-0.97c-0.268-0.067-0.539 0.096-0.606 0.364s0.096 0.539 0.364 0.606l3.621 0.905v2.443l-2.9 3.867c-0.166 0.221-0.121 0.534 0.1 0.7s0.534 0.121 0.7-0.1l2.6-3.467 2.6 3.467c0.098 0.131 0.248 0.2 0.4 0.2 0.104 0 0.21-0.033 0.3-0.1 0.221-0.166 0.266-0.479 0.1-0.7l-2.9-3.867v-2.443l3.621-0.905c0.268-0.067 0.431-0.338 0.364-0.606z" />
        <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
      </g>
    </svg>
  );
}

LiniAccessibility.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
