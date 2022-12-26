import React from "react";
import PropTypes from "prop-types";

export default function LiniEasterEgg({
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
      className={`Component Lini LiniEasterEgg ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M7 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
        <path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
        <path d="M11 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
        <path d="M13 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
        <path d="M15 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
        <path d="M16.934 7.092c-0.726-1.758-1.798-3.354-3.187-4.743-0.865-0.865-2.018-1.342-3.247-1.342s-2.381 0.477-3.247 1.342c-1.389 1.389-2.462 2.985-3.187 4.743-0.707 1.714-1.066 3.534-1.066 5.408 0 2.003 0.78 3.887 2.197 5.303s3.3 2.197 5.303 2.197 3.887-0.78 5.303-2.197 2.197-3.3 2.197-5.303c0-1.874-0.359-3.694-1.066-5.408zM15.854 15.646c-0.273-0.273-0.646-0.646-1.354-0.646s-1.081 0.374-1.354 0.646c-0.245 0.245-0.365 0.354-0.646 0.354s-0.401-0.108-0.646-0.354c-0.273-0.273-0.646-0.646-1.354-0.646s-1.081 0.374-1.354 0.646c-0.245 0.245-0.365 0.354-0.646 0.354s-0.401-0.108-0.646-0.354c-0.273-0.273-0.646-0.646-1.354-0.646s-1.081 0.374-1.354 0.646c-0.082 0.082-0.15 0.149-0.216 0.202-0.341-0.566-0.599-1.188-0.756-1.848h2.716c0.036 0.002 0.073 0.003 0.109 0.003v-0.003h2.891c0.036 0.002 0.073 0.003 0.109 0.003v-0.003h1v0.003c0.037 0 0.073-0.001 0.109-0.003h2.891v0.003c0.037 0 0.073-0.001 0.109-0.003h2.716c-0.157 0.66-0.414 1.282-0.756 1.848-0.066-0.053-0.134-0.12-0.216-0.202zM5.432 6.525l0.844 0.422c0.141 0.070 0.306 0.070 0.447 0l1.776-0.888 1.776 0.888c0.141 0.070 0.306 0.070 0.447 0l1.776-0.888 1.776 0.888c0.070 0.035 0.147 0.053 0.224 0.053s0.153-0.018 0.224-0.053l0.844-0.422c0.559 1.099 0.961 2.266 1.194 3.475l-12.524 0.003c0.233-1.21 0.635-2.378 1.194-3.478zM15 12.003c0 0.526-0.408 0.958-0.925 0.997h-1.342c0.17-0.294 0.267-0.634 0.267-0.997 0-0.365-0.099-0.707-0.27-1.002l1.27-0v0.002c0.551 0 1 0.449 1 1zM9.925 13c-0.516-0.039-0.925-0.471-0.925-0.997 0-0.551 0.449-1 1-1v-0.001l1-0v0.002c0.551 0 1 0.449 1 1 0 0.526-0.408 0.958-0.925 0.997h-1.15zM6.925 13c-0.516-0.039-0.925-0.471-0.925-0.997 0-0.551 0.449-1 1-1v-0.001l1.27-0c-0.171 0.295-0.27 0.636-0.27 1.001 0 0.363 0.098 0.703 0.267 0.997h-1.342zM4 12.5c0-0.503 0.029-1.003 0.085-1.497l1.184-0c-0.171 0.294-0.269 0.636-0.269 1 0 0.363 0.098 0.703 0.267 0.997h-1.248c-0.013-0.165-0.019-0.332-0.019-0.5zM15.733 13c0.17-0.294 0.267-0.634 0.267-0.997 0-0.365-0.099-0.708-0.271-1.003l1.185-0c0.056 0.495 0.085 0.996 0.085 1.5 0 0.168-0.006 0.335-0.019 0.5h-1.248zM7.961 3.055c0.677-0.677 1.578-1.049 2.539-1.049s1.863 0.373 2.539 1.049c0.794 0.794 1.477 1.665 2.041 2.595l-0.581 0.29-1.776-0.888c-0.141-0.070-0.306-0.070-0.447 0l-1.776 0.888-1.776-0.888c-0.141-0.070-0.306-0.070-0.447 0l-1.776 0.888-0.581-0.29c0.564-0.93 1.247-1.801 2.041-2.595zM10.5 19c-2.002 0-3.794-0.91-4.988-2.337 0.132-0.1 0.242-0.21 0.341-0.309 0.245-0.245 0.365-0.354 0.646-0.354s0.401 0.108 0.646 0.354c0.273 0.273 0.646 0.646 1.354 0.646s1.081-0.374 1.354-0.646c0.245-0.245 0.365-0.354 0.646-0.354s0.401 0.108 0.646 0.354c0.273 0.273 0.646 0.646 1.354 0.646s1.081-0.374 1.354-0.646c0.245-0.245 0.365-0.354 0.646-0.354s0.401 0.108 0.646 0.354c0.099 0.099 0.209 0.209 0.341 0.309-1.193 1.427-2.986 2.337-4.988 2.337z" />
      </g>
    </svg>
  );
}

LiniEasterEgg.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
