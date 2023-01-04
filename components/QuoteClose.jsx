import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniQuoteClose(props = {}) {
  props.name = "QuoteClose";
  
  return (
    <Lini {...props}>
      <path d="M4.5 13c0.924 0 1.783-0.28 2.499-0.759-1.297 2.245-3.725 3.759-6.499 3.759-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c2.27 0 4.405-0.884 6.010-2.49s2.49-3.74 2.49-6.010c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5zM4.5 5c1.93 0 3.5 1.57 3.5 3.5 0 0.030-0.001 0.060-0.001 0.090-0.048 1.888-1.599 3.41-3.499 3.41-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5z" />
      <path d="M11.5 16c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c2.27 0 4.405-0.884 6.010-2.49s2.49-3.74 2.49-6.010c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5c0.924 0 1.783-0.28 2.499-0.759-1.297 2.245-3.725 3.759-6.499 3.759zM15.5 12c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5c0 0.030-0.001 0.060-0.001 0.090-0.048 1.888-1.599 3.41-3.499 3.41z" />
    </Lini>
  );
}

LiniQuoteClose.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
