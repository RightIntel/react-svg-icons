import React from "react";
import PropTypes from "prop-types";

export default function Lini__Name__({
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
      className={`Component Lini Lini__Name__ ${className}`}
      {...moreProps}
    >
      <g fill={color}>__paths__</g>
    </svg>
  );
}

Lini__Name__.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
