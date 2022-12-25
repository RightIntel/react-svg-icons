import React from "react";
import PropTypes from "prop-types";

export default function LiniWoman({
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
      className={`Component Lini LiniWoman ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.5 20h-15c-0.147 0-0.287-0.065-0.382-0.177s-0.136-0.26-0.112-0.405c0.272-1.632 0.55-2.669 1.238-3.473 0.687-0.803 1.741-1.317 3.638-1.773 0.365-0.088 0.918-0.726 1.084-1.417 0.12-0.5 0.022-0.891-0.292-1.161-1.037-0.889-1.414-2.224-1.548-3.187-0.162-1.168-0.034-2.235 0.166-2.774 0.193-0.523 0.492-0.633 0.708-0.633 0.444 0 1.795 0 2.649-0.854 0.094-0.094 0.221-0.146 0.354-0.146s0.26 0.053 0.354 0.146c0.854 0.854 2.201 0.854 2.644 0.854 0.216 0 0.515 0.11 0.708 0.633 0.199 0.539 0.328 1.606 0.166 2.774-0.134 0.963-0.511 2.298-1.548 3.187-0.333 0.286-0.443 0.679-0.325 1.168 0.164 0.682 0.735 1.318 1.117 1.41 1.897 0.456 2.951 0.97 3.638 1.773 0.688 0.804 0.966 1.841 1.238 3.473 0.024 0.145-0.017 0.293-0.112 0.405s-0.235 0.177-0.382 0.177zM3.096 19h13.809c-0.458-2.434-1.046-3.14-4.021-3.856-0.796-0.192-1.611-1.135-1.855-2.148-0.207-0.859 0.023-1.627 0.646-2.161 0.912-0.782 1.168-2.105 1.239-2.824 0.096-0.964-0.034-1.717-0.136-2.012-0.611-0.011-1.803-0.102-2.776-0.837-0.974 0.735-2.168 0.826-2.78 0.837-0.102 0.296-0.231 1.048-0.136 2.012 0.071 0.719 0.327 2.042 1.239 2.824 0.605 0.519 0.823 1.284 0.614 2.154-0.246 1.022-1.046 1.969-1.822 2.155-2.975 0.716-3.564 1.422-4.021 3.856z" />
        <path d="M13.5 13c-0.183 0-0.36-0.101-0.448-0.277-0.123-0.247-0.023-0.547 0.224-0.671 0.919-0.46 2.51-0.779 3.435-0.936-0.9-1.712-1.375-3.504-1.765-4.975-0.153-0.577-0.285-1.075-0.421-1.483-0.439-1.318-1.397-2.271-2.562-2.55-0.672-0.161-1.31-0.064-1.625 0.248-0.094 0.092-0.22 0.144-0.351 0.144-0.001 0-0.002 0-0.003 0-0.133-0.001-0.259-0.054-0.353-0.149-0.295-0.299-0.929-0.399-1.577-0.248-1.173 0.273-2.137 1.228-2.579 2.555-0.137 0.41-0.269 0.91-0.423 1.488-0.391 1.476-0.868 3.273-1.774 4.99 0.994 0.193 2.742 0.565 3.445 0.917 0.247 0.123 0.347 0.424 0.224 0.671s-0.424 0.347-0.671 0.224c-0.696-0.348-3.025-0.807-3.863-0.955-0.162-0.029-0.3-0.135-0.368-0.285s-0.059-0.324 0.026-0.465c1.065-1.776 1.591-3.759 2.014-5.353 0.158-0.594 0.294-1.108 0.44-1.548 0.553-1.66 1.788-2.861 3.302-3.213 0.814-0.189 1.602-0.094 2.162 0.244 0.575-0.342 1.379-0.435 2.207-0.237 0.689 0.165 1.343 0.517 1.891 1.016 0.627 0.572 1.093 1.308 1.387 2.19 0.146 0.438 0.282 0.95 0.439 1.543 0.423 1.595 0.949 3.581 2.015 5.358 0.087 0.144 0.095 0.322 0.022 0.474s-0.217 0.256-0.384 0.279c-0.027 0.004-2.668 0.364-3.843 0.952-0.072 0.036-0.148 0.053-0.223 0.053z" />
      </g>
    </svg>
  );
}

LiniWoman.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
