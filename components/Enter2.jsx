import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniEnter2(props = {}) {
  props.name = "Enter2";
  
  return (
    <Lini {...props}>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c2.538 0 4.923 0.988 6.717 2.783s2.783 4.18 2.783 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782z" />
      <path d="M9.5 4c-0.276 0-0.5 0.224-0.5 0.5v4.793l-8.146-8.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l8.146 8.146h-4.793c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniEnter2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
