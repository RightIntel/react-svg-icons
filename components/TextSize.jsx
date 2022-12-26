import React from "react";
import PropTypes from "prop-types";

export default function LiniTextSize({
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
      className={`Component Lini LiniTextSize ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M6.96 16.303l-1.284-2.996c-0.001-0.001-0.001-0.003-0.002-0.004l-1.714-4c-0.079-0.184-0.26-0.303-0.46-0.303s-0.381 0.119-0.46 0.303l-1.714 4c-0.001 0.001-0.001 0.003-0.002 0.004l-1.284 2.996c-0.109 0.254 0.009 0.548 0.263 0.657s0.548-0.009 0.657-0.263l1.156-2.697h2.769l1.156 2.697c0.081 0.19 0.266 0.303 0.46 0.303 0.066 0 0.133-0.013 0.197-0.041 0.254-0.109 0.371-0.403 0.263-0.657zM2.544 13l0.956-2.231 0.956 2.231h-1.912z" />
        <path d="M19.962 16.308l-2.083-5c-0.001-0.001-0.001-0.003-0.002-0.004l-2.915-6.996c-0.078-0.186-0.26-0.308-0.462-0.308s-0.384 0.121-0.462 0.308l-2.915 6.996c-0.001 0.001-0.001 0.003-0.002 0.004l-2.083 5c-0.106 0.255 0.014 0.548 0.269 0.654s0.548-0.014 0.654-0.269l1.955-4.692h5.167l1.955 4.692c0.080 0.192 0.266 0.308 0.462 0.308 0.064 0 0.129-0.012 0.192-0.039 0.255-0.106 0.375-0.399 0.269-0.654zM12.333 11l2.167-5.2 2.167 5.2h-4.333z" />
      </g>
    </svg>
  );
}

LiniTextSize.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
