import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function Lini3dRotate(props = {}) {
  props.name = "3dRotate";
  
  return (
    <Lini {...props}>
      <path d="M9.5 18c-2.488 0-4.834-0.542-6.607-1.527-0.784-0.435-1.419-0.937-1.893-1.485v0.512c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.146 0.845 2.246 2.379 3.098 1.627 0.904 3.801 1.402 6.121 1.402 1.744 0 3.423-0.284 4.856-0.822 1.364-0.512 2.415-1.216 3.039-2.035 0.167-0.22 0.481-0.262 0.701-0.095s0.262 0.481 0.095 0.701c-1.504 1.975-4.915 3.251-8.691 3.251z" />
      <path d="M18.5 9c-0.276 0-0.5 0.224-0.5 0.5v0.52c-0.687-0.798-1.708-1.494-3-2.019v-2.5c0-0.204-0.124-0.388-0.314-0.464l-5-2c-0.119-0.048-0.252-0.048-0.371 0l-5 2c-0.19 0.076-0.314 0.26-0.314 0.464v2.5c-1.368 0.556-2.451 1.31-3.144 2.191-0.171 0.217-0.133 0.531 0.084 0.702 0.092 0.072 0.201 0.107 0.309 0.107 0.148 0 0.295-0.066 0.393-0.191 0.523-0.665 1.331-1.253 2.358-1.72v2.411c0 0.204 0.124 0.388 0.314 0.464l5 2c0.060 0.024 0.123 0.036 0.186 0.036s0.126-0.012 0.186-0.036l5-2c0.19-0.076 0.314-0.26 0.314-0.464v-2.411c0.837 0.382 1.537 0.848 2.048 1.368 0.632 0.643 0.952 1.33 0.952 2.042 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5zM9.5 4.038l3.654 1.462-3.654 1.462-3.654-1.462 3.654-1.462zM5 6.238l4 1.6v4.923l-4-1.6v-4.923zM10 12.761v-4.923l4-1.6v4.923l-4 1.6z" />
    </Lini>
  );
}

Lini3dRotate.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
