import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSelect2(props = {}) {
  props.name = "Select2";
  
  return (
    <Lini {...props}>
      <path d="M5.5 15h-4c-0.827 0-1.5-0.673-1.5-1.5v-12c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v7c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M13 20c-0.198 0-0.386-0.119-0.464-0.314l-1.697-4.242-2.963 3.386c-0.137 0.157-0.357 0.212-0.552 0.139s-0.324-0.26-0.324-0.468v-15c0-0.198 0.117-0.377 0.298-0.457s0.392-0.046 0.539 0.087l11 10c0.153 0.139 0.205 0.358 0.13 0.55s-0.26 0.32-0.466 0.32h-4.261l1.726 4.314c0.103 0.256-0.022 0.547-0.279 0.65l-2.5 1c-0.061 0.024-0.124 0.036-0.186 0.036zM11 14c0.028 0 0.056 0.002 0.084 0.007 0.172 0.029 0.315 0.146 0.38 0.307l1.814 4.536 1.572-0.629-1.814-4.536c-0.062-0.154-0.043-0.329 0.050-0.466s0.248-0.22 0.414-0.22h3.707l-9.207-8.37v12.539l2.624-2.999c0.096-0.109 0.233-0.171 0.376-0.171z" />
    </Lini>
  );
}

LiniSelect2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
