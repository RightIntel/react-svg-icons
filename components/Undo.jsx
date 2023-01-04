import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniUndo(props = {}) {
  props.name = "Undo";
  
  return (
    <Lini {...props}>
      <path d="M17.9 12.199c-0.958-1.275-2.213-2.332-3.63-3.055-1.486-0.759-3.091-1.144-4.77-1.144-2.834 0-5.53 1.141-7.5 3.152v-2.652c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.928c1.794-1.912 4.295-3 6.928-3 3.016 0 5.786 1.385 7.6 3.799 0.098 0.131 0.248 0.2 0.4 0.2 0.105 0 0.21-0.033 0.3-0.1 0.221-0.166 0.265-0.479 0.099-0.7z" />
    </Lini>
  );
}

LiniUndo.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
