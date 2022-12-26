import React from "react";
import PropTypes from "prop-types";

export default function LiniConcave({
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
      className={`Component Lini LiniConcave ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0.5 18c-0.137 0-0.271-0.057-0.367-0.16-0.124-0.134-0.165-0.325-0.107-0.498 0.010-0.029 0.974-2.978 0.974-6.842s-0.965-6.813-0.974-6.842c-0.057-0.173-0.016-0.364 0.108-0.498s0.311-0.189 0.488-0.145c0.039 0.010 4.004 0.985 8.879 0.985 4.882 0 8.839-0.975 8.879-0.985 0.177-0.044 0.364 0.011 0.488 0.145s0.165 0.325 0.107 0.498c-0.010 0.029-0.974 2.978-0.974 6.842s0.965 6.813 0.974 6.842c0.057 0.173 0.016 0.364-0.108 0.498s-0.311 0.19-0.488 0.145c-0.046-0.012-4.008-0.985-8.879-0.985-4.882 0-8.839 0.975-8.879 0.985s-0.081 0.015-0.121 0.015zM9.5 16c3.717 0 6.853 0.537 8.289 0.83-0.303-1.175-0.789-3.497-0.789-6.33s0.485-5.155 0.789-6.33c-1.435 0.293-4.572 0.83-8.289 0.83s-6.853-0.537-8.289-0.83c0.303 1.175 0.789 3.497 0.789 6.33s-0.485 5.155-0.789 6.33c1.435-0.293 4.572-0.83 8.289-0.83z" />
      </g>
    </svg>
  );
}

LiniConcave.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
