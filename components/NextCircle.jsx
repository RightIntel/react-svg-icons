import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniNextCircle(props = {}) {
  props.name = "NextCircle";
  
  return (
    <Lini {...props}>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5z" />
      <path d="M6.5 16c-0.072 0-0.144-0.016-0.212-0.047-0.176-0.082-0.288-0.259-0.288-0.453v-10c0-0.194 0.112-0.371 0.288-0.453s0.383-0.056 0.532 0.069l6 5c0.114 0.095 0.18 0.236 0.18 0.384s-0.066 0.289-0.18 0.384l-6 5c-0.092 0.076-0.205 0.116-0.32 0.116zM7 6.568v7.865l4.719-3.933-4.719-3.932z" />
      <path d="M13.5 15c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniNextCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
