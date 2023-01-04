import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRefresh2(props = {}) {
  props.name = "Refresh2";
  
  return (
    <Lini {...props}>
      <path d="M10 18c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657 0.832-4.146 2.343-5.657c1.511-1.511 3.52-2.343 5.657-2.343s4.146 0.832 5.657 2.343c1.463 1.463 2.289 3.392 2.341 5.452l1.149-1.149c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2 2c-0.143 0.143-0.358 0.186-0.545 0.108s-0.309-0.26-0.309-0.462v-1c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 3.86 3.14 7 7 7 2.603 0 4.976-1.431 6.193-3.734 0.129-0.244 0.432-0.337 0.676-0.208s0.337 0.432 0.208 0.676c-1.391 2.632-4.103 4.266-7.077 4.266z" />
    </Lini>
  );
}

LiniRefresh2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
