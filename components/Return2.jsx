import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniReturn2(props = {}) {
  props.name = "Return2";
  
  return (
    <Lini {...props}>
      <path d="M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929-3.094 0-5.975 1.425-7.853 3.807v-1.307c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.972c0 0.229 0.155 0.428 0.377 0.485 0.097 0.025 0.195 0.019 0.284-0.011v0l1.353-0.461c0-0 0-0 0-0l1.5-0.511c0.261-0.089 0.401-0.373 0.312-0.634s-0.373-0.401-0.634-0.312l-1.49 0.508c1.688-2.208 4.32-3.534 7.151-3.534 4.963 0 9 4.037 9 9s-4.037 9-9 9c-3.316 0-6.354-1.815-7.928-4.737-0.131-0.243-0.434-0.334-0.677-0.203s-0.334 0.434-0.203 0.677c1.749 3.246 5.125 5.263 8.809 5.263 2.671 0 5.182-1.040 7.071-2.929s2.929-4.4 2.929-7.071c0-2.671-1.040-5.182-2.929-7.071z" />
    </Lini>
  );
}

LiniReturn2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
