import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniBookmark2(props = {}) {
  props.name = "Bookmark2";
  
  return (
    <Lini {...props}>
      <path d="M15.5 20c-0.143 0-0.283-0.062-0.38-0.175l-5.62-6.557-5.62 6.557c-0.136 0.159-0.357 0.216-0.553 0.144s-0.327-0.26-0.327-0.469v-18c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v18c0 0.209-0.13 0.396-0.327 0.469-0.057 0.021-0.115 0.031-0.173 0.031zM9.5 12c0.146 0 0.285 0.064 0.38 0.175l5.12 5.974v-16.148h-11v16.148l5.12-5.974c0.095-0.111 0.234-0.175 0.38-0.175z" />
    </Lini>
  );
}

LiniBookmark2.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
