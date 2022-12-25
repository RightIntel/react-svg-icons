import React from "react";
import PropTypes from "prop-types";

export default function LiniPipe({
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
      className={`Component Lini LiniPipe ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.854 9.146c-0.117-0.117-1.18-1.146-2.354-1.146-2.76 0-5.405 1.961-8.205 4.037-0.728 0.54-1.476 1.094-2.23 1.615-0.021-0.084-0.045-0.167-0.072-0.251-0.040-0.335-0.284-0.709-0.776-1.194-0.333-0.328-0.661-0.588-0.675-0.599-0.217-0.171-0.531-0.134-0.702 0.083s-0.134 0.531 0.083 0.702c0.027 0.021 0.053 0.042 0.080 0.064-0.001 0.014-0.002 0.029-0.002 0.044 0 0.017-0.054 0.132-0.309 0.26-0.305 0.153-0.739 0.24-1.191 0.24s-0.885-0.088-1.191-0.24c-0.256-0.128-0.309-0.243-0.309-0.26 0-0.016-0.001-0.031-0.002-0.046 0.023-0.018 0.047-0.036 0.070-0.054 0.221-0.166 0.265-0.479 0.099-0.7s-0.479-0.265-0.7-0.099c-0.014 0.011-0.346 0.261-0.681 0.585-0.536 0.519-0.786 0.937-0.786 1.314v0.036c-0 1.028-0 2.582 0.466 3.903 0.271 0.768 0.673 1.374 1.194 1.799 0.619 0.505 1.406 0.762 2.34 0.762 1.032 0 2.072-0.435 3.275-1.37 1.019-0.792 2.032-1.846 3.104-2.962 2.554-2.657 5.449-5.668 9.121-5.668 0.202 0 0.385-0.122 0.462-0.309s0.035-0.402-0.108-0.545zM3.5 14c0.61 0 1.192-0.123 1.638-0.346 0.266-0.133 0.474-0.296 0.619-0.48 0.129 0.147 0.218 0.271 0.242 0.346-0.010 0.312-0.256 0.663-0.663 0.944-0.493 0.341-1.163 0.536-1.837 0.536s-1.344-0.196-1.837-0.536c-0.41-0.283-0.657-0.639-0.663-0.953 0.018-0.076 0.105-0.201 0.234-0.348 0.146 0.189 0.357 0.356 0.628 0.492 0.446 0.223 1.027 0.346 1.638 0.346zM9.658 14.975c-1.99 2.070-3.869 4.025-5.658 4.025-1.312 0-2.135-0.602-2.591-1.894-0.203-0.576-0.306-1.225-0.357-1.85 0.014 0.010 0.028 0.020 0.043 0.030 0.666 0.46 1.521 0.714 2.406 0.714s1.739-0.253 2.406-0.714c0.113-0.078 0.218-0.161 0.315-0.247-0.015 0.741-0.192 1.295-0.195 1.302-0.087 0.262 0.054 0.545 0.316 0.632 0.052 0.018 0.106 0.026 0.158 0.026 0.209 0 0.404-0.133 0.474-0.342 0.016-0.048 0.279-0.856 0.245-1.902 0.91-0.611 1.805-1.273 2.672-1.916 2.663-1.975 5.179-3.84 7.609-3.84 0.186 0 0.382 0.051 0.573 0.13-3.396 0.624-6.044 3.379-8.414 5.845z" />
        <path d="M3.5 12c-0.276 0-0.5-0.224-0.5-0.5 0-0.924-0.405-1.484-0.875-2.133-0.429-0.593-0.915-1.265-1.116-2.268-0.27-1.349 0.443-2.235 1.073-3.016 0.729-0.906 1.418-1.761 0.937-3.444-0.076-0.266 0.078-0.542 0.343-0.618s0.542 0.078 0.618 0.343c0.623 2.181-0.343 3.382-1.12 4.346-0.586 0.728-1.049 1.303-0.871 2.193 0.158 0.79 0.54 1.319 0.945 1.879 0.523 0.724 1.064 1.472 1.064 2.719 0 0.276-0.224 0.5-0.5 0.5z" />
      </g>
    </svg>
  );
}

LiniPipe.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
