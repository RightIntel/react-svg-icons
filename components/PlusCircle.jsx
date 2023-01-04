import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPlusCircle(props = {}) {
  props.name = "PlusCircle";
  
  return (
    <Lini {...props}>
      <path d="M16.218 3.782c-1.794-1.794-4.18-2.782-6.718-2.782s-4.923 0.988-6.718 2.782-2.782 4.18-2.782 6.717 0.988 4.923 2.782 6.718 4.18 2.782 6.718 2.782 4.923-0.988 6.718-2.782 2.782-4.18 2.782-6.718-0.988-4.923-2.782-6.717zM9.5 19c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5z" />
      <path d="M15.5 10h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniPlusCircle.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
