import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTrash(props = {}) {
  props.name = "Trash";
  
  return (
    <Lini {...props}>
      <path d="M18.5 2h-5.75l-1.35-1.8c-0.094-0.126-0.243-0.2-0.4-0.2h-2c-0.157 0-0.306 0.074-0.4 0.2l-1.35 1.8h-5.75c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5l17 0c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM9.25 1h1.5l0.75 1h-3l0.75-1z" />
      <path d="M17.582 4.007c-0.272-0.045-0.53 0.139-0.575 0.411l-2.336 14.014c-0.051 0.303-0.364 0.569-0.671 0.569h-8c-0.307 0-0.621-0.266-0.671-0.569l-2.336-14.014c-0.045-0.272-0.303-0.456-0.575-0.411s-0.456 0.303-0.411 0.575l2.336 14.014c0.131 0.787 0.859 1.404 1.658 1.404h8c0.798 0 1.526-0.617 1.658-1.404l2.336-14.014c0.045-0.272-0.139-0.53-0.411-0.575z" />
    </Lini>
  );
}

LiniTrash.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
