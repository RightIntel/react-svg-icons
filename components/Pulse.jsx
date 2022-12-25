import React from "react";
import PropTypes from "prop-types";

export default function LiniPulse({
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
      className={`Component Lini LiniPulse ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M12.496 16.925c-0.111 0-0.379-0.037-0.552-0.369-0.058-0.111-0.104-0.251-0.142-0.429l-2.36-11.013-2.196 8.053c-0.177 0.648-0.545 0.765-0.749 0.776s-0.583-0.062-0.832-0.686l-1.164-2.911-0.164 0.411c-0.279 0.697-1.085 1.243-1.836 1.243h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.346 0 0.779-0.293 0.907-0.614l0.257-0.643c0.243-0.607 0.628-0.697 0.836-0.697s0.593 0.091 0.836 0.697l1.075 2.686 2.344-8.596c0.175-0.642 0.5-0.769 0.744-0.762s0.561 0.151 0.7 0.802l2.285 10.662 1.33-6.652c0.133-0.664 0.491-0.801 0.693-0.823s0.581 0.032 0.856 0.651l1.188 2.672c0.144 0.323 0.596 0.617 0.949 0.617h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2c-0.743 0-1.561-0.532-1.863-1.211l-0.955-2.149-1.495 7.477c-0.036 0.178-0.080 0.319-0.137 0.431-0.17 0.338-0.442 0.376-0.55 0.377-0.001 0-0.002 0-0.003 0z" />
      </g>
    </svg>
  );
}

LiniPulse.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
