import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCord(props = {}) {
  props.name = "Cord";
  
  return (
    <Lini {...props}>
      <path d="M18.756 17.15c-0.193-0.197-0.51-0.2-0.707-0.007-1.222 1.198-2.838 1.857-4.549 1.857-3.426 0-6.241-2.664-6.483-6.030 2.239-0.257 3.983-2.164 3.983-4.47v-3.5h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.5v-3.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3.5h-3v-3.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v3.5c0 2.318 1.761 4.231 4.015 4.474 0.113 1.825 0.877 3.525 2.182 4.829 1.417 1.417 3.3 2.197 5.303 2.197 1.975 0 3.839-0.761 5.249-2.143 0.197-0.193 0.2-0.51 0.007-0.707zM3 8.5v-3.5h7v3.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5z" />
    </Lini>
  );
}

LiniCord.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
