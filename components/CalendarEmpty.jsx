import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCalendarEmpty(props = {}) {
  props.name = "CalendarEmpty";
  
  return (
    <Lini {...props}>
      <path d="M18.5 2h-2.5v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-10v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-2.5c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM1.5 3h2.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h10v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h2.5c0.276 0 0.5 0.224 0.5 0.5v2.5h-18v-2.5c0-0.276 0.224-0.5 0.5-0.5zM18.5 18h-17c-0.276 0-0.5-0.224-0.5-0.5v-10.5h18v10.5c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniCalendarEmpty.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
