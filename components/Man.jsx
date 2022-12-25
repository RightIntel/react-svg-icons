import React from "react";
import PropTypes from "prop-types";

export default function LiniMan({
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
      className={`Component Lini LiniMan ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.37 15.875c-1.113-0.867-2.775-1.348-4.253-1.704-0.257-0.062-0.603-0.459-0.737-1.017-0.071-0.294-0.169-1.034 0.446-1.561 0.439-0.376 0.75-0.838 0.964-1.339 0.789-0.976 1.287-2.004 1.481-3.058 0.167-0.909 0.111-1.863-0.167-2.834-0.317-1.11-1.099-2.028-2.261-2.656-0.983-0.531-2.187-0.81-3.304-0.764-0.741 0.030-1.404 0.201-1.917 0.494-0.476 0.272-0.815 0.644-0.998 1.088-0.819 0.108-1.444 0.578-1.782 1.349-0.372 0.849-0.39 2.039-0.051 3.351 0.305 1.181 0.855 2.278 1.517 3.031 0.16 0.497 0.426 0.961 0.867 1.339 0.609 0.522 0.47 1.337 0.413 1.574-0.133 0.554-0.463 0.945-0.704 1.003-1.478 0.356-3.139 0.836-4.253 1.704-1.097 0.854-1.63 2.040-1.63 3.625 0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5 0-1.585-0.533-2.77-1.63-3.625zM5.758 4.274c0.231-0.528 0.626-0.774 1.242-0.774 0.238 0 0.444-0.168 0.49-0.402 0.159-0.797 1.183-1.12 2.089-1.157 1.818-0.074 4.035 0.846 4.563 2.696 0.284 0.994 0.295 1.94 0.030 2.854-0.052-0.658-0.186-1.238-0.33-1.629-0.137-0.37-0.373-0.862-0.842-0.862-2.568 0-4.636-0.343-5.146-0.854-0.143-0.143-0.358-0.186-0.545-0.108s-0.309 0.26-0.309 0.462c0 1.363-0.453 2.364-0.759 2.611-0.121 0.097-0.189 0.245-0.186 0.4 0.003 0.125 0.004 0.253 0.005 0.386-0.513-1.29-0.68-2.76-0.301-3.623zM2.021 19c0.091-1.023 0.479-1.756 1.224-2.336 0.766-0.597 1.924-1.052 3.872-1.52 0.66-0.159 1.226-0.842 1.443-1.742 0.242-1.006-0.032-1.966-0.734-2.568-0.754-0.646-0.76-1.769-0.766-2.855-0-0.090-0.001-0.182-0.002-0.274 0.387-0.441 0.759-1.268 0.891-2.354 0.582 0.239 1.389 0.411 2.436 0.521 0.741 0.078 1.578 0.122 2.431 0.127 0.173 0.33 0.444 1.346 0.366 2.467-0.051 0.73-0.267 1.733-1.008 2.369-0.717 0.615-1.004 1.57-0.767 2.554 0.214 0.889 0.807 1.594 1.476 1.755 1.948 0.469 3.106 0.923 3.872 1.52 0.745 0.58 1.133 1.313 1.224 2.336h-15.958z" />
      </g>
    </svg>
  );
}

LiniMan.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
