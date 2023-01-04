import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniFingersScrollVertical(props = {}) {
  props.name = "FingersScrollVertical";
  
  return (
    <Lini {...props}>
      <path d="M8 3c0 0.412 0.125 0.794 0.339 1.113-0.779 0.274-1.339 1.016-1.339 1.887 0 0.364 0.098 0.706 0.269 1h-5.269c-1.103 0-2 0.897-2 2 0 0.871 0.56 1.614 1.339 1.887-0.214 0.318-0.339 0.701-0.339 1.113 0 1.103 0.897 2 2 2h7.373l-2.333 1.346c-0.475 0.261-0.813 0.687-0.953 1.199-0.136 0.499-0.064 1.018 0.202 1.462 0.544 0.907 1.774 1.253 2.742 0.77 0.061-0.030 1.368-0.668 5.35-2.66 1.875-0.938 3.216-1.967 3.984-3.059 0.603-0.857 0.634-1.449 0.634-1.559v-5c0-0.848-0.245-1.632-0.73-2.331-0.468-0.676-1.152-1.259-2.033-1.734-1.743-0.939-4.246-1.435-7.237-1.435-1.103 0-2 0.897-2 2zM16.763 3.315c1.021 0.549 2.237 1.548 2.237 3.185v4.99c-0.003 0.039-0.050 0.46-0.525 1.095-0.474 0.633-1.472 1.605-3.54 2.638-4.054 2.027-5.331 2.65-5.343 2.656-0.002 0.001-0.003 0.001-0.004 0.002-0.503 0.251-1.162 0.073-1.439-0.389-0.125-0.208-0.158-0.451-0.095-0.685 0.068-0.249 0.236-0.458 0.472-0.587 0.003-0.002 0.007-0.004 0.010-0.006l2.705-1.561c0.583-0.319 0.828-0.678 0.729-1.067-0.099-0.39-0.489-0.587-1.157-0.587h-7.812c-0.551 0-1-0.449-1-1s0.449-1 1-1h6.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-7.5c-0.551 0-1-0.449-1-1s0.449-1 1-1h7.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5c-0.551 0-1-0.449-1-1s0.449-1 1-1h1.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5c-0.551 0-1-0.449-1-1s0.449-1 1-1c2.826 0 5.165 0.455 6.763 1.315z" />
      <path d="M2.146 1.646l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.146-1.146v2.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.293l1.146 1.146c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354l-2-2c-0.195-0.195-0.512-0.195-0.707 0z" />
      <path d="M2 15.5v2.293l-1.146-1.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.195 0.195 0.512 0.195 0.707 0l2-2c0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354c-0.195-0.195-0.512-0.195-0.707 0l-1.146 1.146v-2.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5z" />
    </Lini>
  );
}

LiniFingersScrollVertical.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
