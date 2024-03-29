import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSelfTimer(props = {}) {
  props.name = "SelfTimer";
  
  return (
    <Lini {...props}>
      <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-1.483 0.332-2.904 0.988-4.223 0.123-0.247 0.423-0.348 0.67-0.225s0.348 0.423 0.225 0.67c-0.586 1.179-0.883 2.45-0.883 3.777 0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5c-0.253 0-0.465-0.188-0.496-0.439s0.13-0.485 0.375-0.546l4-1c0.268-0.067 0.539 0.096 0.606 0.364s-0.096 0.539-0.364 0.606l-1.508 0.377c1.536 0.437 2.944 1.26 4.104 2.42 1.794 1.794 2.782 4.18 2.782 6.718s-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.717 2.782z" />
      <path d="M9.5 11.027c-0.088 0-0.178-0.023-0.258-0.072l-5-3.027c-0.236-0.143-0.312-0.45-0.169-0.687s0.45-0.312 0.687-0.169l5 3.027c0.236 0.143 0.312 0.45 0.169 0.687-0.094 0.155-0.259 0.241-0.428 0.241z" />
    </Lini>
  );
}

LiniSelfTimer.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
