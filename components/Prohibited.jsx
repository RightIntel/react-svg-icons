import React from "react";
import PropTypes from "prop-types";

export default function LiniProhibited({
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
      className={`Component Lini LiniProhibited ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929s-5.182 1.040-7.071 2.929-2.929 4.4-2.929 7.071c0 2.671 1.040 5.182 2.929 7.071s4.4 2.929 7.071 2.929c2.671 0 5.182-1.040 7.071-2.929s2.929-4.4 2.929-7.071c0-2.671-1.040-5.182-2.929-7.071zM10 1c2.532 0 4.823 1.051 6.46 2.74l-13.575 11.765c-1.181-1.523-1.885-3.433-1.885-5.505 0-4.963 4.037-9 9-9zM10 19c-2.532 0-4.823-1.051-6.46-2.74l13.575-11.765c1.181 1.523 1.885 3.433 1.885 5.505 0 4.963-4.037 9-9 9z" />
      </g>
    </svg>
  );
}

LiniProhibited.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
