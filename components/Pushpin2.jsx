import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPushpin2(props = {}) {
  props.name = "Pushpin2";
  
  return (
    <Lini {...props}>
      <path d="M14 4.5c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5c0 1.956 1.254 3.623 3 4.243v10.757c0 0.22 0.144 0.415 0.355 0.479 0.048 0.014 0.097 0.022 0.145 0.022 0.164 0 0.322-0.081 0.416-0.223l2-3c0.055-0.082 0.084-0.179 0.084-0.277v-7.757c1.746-0.619 3-2.287 3-4.243zM10 16.349l-1 1.5v-8.877c0.164 0.018 0.331 0.028 0.5 0.028s0.336-0.010 0.5-0.028v7.377zM9.5 8c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
      <path d="M7.5 5c-0.276 0-0.5-0.224-0.5-0.5 0-1.378 1.122-2.5 2.5-2.5 0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.827 0-1.5 0.673-1.5 1.5 0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniPushpin2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
