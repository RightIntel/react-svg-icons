import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPaperclip(props = {}) {
  props.name = "Paperclip";
  
  return (
    <Lini {...props}>
      <path d="M9.5 20c-2.481 0-4.5-2.019-4.5-4.5v-12c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v11c0 1.378-1.122 2.5-2.5 2.5s-2.5-1.122-2.5-2.5v-6c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v6c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5v-11c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v12c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-7c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v7c0 2.481-2.019 4.5-4.5 4.5z" />
    </Lini>
  );
}

LiniPaperclip.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
