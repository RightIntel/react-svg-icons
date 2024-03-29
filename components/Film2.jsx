import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniFilm2(props = {}) {
  props.name = "Film2";
  
  return (
    <Lini {...props}>
      <path d="M19.5 19h-0.5v-15h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-1.5c0-0.276-0.224-0.5-0.5-0.5h-5c-0.276 0-0.5 0.224-0.5 0.5v1.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-8.5c-0.276 0-0.5 0.224-0.5 0.5v6c0 0.276 0.224 0.5 0.5 0.5 3.033 0 5.5 2.467 5.5 5.5 0 0.133 0.053 0.26 0.146 0.354s0.221 0.146 0.354 0.146h2.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM18 19h-5v-15h5v15zM9.5 17c-0 0-0-0-0-0s-0 0-0 0h-0.5v-1h1v1l-0.5 0zM11 16h1v1h-1v-1zM9 7v-1h1v1h-1zM7 7v-1h1v1h-1zM5 7v-1h1v1h-1zM3 7v-1h1v1h-1zM11 6h1v1h-1v-1zM12 2h4v1h-4v-1zM10 4h2v1h-2v-1zM2 6v1h-1v-1h1zM1 11.019v-3.019h11v7h-5.5c-0.92-2.201-3.017-3.791-5.5-3.981zM6.825 16h1.175v1h-1.019c-0.026-0.341-0.079-0.675-0.156-1zM10 18h0.5c0 0 0 0 0 0s0-0 0-0h1.5v1h-2v-1z" />
    </Lini>
  );
}

LiniFilm2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
