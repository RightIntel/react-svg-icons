import React from "react";
import PropTypes from "prop-types";

export default function LiniMouse({
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
      className={`Component Lini LiniMouse ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.496 5.029c-0.26-0.092-0.546 0.044-0.638 0.305-0.352 0.997-1.3 1.667-2.358 1.667-1.365 0-2.294-1.299-2.507-2.582-0.187-1.129-0.69-2.192-1.417-2.994-0.845-0.932-1.909-1.424-3.076-1.424-2.319 0-4.234 1.764-4.474 4.021-2.811 0.241-5.026 2.606-5.026 5.479v5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5v-5c0-2.853-2.184-5.206-4.968-5.474 0.232-1.706 1.699-3.026 3.468-3.026 1.913 0 3.212 1.802 3.507 3.582 0.145 0.878 0.534 1.701 1.095 2.317 0.655 0.72 1.485 1.101 2.398 1.101 1.481 0 2.807-0.938 3.301-2.333 0.092-0.26-0.044-0.546-0.305-0.638zM5 5.028v3.972h-3.972c0.231-2.083 1.889-3.741 3.972-3.972zM5.5 19c-2.481 0-4.5-2.019-4.5-4.5v-4.5h9v4.5c0 2.481-2.019 4.5-4.5 4.5zM9.972 9h-3.972v-3.972c2.083 0.231 3.741 1.889 3.972 3.972z" />
      </g>
    </svg>
  );
}

LiniMouse.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
