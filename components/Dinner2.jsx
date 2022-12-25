import React from "react";
import PropTypes from "prop-types";

export default function LiniDinner2({
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
      className={`Component Lini LiniDinner2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M8.429 3.548c-0.191-0.827-0.429-1.857-0.429-3.048 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 1.306 0.252 2.397 0.455 3.274 0.198 0.854 0.353 1.529 0.13 1.811-0.186 0.234-0.717 0.37-1.581 0.406-0.002-0.162-0.004-0.326-0.004-0.49v-4c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4c0 0 0 0 0 0s0 0 0 0c0 0.165-0.001 0.328-0.004 0.49-0.861-0.037-1.391-0.174-1.577-0.408-0.225-0.283-0.069-0.959 0.128-1.814 0.202-0.875 0.453-1.965 0.453-3.267 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 1.189-0.237 2.217-0.427 3.043-0.258 1.118-0.461 2.002 0.064 2.662 0.39 0.49 1.101 0.733 2.333 0.785-0.112 2.79-0.516 5.19-0.851 7.177-0.446 2.644-0.74 4.39 0.012 5.279 0.311 0.368 0.772 0.555 1.37 0.555s1.059-0.187 1.37-0.555c0.752-0.89 0.458-2.638 0.012-5.284-0.334-1.985-0.738-4.384-0.851-7.172 1.235-0.050 1.946-0.292 2.337-0.783 0.524-0.659 0.32-1.541 0.062-2.659zM6.106 18.799c-0.073 0.086-0.215 0.201-0.606 0.201s-0.533-0.114-0.606-0.2c-0.452-0.535-0.145-2.357 0.211-4.467 0.129-0.762 0.267-1.585 0.396-2.467 0.129 0.881 0.267 1.701 0.395 2.463 0.356 2.112 0.663 3.936 0.211 4.472z" />
        <path d="M15.079 7.896c1.114-0.407 1.921-1.973 1.921-3.896 0-2.243-1.098-4-2.5-4s-2.5 1.757-2.5 4c0 1.924 0.808 3.49 1.922 3.897-0.155 2.419-0.513 4.544-0.804 6.269-0.446 2.644-0.74 4.39 0.012 5.279 0.311 0.368 0.772 0.555 1.37 0.555s1.059-0.187 1.37-0.555c0.752-0.89 0.458-2.638 0.012-5.284-0.291-1.725-0.648-3.848-0.803-6.265zM13 4c0-1.768 0.791-3 1.5-3s1.5 1.232 1.5 3-0.791 3-1.5 3-1.5-1.232-1.5-3zM15.106 18.799c-0.073 0.086-0.215 0.201-0.606 0.201s-0.533-0.114-0.606-0.2c-0.452-0.535-0.145-2.357 0.211-4.467 0.127-0.751 0.266-1.578 0.396-2.472 0.13 0.892 0.269 1.717 0.395 2.467 0.356 2.112 0.663 3.937 0.211 4.472z" />
      </g>
    </svg>
  );
}

LiniDinner2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
