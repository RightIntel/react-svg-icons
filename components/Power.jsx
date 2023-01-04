import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPower(props = {}) {
  props.name = "Power";
  
  return (
    <Lini {...props}>
      <path d="M5.5 20c-0.098 0-0.197-0.029-0.283-0.088-0.199-0.136-0.272-0.395-0.174-0.615l3.243-7.297h-4.786c-0.202 0-0.385-0.122-0.462-0.309s-0.035-0.402 0.108-0.545l10-10c0.17-0.17 0.438-0.195 0.637-0.059s0.272 0.395 0.174 0.615l-3.243 7.297h4.786c0.202 0 0.385 0.122 0.462 0.309s0.035 0.402-0.108 0.545l-10 10c-0.097 0.097-0.225 0.146-0.354 0.146zM4.707 11h4.348c0.169 0 0.327 0.086 0.419 0.228s0.106 0.321 0.038 0.476l-2.462 5.539 7.242-7.242h-4.348c-0.169 0-0.327-0.086-0.419-0.228s-0.106-0.321-0.038-0.476l2.462-5.539-7.242 7.242z" />
    </Lini>
  );
}

LiniPower.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
