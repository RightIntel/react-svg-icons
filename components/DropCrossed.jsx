import React from "react";
import PropTypes from "prop-types";

export default function LiniDropCrossed({
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
      className={`Component Lini LiniDropCrossed ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.829 3.124c-0.208-0.182-0.524-0.161-0.706 0.047l-2.758 3.152c-0.021-0.033-0.041-0.067-0.062-0.1-1.072-1.723-2.18-3.505-2.821-5.855-0.059-0.218-0.257-0.368-0.482-0.368s-0.423 0.151-0.482 0.368c-0.641 2.349-1.747 4.131-2.817 5.853-1.385 2.23-2.693 4.335-2.693 7.278 0 1.016 0.2 1.987 0.579 2.857l-2.462 2.814c-0.182 0.208-0.161 0.524 0.047 0.706 0.095 0.083 0.212 0.124 0.329 0.124 0.139 0 0.278-0.058 0.376-0.171l2.215-2.532c0.199 0.305 0.423 0.592 0.672 0.857 1.118 1.19 2.622 1.845 4.236 1.845 1.628 0 3.139-0.656 4.254-1.846 1.126-1.202 1.746-2.855 1.746-4.654 0-2.504-0.949-4.402-2.086-6.286l2.962-3.385c0.182-0.208 0.161-0.524-0.047-0.706zM5.007 13.5c0-2.658 1.178-4.554 2.543-6.751 0.876-1.411 1.776-2.859 2.45-4.636 0.675 1.777 1.576 3.227 2.454 4.638 0.075 0.12 0.149 0.24 0.223 0.359l-7.35 8.401c-0.207-0.617-0.32-1.293-0.32-2.010zM15 13.5c0 3.136-2.15 5.5-5 5.5-1.82 0-3.355-0.967-4.224-2.485l7.446-8.51c1.012 1.707 1.778 3.354 1.778 5.495z" />
      </g>
    </svg>
  );
}

LiniDropCrossed.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
