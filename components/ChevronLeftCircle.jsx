import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniChevronLeftCircle(props = {}) {
  props.name = "ChevronLeftCircle";
  
  return (
    <Lini {...props}>
      <path d="M2.782 3.782c1.794-1.794 4.18-2.782 6.718-2.782s4.923 0.988 6.718 2.782 2.782 4.18 2.782 6.717-0.988 4.923-2.782 6.718-4.18 2.782-6.718 2.782-4.923-0.988-6.718-2.782-2.782-4.18-2.782-6.718 0.988-4.923 2.782-6.717zM9.5 19c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5z" />
      <path d="M11 16c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-4.646-4.646 4.646-4.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5 5c-0.195 0.195-0.195 0.512 0 0.707l5 5c0.098 0.098 0.226 0.146 0.354 0.146z" />
    </Lini>
  );
}

LiniChevronLeftCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
