import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniConvex(props = {}) {
  props.name = "Convex";
  
  return (
    <Lini {...props}>
      <path d="M9.5 18c-3.514 0-7.923-0.971-8.108-1.012-0.179-0.040-0.322-0.174-0.372-0.351-0.042-0.146-1.019-3.597-1.019-6.137s0.978-5.992 1.019-6.137c0.050-0.176 0.193-0.311 0.372-0.351 0.186-0.041 4.594-1.012 8.108-1.012s7.923 0.971 8.108 1.012c0.179 0.040 0.322 0.174 0.372 0.351 0.042 0.146 1.019 3.597 1.019 6.137s-0.978 5.992-1.019 6.137c-0.050 0.176-0.193 0.311-0.372 0.351-0.186 0.041-4.594 1.012-8.108 1.012zM1.902 16.074c1.049 0.217 4.701 0.926 7.598 0.926 2.899 0 6.549-0.709 7.598-0.926 0.233-0.879 0.902-3.581 0.902-5.574s-0.67-4.696-0.902-5.574c-1.049-0.217-4.701-0.926-7.598-0.926-2.899 0-6.549 0.709-7.598 0.926-0.233 0.879-0.902 3.581-0.902 5.574s0.67 4.696 0.902 5.574z" />
    </Lini>
  );
}

LiniConvex.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
