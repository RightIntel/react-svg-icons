import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniMute(props = {}) {
  props.name = "Mute";
  
  return (
    <Lini {...props}>
      <path d="M10.834 5.128c-0.205-0.185-0.521-0.168-0.706 0.037l-1.128 1.254v-2.169c0-0.72-0.427-1.043-0.85-1.043-0.247 0-0.494 0.104-0.736 0.309l-4.098 3.483h-1.816c-0.827 0-1.5 0.673-1.5 1.5v4c0 0.827 0.673 1.5 1.5 1.5h0.677l-1.049 1.166c-0.185 0.205-0.168 0.521 0.037 0.706 0.096 0.086 0.215 0.128 0.334 0.128 0.137 0 0.273-0.056 0.372-0.166l1.562-1.735 3.981 3.384c0.241 0.205 0.489 0.309 0.736 0.309 0 0 0 0 0 0 0.272 0 0.516-0.132 0.67-0.362 0.119-0.179 0.18-0.408 0.18-0.68v-8.836l1.872-2.080c0.185-0.205 0.168-0.521-0.037-0.706zM8 4.331v3.199l-4 4.444v-4.244l4-3.4zM1 12.5v-4c0-0.276 0.224-0.5 0.5-0.5h1.5v5h-1.5c-0.276 0-0.5-0.224-0.5-0.5zM8 16.669l-3.898-3.313 3.898-4.331v7.644z" />
    </Lini>
  );
}

LiniMute.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
