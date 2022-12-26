import React from "react";
import PropTypes from "prop-types";

export default function LiniSausage({
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
      className={`Component Lini LiniSausage ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M17.138 3.058c0.297-0.605 1.027-1.516 1.716-2.205 0.143-0.143 0.186-0.358 0.108-0.545s-0.26-0.309-0.462-0.309h-4c-0.202 0-0.384 0.122-0.462 0.309s-0.035 0.402 0.108 0.545c0.688 0.689 1.419 1.6 1.716 2.205-1.626 0.301-2.862 1.729-2.862 3.442 0 3.584-2.916 6.5-6.5 6.5-1.712 0-3.141 1.236-3.442 2.862-0.605-0.297-1.516-1.027-2.205-1.716-0.143-0.143-0.358-0.186-0.545-0.108s-0.309 0.26-0.309 0.462v4c0 0.202 0.122 0.384 0.309 0.462 0.062 0.026 0.127 0.038 0.191 0.038 0.13 0 0.258-0.051 0.354-0.146 0.689-0.688 1.6-1.419 2.205-1.716 0.301 1.626 1.729 2.862 3.442 2.862 1.822 0 3.59-0.357 5.255-1.061 1.608-0.68 3.051-1.653 4.291-2.893s2.213-2.683 2.893-4.291c0.704-1.665 1.061-3.433 1.061-5.255 0-1.712-1.236-3.141-2.862-3.442zM17.367 1c-0.084 0.099-0.171 0.204-0.258 0.313-0.244 0.305-0.447 0.586-0.61 0.846-0.163-0.26-0.366-0.541-0.61-0.846-0.087-0.109-0.174-0.213-0.258-0.313h1.735zM1.313 17.11c-0.109 0.087-0.213 0.174-0.313 0.258v-1.735c0.099 0.084 0.204 0.171 0.313 0.258 0.305 0.244 0.586 0.447 0.846 0.61-0.26 0.163-0.541 0.366-0.846 0.61zM6.5 19c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5c0.753 0 1.489-0.11 2.19-0.323l0.337 0.985c0.071 0.208 0.265 0.338 0.473 0.338 0.054 0 0.108-0.009 0.162-0.027 0.261-0.089 0.4-0.374 0.311-0.635l-0.348-1.016c0.652-0.299 1.262-0.694 1.813-1.177l0.709 0.709c0.098 0.098 0.226 0.147 0.354 0.147s0.256-0.049 0.353-0.147c0.195-0.195 0.195-0.512 0-0.707l-0.709-0.709c0.483-0.551 0.878-1.161 1.177-1.813l1.016 0.348c0.054 0.018 0.108 0.027 0.162 0.027 0.208 0 0.402-0.131 0.473-0.338 0.089-0.261-0.050-0.546-0.311-0.635l-0.985-0.337c0.213-0.701 0.323-1.437 0.323-2.19 0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5c0 6.893-5.607 12.5-12.5 12.5z" />
      </g>
    </svg>
  );
}

LiniSausage.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
