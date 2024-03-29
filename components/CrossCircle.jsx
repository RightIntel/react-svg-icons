import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCrossCircle(props = {}) {
  props.name = "CrossCircle";
  
  return (
    <Lini {...props}>
      <path d="M14.332 14.126l-4.080-3.626 4.080-3.626c0.206-0.183 0.225-0.499 0.042-0.706s-0.499-0.225-0.706-0.042l-4.168 3.705-4.168-3.705c-0.206-0.183-0.522-0.165-0.706 0.042s-0.165 0.522 0.042 0.706l4.080 3.626-4.080 3.626c-0.206 0.183-0.225 0.499-0.042 0.706 0.099 0.111 0.236 0.168 0.374 0.168 0.118 0 0.237-0.042 0.332-0.126l4.168-3.705 4.168 3.705c0.095 0.085 0.214 0.126 0.332 0.126 0.138 0 0.275-0.057 0.374-0.168 0.183-0.206 0.165-0.522-0.042-0.706z" />
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z" />
    </Lini>
  );
}

LiniCrossCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
