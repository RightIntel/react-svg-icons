import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniTag(props = {}) {
  props.name = "Tag";
  
  return (
    <Lini {...props}>
      <path d="M7.5 19.085c-0.401 0-0.778-0.156-1.061-0.438l-5.086-5.086c-0.283-0.283-0.438-0.659-0.438-1.061s0.156-0.778 0.438-1.061l8.586-8.586c0.487-0.487 1.372-0.854 2.061-0.854h4.5c0.827 0 1.5 0.673 1.5 1.5v4.5c0 0.688-0.367 1.574-0.853 2.061l-8.586 8.586c-0.283 0.283-0.659 0.438-1.061 0.438zM12 3c-0.415 0-1.060 0.267-1.353 0.561l-8.586 8.586c-0.094 0.094-0.145 0.219-0.145 0.354s0.052 0.26 0.145 0.353l5.086 5.086c0.094 0.094 0.219 0.145 0.354 0.145s0.26-0.052 0.354-0.145l8.586-8.586c0.293-0.293 0.561-0.939 0.561-1.354v-4.5c0-0.276-0.224-0.5-0.5-0.5h-4.5z" />
      <path d="M14.5 7c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM14.5 5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniTag.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
