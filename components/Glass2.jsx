import React from "react";
import PropTypes from "prop-types";

export default function LiniGlass2({
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
      className={`Component Lini LiniGlass2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M16.5 0h-3c-0.783 0-1.536 0.597-1.716 1.359l-1.321 5.612c-0.314 0.019-0.637 0.029-0.964 0.029-1.219 0-2.377-0.135-3.261-0.381s-1.176-0.516-1.23-0.608l-0.003-0.018c0.046-0.086 0.332-0.363 1.233-0.613 0.884-0.245 2.042-0.381 3.261-0.381 0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c-1.383 0-2.689 0.163-3.679 0.46-0.511 0.153-0.921 0.338-1.217 0.548-0.499 0.354-0.604 0.735-0.604 0.992 0 0.075 0.009 0.161 0.034 0.253l1.967 12.296c0.028 0.465 0.458 0.839 1.278 1.113 0.645 0.215 1.454 0.338 2.221 0.338 0.763 0 1.568-0.123 2.209-0.339 0.807-0.271 1.24-0.641 1.288-1.1l1.969-12.309c0.025-0.092 0.034-0.178 0.034-0.253 0-0.006-0-0.011-0-0.017-0-0.002-0-0.005-0-0.007-0.013-0.546-0.455-0.997-1.314-1.34-0.256-0.102-0.547 0.022-0.65 0.279s0.023 0.547 0.279 0.65c0.477 0.19 0.646 0.364 0.68 0.429l-0.003 0.018c-0.054 0.091-0.346 0.362-1.23 0.608-0.372 0.103-0.793 0.187-1.246 0.249l1.242-5.281c0.072-0.308 0.426-0.588 0.742-0.588h3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM13.179 7.54c0.22-0.066 0.421-0.138 0.602-0.215l-1.773 11.079c-0.177 0.192-1.168 0.597-2.509 0.597-0.582 0-1.188-0.080-1.706-0.226-0.498-0.14-0.731-0.292-0.801-0.358l-1.775-11.092c0.181 0.077 0.382 0.149 0.602 0.215 0.99 0.297 2.296 0.46 3.679 0.46 0.245 0 0.487-0.005 0.725-0.015l-0.709 3.015c-0.005 0-0.010 0-0.016 0-1.501 0-2.361-0.372-2.502-0.545-0.023-0.255-0.237-0.455-0.498-0.455-0.276 0-0.5 0.224-0.5 0.5 0 0.993 1.614 1.46 3.281 1.497l-1.268 5.388c-0.063 0.269 0.103 0.538 0.372 0.601 0.038 0.009 0.077 0.013 0.115 0.013 0.227-0 0.432-0.155 0.486-0.386l1.329-5.649c1.435-0.125 2.684-0.592 2.684-1.465 0-0.276-0.224-0.5-0.5-0.5-0.261 0-0.475 0.2-0.498 0.455-0.104 0.127-0.595 0.361-1.443 0.476l0.712-3.025c0.707-0.077 1.357-0.201 1.908-0.367z" />
      </g>
    </svg>
  );
}

LiniGlass2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
