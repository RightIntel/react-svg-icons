import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniQuestionCircle(props = {}) {
  props.name = "QuestionCircle";
  
  return (
    <Lini {...props}>
      <path d="M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.718-0.988-4.923-2.782-6.717zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5z" />
      <path d="M9.5 15c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5 1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 2.312-1.753 4.223-4 4.472v1.528c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M9.5 18c-0 0 0 0 0 0-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5 0 0 0 0 0 0 0.276 0 0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniQuestionCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
