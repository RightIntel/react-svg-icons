import React from "react";
import PropTypes from "prop-types";

export default function LiniCircle({
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
      className={`Component Lini LiniCircle ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M10 20c-2.671 0-5.182-1.040-7.071-2.929s-2.929-4.4-2.929-7.071c0-2.671 1.040-5.182 2.929-7.071s4.4-2.929 7.071-2.929c2.671 0 5.182 1.040 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.040 5.182-2.929 7.071s-4.4 2.929-7.071 2.929zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9c4.963 0 9-4.037 9-9s-4.037-9-9-9z" />
      </g>
    </svg>
  );
}

LiniCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
