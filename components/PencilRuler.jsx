import React from "react";
import PropTypes from "prop-types";

export default function LiniPencilRuler({
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
      className={`Component Lini LiniPencilRuler ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M19.354 18.146l-7.146-7.146 6.439-6.439c0.585-0.585 0.585-1.536 0-2.121l-1.086-1.086c-0.283-0.283-0.659-0.438-1.061-0.438s-0.778 0.156-1.061 0.438l-6.439 6.439-7.146-7.146c-0.325-0.325-0.781-0.422-1.19-0.253s-0.663 0.561-0.663 1.022v17.085c0 0.827 0.673 1.5 1.5 1.5h17.085c0.461 0 0.852-0.254 1.022-0.663s0.072-0.865-0.253-1.19zM6.5 14h2.5c0.133 0 0.26-0.053 0.354-0.146l0.146-0.146 2.293 2.293h-7.293c-0.276 0-0.5-0.224-0.5-0.5v-7.293l2.293 2.293-0.146 0.146c-0.094 0.094-0.146 0.221-0.146 0.354v2.5c0 0.276 0.224 0.5 0.5 0.5zM8.793 13h-1.793v-1.793l8-8 1.793 1.793-8 8zM16.5 1.915c0.134 0 0.26 0.052 0.354 0.145l1.086 1.086c0.195 0.195 0.195 0.512 0 0.707l-0.439 0.439-1.793-1.793 0.439-0.439c0.094-0.094 0.219-0.145 0.354-0.145zM18.683 18.954c-0.016 0.038-0.062 0.046-0.098 0.046h-17.085c-0.276 0-0.5-0.224-0.5-0.5v-1.5h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-2h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-2h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-2h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-5.585c0-0.036 0.008-0.082 0.046-0.098s0.075 0.011 0.1 0.036l7.146 7.146-1.293 1.293-2.439-2.439c-0.476-0.476-0.889-0.378-1.044-0.314s-0.516 0.287-0.516 0.96v7.5c0 0.827 0.673 1.5 1.5 1.5h7.5c0.674 0 0.896-0.361 0.96-0.516s0.162-0.568-0.314-1.044l-2.439-2.439 1.293-1.293 7.146 7.146c0.025 0.025 0.052 0.063 0.036 0.1z" />
      </g>
    </svg>
  );
}

LiniPencilRuler.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
