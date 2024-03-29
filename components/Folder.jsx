import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniFolder(props = {}) {
  props.name = "Folder";
  
  return (
    <Lini {...props}>
      <path d="M18.5 5h-7.5c-0.086 0-0.238-0.094-0.276-0.171l-0.553-1.106c-0.206-0.413-0.71-0.724-1.171-0.724h-7c-0.461 0-0.965 0.311-1.171 0.724l-0.553 1.106c-0.158 0.315-0.276 0.818-0.276 1.171v10.5c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM19 16.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-10.5c0-0.196 0.083-0.548 0.171-0.724l0.553-1.106c0.038-0.077 0.191-0.171 0.276-0.171h7c0.086 0 0.238 0.094 0.276 0.171l0.553 1.106c0.206 0.413 0.71 0.724 1.171 0.724h7.5c0.276 0 0.5 0.224 0.5 0.5v10z" />
    </Lini>
  );
}

LiniFolder.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
