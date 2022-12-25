import React from "react";
import PropTypes from "prop-types";

export default function LiniHamburger({
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
      className={`Component Lini LiniHamburger ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M18 11h-16c-1.103 0-2 0.897-2 2s0.897 2 2 2h6.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-6.5c-0.551 0-1-0.449-1-1s0.449-1 1-1h0.5c3.125 0 5.765 0.811 7.633 2.345 1.408 1.156 1.899 2.33 1.903 2.34 0.076 0.19 0.261 0.314 0.464 0.314 0.007 0 0.015-0 0.022-0.001 0.212-0.009 0.396-0.152 0.457-0.355 0.014-0.046 1.437-4.644 4.521-4.644h0.5c0.551 0 1 0.449 1 1s-0.449 1-1 1h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5c1.103 0 2-0.897 2-2s-0.897-2-2-2zM13.268 13.727c-0.374 0.575-0.658 1.147-0.86 1.61-0.338-0.489-0.85-1.106-1.588-1.721-0.79-0.658-1.703-1.2-2.72-1.616h6.692c-0.549 0.438-1.061 1.015-1.524 1.727z" />
        <path d="M17.5 7h-15c-0.276 0-0.5-0.224-0.5-0.5 0-0.332 0.059-2.070 1.22-3.666 0.615-0.845 1.436-1.513 2.441-1.984 1.192-0.56 2.651-0.843 4.335-0.843 1.686 0 3.146 0.284 4.339 0.843 1.005 0.471 1.827 1.139 2.443 1.984 1.162 1.596 1.221 3.334 1.221 3.666 0 0.276-0.224 0.5-0.5 0.5zM3.033 6h13.934c-0.072-0.604-0.298-1.619-0.996-2.578-1.168-1.603-3.178-2.416-5.974-2.416-2.793 0-4.801 0.813-5.968 2.416-0.698 0.959-0.924 1.974-0.996 2.578z" />
        <path d="M2.424 10.022c-0.326 0-0.629-0.178-0.84-0.494l-0.5-0.75c-0.153-0.23-0.091-0.54 0.139-0.693s0.54-0.091 0.693 0.139l0.5 0.75c0.005 0.007 0.009 0.014 0.014 0.019 0.019-0.022 0.044-0.057 0.070-0.11l0.106-0.211c0.205-0.41 0.531-0.645 0.894-0.645s0.689 0.235 0.894 0.645l0.106 0.211c0 0 0 0 0 0l0.106-0.211c0.205-0.41 0.531-0.645 0.894-0.645s0.689 0.235 0.894 0.645l0.106 0.211c0 0 0 0 0 0l0.106-0.211c0.205-0.41 0.531-0.645 0.894-0.645s0.689 0.235 0.894 0.645l0.106 0.211c0 0 0 0 0 0l0.106-0.211c0.205-0.41 0.531-0.645 0.894-0.645s0.689 0.235 0.894 0.645l0.106 0.211 0.106-0.211c0.205-0.41 0.531-0.645 0.894-0.645s0.689 0.235 0.894 0.645l0.106 0.211 0.106-0.211c0.205-0.41 0.531-0.645 0.894-0.645s0.689 0.235 0.894 0.645l0.106 0.211 0.106-0.211c0.205-0.41 0.531-0.645 0.894-0.645s0.689 0.235 0.894 0.645l0.106 0.211 0.106-0.211c0.208-0.416 0.541-0.667 0.914-0.691 0.347-0.022 0.673 0.158 0.896 0.492l0.5 0.75c0.153 0.23 0.091 0.54-0.139 0.693s-0.54 0.091-0.693-0.139l-0.5-0.75c-0.005-0.007-0.009-0.014-0.014-0.019-0.019 0.022-0.044 0.057-0.070 0.11l-0.106 0.211c-0.205 0.41-0.531 0.645-0.894 0.645s-0.689-0.235-0.894-0.645l-0.106-0.211-0.106 0.211c-0.205 0.41-0.531 0.645-0.894 0.645s-0.689-0.235-0.894-0.645l-0.106-0.211-0.106 0.211c-0.205 0.41-0.531 0.645-0.894 0.645s-0.689-0.235-0.894-0.645l-0.106-0.211-0.106 0.211c-0.205 0.41-0.531 0.645-0.894 0.645s-0.689-0.235-0.894-0.645l-0.106-0.211c0 0 0 0 0 0s0 0 0 0l-0.106 0.211c-0.205 0.41-0.531 0.645-0.894 0.645s-0.689-0.235-0.894-0.645l-0.106-0.211c0 0 0 0 0 0l-0.106 0.211c-0.205 0.41-0.531 0.645-0.894 0.645s-0.689-0.235-0.894-0.645l-0.106-0.211c0 0 0 0 0 0l-0.106 0.211c-0.205 0.41-0.531 0.645-0.894 0.645s-0.689-0.235-0.894-0.645l-0.106-0.211c0 0 0 0 0 0l-0.106 0.211c-0.208 0.416-0.541 0.667-0.914 0.691-0.019 0.001-0.037 0.002-0.056 0.002z" />
        <path d="M17.5 16h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v0.5c0 0.827-0.673 1.5-1.5 1.5h-11c-0.827 0-1.5-0.673-1.5-1.5v-0.5h7.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-8c-0.276 0-0.5 0.224-0.5 0.5v1c0 1.378 1.122 2.5 2.5 2.5h11c1.378 0 2.5-1.122 2.5-2.5v-1c0-0.276-0.224-0.5-0.5-0.5z" />
      </g>
    </svg>
  );
}

LiniHamburger.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
