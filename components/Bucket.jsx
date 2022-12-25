import React from "react";
import PropTypes from "prop-types";

export default function LiniBucket({
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
      className={`Component Lini LiniBucket ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17 6.5c0-0.006-0-0.012-0-0.019 0-0 0-0-0-0-0.005-0.306-0.146-0.753-0.77-1.174-0.396-0.268-0.949-0.504-1.643-0.702-0.527-0.151-1.12-0.275-1.76-0.371-0.501-0.942-2.458-4.234-5.327-4.234-1.121 0-1.707 0.543-2.002 0.999-0.481 0.743-0.611 1.893-0.392 3.431-0.241 0.054-0.473 0.112-0.693 0.175-0.694 0.198-1.246 0.434-1.643 0.702-0.624 0.421-0.765 0.867-0.77 1.174 0 0 0 0 0 0-0 0.006-0 0.013-0 0.019 0 0.090 0.012 0.192 0.044 0.303l1.881 11.286c0.068 0.41 0.369 0.874 0.714 1.104 0.124 0.083 1.312 0.807 4.861 0.807s4.737-0.724 4.861-0.807c0.346-0.23 0.646-0.695 0.714-1.104l1.881-11.286c0.032-0.111 0.044-0.213 0.044-0.303zM15.997 6.478l-0.014 0.081c-0.080 0.165-0.469 0.531-1.671 0.875-1.279 0.365-2.988 0.567-4.812 0.567-0.866 0-1.705-0.045-2.485-0.132-0.134-0.391-0.269-0.811-0.394-1.243-0.143-0.492-0.261-0.957-0.354-1.394 0.979-0.151 2.084-0.231 3.234-0.231 1.025 0 2.014 0.064 2.91 0.184 0.014 0.003 0.028 0.004 0.042 0.006 0.683 0.093 1.311 0.22 1.86 0.377 1.301 0.372 1.65 0.769 1.684 0.911zM12 12.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0.002-0.152 0.187-0.717 0.334-1.17 0.054-0.165 0.11-0.336 0.166-0.512 0.056 0.176 0.112 0.348 0.166 0.512 0.148 0.454 0.332 1.019 0.334 1.17zM6.337 1.542c0.239-0.37 0.609-0.542 1.163-0.542 1.875 0 3.367 1.942 4.084 3.088-0.668-0.058-1.368-0.088-2.084-0.088-1.207 0-2.372 0.086-3.41 0.246-0.174-1.247-0.093-2.178 0.247-2.704zM4.688 5.567c0.189-0.054 0.388-0.104 0.595-0.151 0.099 0.467 0.225 0.963 0.378 1.489 0.080 0.276 0.163 0.546 0.248 0.806-0.438-0.078-0.848-0.17-1.22-0.277-1.202-0.343-1.591-0.709-1.671-0.875l-0.014-0.081c0.035-0.142 0.383-0.539 1.684-0.911zM14.089 17.925c-0.022 0.134-0.164 0.354-0.278 0.433-0.061 0.035-1.154 0.642-4.311 0.642s-4.251-0.607-4.311-0.642c-0.114-0.079-0.255-0.299-0.278-0.433l-1.66-9.959c0.326 0.158 0.714 0.301 1.162 0.429 0.556 0.159 1.184 0.288 1.863 0.386 0.402 1.106 0.746 1.876 0.768 1.924 0.083 0.185 0.266 0.295 0.456 0.295 0.069 0 0.138-0.014 0.205-0.044 0.252-0.113 0.364-0.409 0.251-0.661-0.004-0.010-0.249-0.557-0.564-1.385 0.675 0.059 1.384 0.090 2.108 0.090 0.495 0 0.982-0.014 1.457-0.042-0.1 0.613-0.357 1.401-0.573 2.062-0.252 0.773-0.384 1.19-0.384 1.48 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.29-0.132-0.707-0.384-1.48-0.226-0.694-0.498-1.527-0.587-2.151 0.947-0.102 1.817-0.262 2.557-0.474 0.447-0.128 0.836-0.272 1.162-0.429l-1.66 9.959z" />
      </g>
    </svg>
  );
}

LiniBucket.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
