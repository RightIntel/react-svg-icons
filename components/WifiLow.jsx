import React from "react";
import PropTypes from "prop-types";

export default function LiniWifiLow({
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
      className={`Component Lini LiniWifiLow ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M10.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM10.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
        <path d="M16.107 10.808c-0.152 0-0.302-0.069-0.401-0.2-0.508-0.678-1.133-1.243-1.857-1.68-0.237-0.142-0.313-0.45-0.17-0.686s0.45-0.313 0.686-0.17c0.835 0.503 1.556 1.155 2.141 1.937 0.166 0.221 0.121 0.534-0.1 0.7-0.090 0.067-0.195 0.1-0.299 0.1z" />
        <path d="M12.001 8.161c-0.035 0-0.071-0.004-0.107-0.012-0.909-0.199-1.878-0.198-2.787-0-0.27 0.059-0.536-0.112-0.595-0.382s0.112-0.536 0.382-0.595c1.049-0.229 2.164-0.229 3.213 0 0.27 0.059 0.441 0.325 0.382 0.595-0.051 0.234-0.258 0.393-0.488 0.393z" />
        <path d="M4.893 10.808c-0.104 0-0.209-0.033-0.299-0.1-0.221-0.166-0.266-0.479-0.1-0.7 0.585-0.781 1.306-1.433 2.141-1.936 0.237-0.143 0.544-0.066 0.686 0.17s0.066 0.544-0.17 0.686c-0.724 0.437-1.349 1.002-1.857 1.679-0.098 0.131-0.248 0.2-0.401 0.2z" />
        <path d="M18.243 8.671c-0.145 0-0.288-0.063-0.387-0.183-0.838-1.024-1.904-1.88-3.081-2.474-0.247-0.124-0.346-0.425-0.221-0.672s0.425-0.346 0.672-0.221c1.32 0.666 2.466 1.586 3.405 2.734 0.175 0.214 0.143 0.529-0.070 0.704-0.093 0.076-0.205 0.113-0.316 0.113z" />
        <path d="M12.501 5.2c-0.033 0-0.066-0.003-0.1-0.010-1.243-0.252-2.558-0.252-3.801-0-0.271 0.055-0.535-0.12-0.589-0.391s0.12-0.535 0.391-0.589c1.373-0.279 2.826-0.279 4.199 0 0.271 0.055 0.446 0.319 0.391 0.589-0.048 0.237-0.257 0.401-0.49 0.401z" />
        <path d="M2.757 8.671c-0.111 0-0.223-0.037-0.316-0.113-0.214-0.175-0.245-0.49-0.070-0.704 0.939-1.148 2.085-2.067 3.405-2.734 0.247-0.124 0.547-0.025 0.672 0.221s0.025 0.547-0.221 0.672c-1.178 0.594-2.243 1.45-3.081 2.474-0.099 0.121-0.242 0.183-0.387 0.183z" />
        <path d="M7.053 12.968c-0.086 0-0.174-0.022-0.254-0.070-0.238-0.14-0.317-0.447-0.176-0.685 0.391-0.662 0.949-1.216 1.612-1.603 0.685-0.399 1.468-0.61 2.264-0.61s1.58 0.211 2.264 0.61c0.664 0.387 1.221 0.942 1.612 1.603 0.141 0.238 0.062 0.544-0.176 0.685s-0.544 0.062-0.685-0.176c-0.628-1.062-1.783-1.722-3.016-1.722s-2.388 0.66-3.016 1.722c-0.093 0.158-0.26 0.246-0.431 0.246z" />
      </g>
    </svg>
  );
}

LiniWifiLow.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
