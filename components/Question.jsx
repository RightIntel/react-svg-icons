import React from "react";
import PropTypes from "prop-types";

export default function LiniQuestion({
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
      className={`Component Lini LiniQuestion ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 17c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5 3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5-5.5 2.467-5.5 5.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5c0 3.416-2.649 6.225-6 6.481v2.519c0 0.276-0.224 0.5-0.5 0.5z" />
        <path d="M9.5 20c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniQuestion.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
