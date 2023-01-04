import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniVoicemail(props = {}) {
  props.name = "Voicemail";
  
  return (
    <Lini {...props}>
      <path d="M15 6c-2.206 0-4 1.794-4 4 0 1.194 0.526 2.266 1.357 3h-5.715c0.832-0.734 1.357-1.806 1.357-3 0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4h11c2.206 0 4-1.794 4-4s-1.794-4-4-4zM1 10c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM15 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </Lini>
  );
}

LiniVoicemail.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
