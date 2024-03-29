import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniScrewdriver(props = {}) {
  props.name = "Screwdriver";
  
  return (
    <Lini {...props}>
      <path d="M18.646 15.439l-4.586-4.586c-0.487-0.487-1.265-0.854-1.811-0.854-0.122 0-0.209-0.034-0.25-0.061v-0.439c0-0.276-0.224-0.5-0.5-0.5-0.138 0-0.263 0.056-0.354 0.147l-0.646 0.646-6.793-6.793 0.146-0.146c0.195-0.195 0.195-0.512 0-0.707l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-1 1c-0.195 0.195-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l0.146-0.146 6.793 6.793-0.646 0.646c-0.091 0.090-0.147 0.216-0.147 0.354 0 0.276 0.224 0.5 0.5 0.5h0.439c0.026 0.041 0.061 0.128 0.061 0.25 0 0.546 0.367 1.324 0.854 1.811l4.586 4.586c0.292 0.292 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l1.086-1.086c0.585-0.585 0.585-1.536 0-2.121zM1.207 1.5l0.293-0.293 1.293 1.293-0.293 0.293-1.293-1.293zM11 12.25c0-0.458-0.188-0.851-0.474-1.069l0.655-0.655c0.217 0.287 0.611 0.474 1.069 0.474 0.251 0 0.788 0.245 1.104 0.561l2.939 2.939-1.793 1.793-2.939-2.939c-0.316-0.316-0.561-0.852-0.561-1.104zM17.939 16.854l-1.086 1.086c-0.195 0.195-0.512 0.195-0.707 0l-0.939-0.939 1.793-1.793 0.939 0.939c0.195 0.195 0.195 0.512 0 0.707z" />
    </Lini>
  );
}

LiniScrewdriver.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
