import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniManWoman(props = {}) {
  props.name = "ManWoman";
  
  return (
    <Lini {...props}>
      <path d="M12.5 5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM12.5 1c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z" />
      <path d="M16.596 11.303c0.295 0.295 0.694 0.464 1.095 0.464 0.362-0 0.698-0.136 0.944-0.382 0.54-0.54 0.503-1.454-0.082-2.039l-2.492-2.492c-0.487-0.487-1.373-0.854-2.061-0.854h-3c-0.688 0-1.574 0.367-2.061 0.854l-2.492 2.492c-0.274 0.274-0.438 0.632-0.461 1.006-0.024 0.392 0.114 0.768 0.379 1.033 0.246 0.246 0.582 0.382 0.944 0.382 0.401-0 0.8-0.169 1.095-0.464l1.825-1.825 0.217 0.869-3.093 3.093c-0.476 0.476-0.378 0.889-0.314 1.044s0.287 0.516 0.961 0.516h2v3.5c0 0.827 0.673 1.5 1.5 1.5 0.384 0 0.734-0.145 1-0.383 0.266 0.238 0.616 0.383 1 0.383 0.827 0 1.5-0.673 1.5-1.5v-3.5h2c0.674 0 0.896-0.361 0.96-0.516s0.162-0.568-0.314-1.044l-3.093-3.093 0.217-0.869 1.825 1.825zM11.5 19c-0.276 0-0.5-0.224-0.5-0.5v-3.5h1v3.5c0 0.276-0.224 0.5-0.5 0.5zM14 18.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3.5h1v3.5zM13.646 10.854l3.146 3.146h-8.586l3.146-3.146c0.124-0.124 0.174-0.304 0.132-0.475l-0.5-2c-0.044-0.175-0.178-0.313-0.352-0.361s-0.36 0.001-0.487 0.128l-2.449 2.449c-0.109 0.109-0.25 0.171-0.388 0.171-0.067 0-0.163-0.015-0.237-0.089-0.086-0.086-0.092-0.203-0.088-0.265 0.008-0.129 0.070-0.26 0.17-0.36l2.492-2.492c0.293-0.293 0.939-0.561 1.354-0.561h3c0.415 0 1.060 0.267 1.354 0.561l2.492 2.492c0.192 0.192 0.229 0.478 0.082 0.625-0.074 0.074-0.169 0.089-0.237 0.089-0.138 0-0.279-0.062-0.388-0.171l-2.449-2.449c-0.127-0.127-0.313-0.176-0.487-0.128s-0.308 0.186-0.352 0.361l-0.5 2c-0.043 0.17 0.007 0.351 0.132 0.475z" />
      <path d="M5.5 5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM5.5 1c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z" />
      <path d="M7.5 16c-0.276 0-0.5 0.224-0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-5c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5 0.175 0 0.343-0.031 0.5-0.086v5.586c0 0.827 0.673 1.5 1.5 1.5 0.384 0 0.734-0.145 1-0.383 0.266 0.238 0.616 0.383 1 0.383 0.827 0 1.5-0.673 1.5-1.5v-2c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniManWoman.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
