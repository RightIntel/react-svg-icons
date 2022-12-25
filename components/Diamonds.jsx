import React from "react";
import PropTypes from "prop-types";

export default function LiniDiamonds({
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
      className={`Component Lini LiniDiamonds ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M9.5 20c-0.154 0-0.3-0.071-0.395-0.193l-7-9c-0.14-0.181-0.14-0.433 0-0.614l7-9c0.095-0.122 0.24-0.193 0.395-0.193s0.3 0.071 0.395 0.193l7 9c0.14 0.181 0.14 0.433 0 0.614l-7 9c-0.095 0.122-0.24 0.193-0.395 0.193zM3.133 10.5l6.367 8.186 6.367-8.186-6.367-8.186-6.367 8.186z" />
      </g>
    </svg>
  );
}

LiniDiamonds.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
