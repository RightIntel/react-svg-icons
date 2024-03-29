import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniConstructionCone(props = {}) {
  props.name = "ConstructionCone";
  
  return (
    <Lini {...props}>
      <path d="M18.5 17h-0.653l-5.527-14.739c-0.265-0.707-1.064-1.261-1.819-1.261h-1c-0.755 0-1.554 0.554-1.819 1.261l-5.527 14.739h-0.653c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5zM13.778 9h-7.557l1.125-3h5.307l1.125 3zM14.153 10l1.125 3h-10.557l1.125-3h8.307zM8.617 2.612c0.12-0.32 0.541-0.612 0.883-0.612h1c0.342 0 0.763 0.292 0.883 0.612l0.896 2.388h-4.557l0.896-2.388zM4.347 14h11.307l1.125 3h-13.557l1.125-3zM18.5 19h-17c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniConstructionCone.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
