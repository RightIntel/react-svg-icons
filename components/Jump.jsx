import React from "react";
import PropTypes from "prop-types";

export default function LiniJump({
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
      className={`Component Lini LiniJump ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M13 4c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM13 1c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z" />
        <path d="M9.5 20c-0.062 0-0.125-0.012-0.186-0.036-0.256-0.103-0.381-0.394-0.279-0.65l1.878-4.694-2.767-2.767c-0.152-0.152-0.19-0.385-0.094-0.577l2.638-5.276h-3.040l-2.874 1.916c-0.23 0.153-0.54 0.091-0.693-0.139s-0.091-0.54 0.139-0.693l3-2c0.082-0.055 0.179-0.084 0.277-0.084h4c0.173 0 0.334 0.090 0.425 0.237s0.099 0.331 0.022 0.486l-2.839 5.678 2.745 2.745c0.141 0.141 0.185 0.354 0.111 0.539l-2 5c-0.078 0.195-0.266 0.314-0.464 0.314z" />
        <path d="M5.5 10c-0.148 0-0.294-0.065-0.393-0.19-0.171-0.217-0.134-0.531 0.083-0.702l2-1.578c0.035-0.028 0.074-0.051 0.115-0.068l1-0.422c0.254-0.107 0.548 0.012 0.655 0.266s-0.012 0.548-0.266 0.655l-0.938 0.396-1.947 1.536c-0.092 0.072-0.201 0.107-0.309 0.107z" />
      </g>
    </svg>
  );
}

LiniJump.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
