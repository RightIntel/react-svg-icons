import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniHotdog(props = {}) {
  props.name = "Hotdog";
  
  return (
    <Lini {...props}>
      <path d="M3.5 18c-0.276 0-0.5-0.224-0.5-0.5v-1c0-1.378 1.122-2.5 2.5-2.5 0.827 0 1.5-0.673 1.5-1.5 0-1.378 1.122-2.5 2.5-2.5 0.827 0 1.5-0.673 1.5-1.5 0-1.378 1.122-2.5 2.5-2.5 0.827 0 1.5-0.673 1.5-1.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 1.378-1.122 2.5-2.5 2.5-0.827 0-1.5 0.673-1.5 1.5 0 1.378-1.122 2.5-2.5 2.5-0.827 0-1.5 0.673-1.5 1.5 0 1.378-1.122 2.5-2.5 2.5-0.827 0-1.5 0.673-1.5 1.5v1c0 0.276-0.224 0.5-0.5 0.5z" />
      <path d="M19 4.5c0-0.935-0.364-1.814-1.025-2.475s-1.54-1.025-2.475-1.025c-0.831 0-1.618 0.288-2.247 0.817-0.46-0.351-1.338-0.817-2.753-0.817-0.931 0-2.040 0.384-3.297 1.142-1.115 0.672-2.28 1.603-3.369 2.692s-2.020 2.254-2.692 3.369c-0.758 1.257-1.142 2.366-1.142 3.297 0 1.415 0.466 2.292 0.817 2.753-0.529 0.629-0.817 1.416-0.817 2.247 0 0.935 0.364 1.814 1.025 2.475s1.54 1.025 2.475 1.025c0.831 0 1.618-0.288 2.247-0.817 0.46 0.351 1.338 0.817 2.753 0.817 0.931 0 2.040-0.384 3.297-1.142 1.115-0.672 2.28-1.603 3.369-2.692s2.020-2.254 2.692-3.369c0.758-1.257 1.142-2.366 1.142-3.297 0-1.415-0.466-2.292-0.817-2.753 0.529-0.629 0.817-1.416 0.817-2.247zM4.541 5.541c2.151-2.151 4.49-3.541 5.959-3.541 1.036 0 1.679 0.29 2.028 0.523l-11.005 11.005c-0.233-0.349-0.523-0.991-0.523-2.028 0-1.469 1.39-3.808 3.541-5.959zM3.5 19c-0.668 0-1.296-0.26-1.768-0.732s-0.732-1.1-0.732-1.768 0.26-1.296 0.732-1.768l12-12c0.472-0.472 1.1-0.732 1.768-0.732s1.296 0.26 1.768 0.732c0.472 0.472 0.732 1.1 0.732 1.768s-0.26 1.296-0.732 1.768l-12 12c-0.472 0.472-1.1 0.732-1.768 0.732zM14.459 15.459c-2.151 2.151-4.49 3.541-5.959 3.541-1.036 0-1.679-0.29-2.028-0.523l11.005-11.005c0.233 0.349 0.523 0.991 0.523 2.028 0 1.469-1.39 3.808-3.541 5.959z" />
    </Lini>
  );
}

LiniHotdog.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
