import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniStore24(props = {}) {
  props.name = "Store24";
  
  return (
    <Lini {...props}>
      <path d="M18 9.5v-1c0-0.078-0.018-0.154-0.053-0.224l-2-4c-0.085-0.169-0.258-0.276-0.447-0.276h-6c-0.276 0-0.5 0.224-0.5 0.5v3.5h-2.86l0.345-1.379c0.067-0.268-0.096-0.539-0.364-0.606s-0.539 0.096-0.606 0.364l-0.405 1.621h-2.801l0.638-1.276c0.123-0.247 0.023-0.547-0.224-0.671s-0.547-0.023-0.671 0.224l-1 2c-0.035 0.069-0.053 0.146-0.053 0.224v1c0 0.816 0.393 1.542 1 1.999v6.501h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-6.501c0.607-0.457 1-1.182 1-1.999zM11.5 11c-0.827 0-1.5-0.673-1.5-1.5v-0.5h3v0.5c0 0.827-0.673 1.5-1.5 1.5zM14 9h3v0.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-0.5zM16.691 8h-2.801l-0.75-3h2.051l1.5 3zM10 5h2.11l0.75 3h-2.86v-3zM9 9.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5v-0.5h3v0.5zM2 9.5v-0.5h3v0.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5zM3 11.95c0.162 0.033 0.329 0.050 0.5 0.050 0.817 0 1.544-0.394 2-1.002 0.456 0.608 1.183 1.002 2 1.002s1.544-0.394 2-1.002c0.361 0.48 0.89 0.827 1.5 0.951v6.050h-8v-6.050zM16 18h-4v-6.050c0.61-0.124 1.139-0.471 1.5-0.951 0.456 0.608 1.183 1.002 2 1.002 0.171 0 0.338-0.017 0.5-0.050v6.050z" />
      <path d="M14 14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M4.5 15c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1-1c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1 1c-0.098 0.098-0.226 0.146-0.354 0.146z" />
      <path d="M5.5 17c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l3-3c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3 3c-0.098 0.098-0.226 0.146-0.354 0.146z" />
      <path d="M8.5 17c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l1-1c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-1 1c-0.098 0.098-0.226 0.146-0.354 0.146z" />
      <path d="M3.5 5h-2c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h1.5v-1h-1.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-1.5v1h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M7.5 0c-0.276 0-0.5 0.224-0.5 0.5v1.5h-1v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2c0 0.276 0.224 0.5 0.5 0.5h1.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniStore24.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
