import React from "react";
import PropTypes from "prop-types";

export default function LiniArrowRightCircle({
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
      className={`Component Lini LiniArrowRightCircle ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.718-0.988-4.923-2.782-6.717zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5z" />
        <path d="M15.353 10.147l-4-4c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l3.147 3.146h-10.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h10.293l-3.146 3.147c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.353 0.146s0.256-0.049 0.353-0.147l4-4c0.195-0.195 0.195-0.512 0-0.707z" />
      </g>
    </svg>
  );
}

LiniArrowRightCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
