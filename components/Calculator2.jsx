import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCalculator2(props = {}) {
  props.name = "Calculator2";
  
  return (
    <Lini {...props}>
      <path d="M16.5 20h-14c-0.827 0-1.5-0.673-1.5-1.5v-17c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v17c0 0.827-0.673 1.5-1.5 1.5zM2.5 1c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h14c0.276 0 0.5-0.224 0.5-0.5v-17c0-0.276-0.224-0.5-0.5-0.5h-14z" />
      <path d="M15.5 7h-12c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5zM4 6h11v-3h-11v3z" />
      <path d="M15.5 8h-12c-0.276 0-0.5 0.224-0.5 0.5v9c0 0.276 0.224 0.5 0.5 0.5h12c0.276 0 0.5-0.224 0.5-0.5v-9c0-0.276-0.224-0.5-0.5-0.5zM15 11h-2v-2h2v2zM7 12h2v2h-2v-2zM6 14h-2v-2h2v2zM7 11v-2h2v2h-2zM9 15v2h-2v-2h2zM10 15h2v2h-2v-2zM12 14h-2v-2h2v2zM10 11v-2h2v2h-2zM6 9v2h-2v-2h2zM4 15h2v2h-2v-2zM13 17v-5h2v5h-2z" />
    </Lini>
  );
}

LiniCalculator2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
