import React from "react";
import PropTypes from "prop-types";

export default function LiniFeather({
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
      className={`Component Lini LiniFeather ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M0.5 20c-0.009 0-0.018-0-0.027-0.001-0.272-0.014-0.482-0.243-0.474-0.515 0.118-3.655 1.096-6.94 2.907-9.762 1.487-2.317 3.53-4.321 6.072-5.955 2.426-1.559 4.83-2.468 6.421-2.956 1.827-0.56 3.375-0.811 4.1-0.811 0.276 0 0.5 0.224 0.5 0.5 0 1.207-1.154 2.361-1.646 2.854-0.801 0.801-2.275 1.313-3.701 1.808-0.447 0.155-0.899 0.312-1.321 0.475 1.41-0.123 2.806-0.137 3.367-0.137 0.088 0 0.135 0 0.135 0 0.186 0.002 0.355 0.106 0.44 0.271s0.072 0.363-0.035 0.516c-1.071 1.532-2.376 2.725-3.991 3.648-0.757 0.433-1.595 0.634-2.638 0.634-0.616 0-1.242-0.070-1.847-0.137-0.593-0.066-1.206-0.134-1.797-0.134-1.088 0-1.918 0.229-2.69 0.744-2.764 1.843-3.274 8.429-3.279 8.495-0.019 0.263-0.238 0.464-0.498 0.464zM18.872 1.047c-1.728 0.211-5.634 1.171-9.352 3.561-1.909 1.227-4.018 3.008-5.662 5.513 0.898-0.562 1.89-0.824 3.109-0.824 0.647 0 1.287 0.071 1.907 0.14 0.604 0.067 1.175 0.131 1.736 0.131 0.861 0 1.542-0.16 2.142-0.502 1.21-0.692 2.201-1.516 3.062-2.556-1.249 0.028-3.387 0.127-4.685 0.473-0.201 0.054-0.414-0.023-0.535-0.192s-0.125-0.395-0.010-0.568c0.614-0.92 2.133-1.448 3.741-2.006 1.319-0.458 2.684-0.932 3.322-1.57 0.288-0.288 0.948-0.948 1.226-1.6z" />
      </g>
    </svg>
  );
}

LiniFeather.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
