import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSwim(props = {}) {
  props.name = "Swim";
  
  return (
    <Lini {...props}>
      <path d="M13 9c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM13 6c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z" />
      <path d="M5.5 9c-0.162 0-0.32-0.078-0.417-0.223-0.153-0.23-0.091-0.54 0.139-0.693l3-2c0.221-0.147 0.518-0.096 0.677 0.116l1.5 2c0.166 0.221 0.121 0.534-0.1 0.7s-0.534 0.121-0.7-0.1l-1.216-1.622-2.606 1.738c-0.085 0.057-0.182 0.084-0.277 0.084z" />
      <path d="M17.5 13c-0.152 0-0.301-0.069-0.4-0.199v0c-0.014-0.018-1.392-1.801-3.601-1.801-1.144 0-2.19 0.465-3.297 0.957-1.154 0.513-2.347 1.043-3.703 1.043-2.719 0-4.333-2.11-4.4-2.2-0.166-0.221-0.121-0.534 0.1-0.7s0.534-0.121 0.7 0.1c0.013 0.017 1.391 1.8 3.6 1.8 1.144 0 2.19-0.465 3.297-0.957 1.154-0.513 2.347-1.043 3.703-1.043 2.719 0 4.333 2.11 4.4 2.2 0.166 0.221 0.121 0.534-0.1 0.7-0.090 0.067-0.195 0.1-0.3 0.1z" />
      <path d="M17.5 16c-0.152 0-0.301-0.069-0.4-0.199v0c-0.014-0.018-1.392-1.801-3.601-1.801-1.144 0-2.19 0.465-3.297 0.957-1.154 0.513-2.347 1.043-3.703 1.043-2.719 0-4.333-2.11-4.4-2.2-0.166-0.221-0.121-0.534 0.1-0.7s0.534-0.121 0.7 0.1c0.013 0.017 1.391 1.8 3.6 1.8 1.144 0 2.19-0.465 3.297-0.957 1.154-0.513 2.347-1.043 3.703-1.043 2.719 0 4.333 2.11 4.4 2.2 0.166 0.221 0.121 0.534-0.1 0.7-0.090 0.067-0.195 0.1-0.3 0.1z" />
    </Lini>
  );
}

LiniSwim.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
