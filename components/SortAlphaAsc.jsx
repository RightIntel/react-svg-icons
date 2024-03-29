import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSortAlphaAsc(props = {}) {
  props.name = "SortAlphaAsc";
  
  return (
    <Lini {...props}>
      <path d="M8.854 14.646c-0.195-0.195-0.512-0.195-0.707 0l-3.146 3.146v-17.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v17.293l-3.146-3.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l4 4c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l4-4c0.195-0.195 0.195-0.512 0-0.707z" />
      <path d="M19.96 7.303l-3-7c-0.079-0.184-0.26-0.303-0.46-0.303s-0.381 0.119-0.46 0.303l-3 7c-0.109 0.254 0.009 0.548 0.263 0.657s0.548-0.009 0.657-0.263l1.156-2.697h2.769l1.156 2.697c0.081 0.19 0.266 0.303 0.46 0.303 0.066 0 0.133-0.013 0.197-0.041 0.254-0.109 0.371-0.403 0.263-0.657zM15.544 4l0.956-2.231 0.956 2.231h-1.912z" />
      <path d="M18.5 20h-4c-0.178 0-0.343-0.095-0.432-0.249s-0.090-0.344-0.002-0.499l3.573-6.252h-3.138c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.178 0 0.343 0.095 0.432 0.249s0.090 0.344 0.002 0.499l-3.573 6.252h3.138c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniSortAlphaAsc.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
