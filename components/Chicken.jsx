import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniChicken(props = {}) {
  props.name = "Chicken";
  
  return (
    <Lini {...props}>
      <path d="M18.5 15h-0.5c-0.415 0-1.060-0.267-1.354-0.561l-1.778-1.778c0.022-0.217 0.009-0.442-0.039-0.677-0.14-0.679-0.555-1.403-1.128-2.404-0.374-0.653-0.798-1.392-1.254-2.304-0.143-0.286-0.296-0.635-0.474-1.039-0.528-1.203-1.186-2.7-2.178-3.946-1.209-1.52-2.655-2.291-4.296-2.291-3.033 0-5.5 2.467-5.5 5.5 0 1.641 0.771 3.086 2.291 4.296 1.246 0.991 2.743 1.649 3.946 2.177 0.404 0.178 0.754 0.331 1.039 0.474 0.912 0.456 1.652 0.88 2.304 1.254 1.239 0.71 2.057 1.179 2.877 1.179 0.069 0 0.137-0.004 0.205-0.011l1.777 1.777c0.293 0.293 0.561 0.939 0.561 1.354v0.5c0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.276 0.224-0.5 0.5-0.5 0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5zM10.078 12.834c-0.631-0.362-1.417-0.812-2.354-1.281-0.308-0.154-0.685-0.32-1.084-0.495-2.246-0.987-5.639-2.477-5.639-5.558 0-2.481 2.019-4.5 4.5-4.5 3.080 0 4.571 3.394 5.558 5.639 0.175 0.399 0.341 0.777 0.495 1.084 0.469 0.937 0.919 1.723 1.281 2.354 1.144 1.996 1.383 2.499 0.563 3.319-0.429 0.429-0.727 0.484-0.939 0.484-0.554 0-1.32-0.439-2.38-1.047zM18.5 17c-0.827 0-1.5 0.673-1.5 1.5 0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-0.5c0-0.688-0.367-1.574-0.854-2.061l-1.47-1.47c0.143-0.102 0.285-0.223 0.427-0.366s0.263-0.284 0.365-0.428l1.47 1.47c0.487 0.487 1.372 0.854 2.061 0.854h0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniChicken.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
