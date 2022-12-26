import React from "react";
import PropTypes from "prop-types";

export default function LiniStopCircle({
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
      className={`Component Lini LiniStopCircle ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z" />
        <path d="M12.5 15h-6c-0.827 0-1.5-0.673-1.5-1.5v-6c0-0.827 0.673-1.5 1.5-1.5h6c0.827 0 1.5 0.673 1.5 1.5v6c0 0.827-0.673 1.5-1.5 1.5zM6.5 7c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5h6c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5h-6z" />
      </g>
    </svg>
  );
}

LiniStopCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
