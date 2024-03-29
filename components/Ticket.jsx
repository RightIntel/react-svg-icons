import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTicket(props = {}) {
  props.name = "Ticket";
  
  return (
    <Lini {...props}>
      <path d="M19.5 16h-19c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5 0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h19c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM1 15h18v-2.050c-1.14-0.232-2-1.242-2-2.45s0.86-2.217 2-2.45v-2.050h-18v2.050c1.14 0.232 2 1.242 2 2.45s-0.86 2.217-2 2.45v2.050z" />
      <path d="M15.5 14h-11c-0.276 0-0.5-0.224-0.5-0.5v-6c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5v6c0 0.276-0.224 0.5-0.5 0.5zM5 13h10v-5h-10v5z" />
    </Lini>
  );
}

LiniTicket.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
