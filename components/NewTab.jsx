import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniNewTab(props = {}) {
  props.name = "NewTab";
  
  return (
    <Lini {...props}>
      <path d="M3 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M5 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M7 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M18.5 1h-17c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-8.5h7.5c0.827 0 1.5-0.673 1.5-1.5 0-0.276 0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5 0 0.827 0.673 1.5 1.5 1.5h1.5v11.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h14c0.827 0 1.5-0.673 1.5-1.5v-15c0-0.827-0.673-1.5-1.5-1.5zM17.5 5c-0.276 0-0.5-0.224-0.5-0.5 0-0.827-0.673-1.5-1.5-1.5h-5c-0.827 0-1.5 0.673-1.5 1.5 0 0.276-0.224 0.5-0.5 0.5h-7.5v-2.5c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v2.5h-1.5z" />
      <path d="M7.5 11h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1.793l-5.146 5.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.146-5.146v1.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z" />
    </Lini>
  );
}

LiniNewTab.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
