import React from "react";
import PropTypes from "prop-types";

export default function LiniThumbsDown2({
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
      className={`Component Lini LiniThumbsDown2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.436 11.745c-0.487 0.868-1.145 1.069-1.834 1.213-0.381 0.080-1.006 0.064-1.668 0.047-0.424-0.011-1.061-0.027-1.233 0.016-0.074 0.039-0.259 0.16-0.339 0.431-0.094 0.319-0.073 0.917 0.564 1.959 0.212 0.347 0.34 0.942 0.342 1.589 0.002 0.723-0.154 1.401-0.438 1.907-0.401 0.715-1.034 1.092-1.831 1.092-0.191 0-0.365-0.109-0.449-0.28-0.386-0.789-1.184-2.518-1.956-4.191-0.682-1.479-1.327-2.876-1.542-3.306-0.046-0.091-0.086-0.176-0.125-0.258-0.193-0.404-0.288-0.588-0.52-0.713-0.271-0.147-0.751-0.226-1.496-0.247-0.208 0.579-0.762 0.995-1.412 0.995h-4c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h4c0.649 0 1.204 0.415 1.412 0.994 0.58-0.018 1.66-0.082 2.445-0.316 1.539-0.46 3.015-0.674 4.643-0.674h0.016c0.005 0 0.010 0 0.016 0 1.259 0 2.17 0.001 2.917 0.205 0.821 0.224 1.409 0.677 1.968 1.515 0.34 0.509 1.084 2.419 1.084 4.777 0 1.951 0 3.24-0.564 4.245zM5.5 2h-4c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5zM18.084 3.277c-0.848-1.271-1.592-1.274-4.051-1.274-0.006 0-0.012 0-0.017 0h-0.016c-1.549 0-2.893 0.195-4.357 0.632-0.869 0.26-2 0.335-2.643 0.357v7.016c0.896 0.029 1.473 0.143 1.884 0.365 0.528 0.286 0.731 0.711 0.946 1.162 0.037 0.078 0.076 0.159 0.117 0.242 0.222 0.444 0.87 1.848 1.556 3.334 0.648 1.403 1.371 2.972 1.794 3.856 0.28-0.070 0.494-0.248 0.661-0.547 0.198-0.354 0.311-0.87 0.31-1.416-0.001-0.495-0.099-0.913-0.195-1.070-0.666-1.088-0.891-2.019-0.67-2.765 0.198-0.668 0.682-0.961 0.881-1.056 0.268-0.128 0.694-0.131 1.676-0.106 0.522 0.013 1.17 0.030 1.438-0.026 0.646-0.135 0.905-0.259 1.166-0.724 0.436-0.777 0.436-1.962 0.436-3.755 0-2.147-0.681-3.87-0.916-4.223z" />
      </g>
    </svg>
  );
}

LiniThumbsDown2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
