import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniOutlet(props = {}) {
  props.name = "Outlet";
  
  return (
    <Lini {...props}>
      <path d="M6.5 10c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M13.5 9c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M4.843 18c-0.114 0-0.226-0.039-0.314-0.111-2.242-1.814-3.528-4.507-3.528-7.389s1.286-5.574 3.528-7.389c0.089-0.072 0.2-0.111 0.314-0.111l10.314-0c0.114 0 0.226 0.039 0.314 0.111 2.242 1.814 3.528 4.507 3.528 7.389s-1.286 5.574-3.528 7.389c-0.089 0.072-0.2 0.111-0.314 0.111l-10.314 0zM5.023 4c-1.923 1.621-3.023 3.98-3.023 6.5s1.099 4.879 3.023 6.5l9.955-0c1.923-1.621 3.023-3.98 3.023-6.5s-1.099-4.879-3.023-6.5l-9.955 0z" />
      <path d="M11.5 15h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.5c0-1.103 0.897-2 2-2s2 0.897 2 2v1.5c0 0.276-0.224 0.5-0.5 0.5zM9 14h2v-1c0-0.551-0.449-1-1-1s-1 0.449-1 1v1z" />
    </Lini>
  );
}

LiniOutlet.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
