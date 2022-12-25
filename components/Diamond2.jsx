import React from "react";
import PropTypes from "prop-types";

export default function LiniDiamond2({
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
      className={`Component Lini LiniDiamond2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18.9 7.2l-3-4c-0.094-0.126-0.243-0.2-0.4-0.2h-12c-0.157 0-0.306 0.074-0.4 0.2l-3 4c-0.143 0.191-0.131 0.457 0.028 0.634l9 10c0.095 0.105 0.23 0.166 0.372 0.166s0.277-0.060 0.372-0.166l9-10c0.16-0.178 0.172-0.443 0.028-0.634zM11.828 8l-2.328 7.76-2.328-7.76h4.656zM7.5 7l2-2.667 2 2.667h-4zM10.5 4h4l-2 2.667-2-2.667zM6.5 6.667l-2-2.667h4l-2 2.667zM5.5 7h-4l2-2.667 2 2.667zM6.128 8l2.253 7.509-6.758-7.509h4.505zM12.872 8h4.505l-6.758 7.509 2.253-7.509zM13.5 7l2-2.667 2 2.667h-4z" />
      </g>
    </svg>
  );
}

LiniDiamond2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
