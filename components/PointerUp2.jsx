import React from "react";
import PropTypes from "prop-types";

export default function LiniPointerUp2({
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
      className={`Component Lini LiniPointerUp2 ${className}`}
      {...moreProps}
    >
      <g fill={color}>
        <path d="M14 17.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
        <path d="M16 10.5c0-0.827-0.673-1.5-1.5-1.5-0.195 0-0.382 0.038-0.553 0.106-0.173-0.637-0.756-1.106-1.447-1.106-0.195 0-0.382 0.038-0.553 0.106-0.174-0.637-0.756-1.106-1.447-1.106-0.175 0-0.344 0.030-0.5 0.086v-2.586c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v5.966l-1.406-1.113c-0.304-0.241-0.695-0.361-1.098-0.339s-0.779 0.186-1.053 0.46c-0.581 0.581-0.583 1.532-0.003 2.12l3.479 3.523c-0.54 0.227-0.919 0.762-0.919 1.383v2c0 0.827 0.673 1.5 1.5 1.5h7c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.541-0.288-1.016-0.719-1.28 0.328-0.636 0.719-1.798 0.719-3.72v-1zM4.15 10.182c0.207-0.207 0.592-0.227 0.823-0.044l2.216 1.754c0.15 0.119 0.355 0.142 0.528 0.058s0.282-0.258 0.282-0.45v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 2.102-0.516 3.139-0.748 3.5h-6.043l-4.057-4.108c-0.192-0.194-0.192-0.519-0.002-0.71zM15 18.5c0 0.276-0.224 0.5-0.5 0.5h-7c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5v2z" />
      </g>
    </svg>
  );
}

LiniPointerUp2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
