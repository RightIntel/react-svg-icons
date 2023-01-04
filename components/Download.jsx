import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniDownload(props = {}) {
  props.name = "Download";
  
  return (
    <Lini {...props}>
      <path d="M13.854 8.646c-0.195-0.195-0.512-0.195-0.707 0l-3.146 3.146v-10.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v10.293l-3.146-3.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l4 4c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l4-4c0.195-0.195 0.195-0.512 0-0.707z" />
      <path d="M9.5 20c-2.488 0-4.834-0.542-6.607-1.527-1.866-1.037-2.893-2.447-2.893-3.973 0-0.978 0.42-1.878 1.249-2.674 0.733-0.704 1.768-1.308 3.077-1.794 0.248-0.092 0.526 0.025 0.632 0.268s0.005 0.526-0.231 0.647c-1.082 0.552-1.727 1.32-1.727 2.055 0 0.725 0.647 1.464 1.774 2.028 1.254 0.627 2.932 0.972 4.726 0.972s3.472-0.345 4.726-0.972c1.127-0.564 1.774-1.303 1.774-2.028 0-0.735-0.646-1.503-1.727-2.055-0.236-0.12-0.337-0.404-0.231-0.647s0.384-0.36 0.632-0.268c1.309 0.487 2.344 1.091 3.077 1.794 0.829 0.796 1.249 1.696 1.249 2.674 0 1.525-1.027 2.936-2.893 3.973-1.773 0.985-4.119 1.527-6.607 1.527zM2.071 12.429c-0.621 0.551-1.071 1.238-1.071 2.071 0 1.146 0.845 2.246 2.379 3.098 1.627 0.904 3.801 1.402 6.121 1.402s4.494-0.498 6.121-1.402c1.534-0.852 2.379-1.953 2.379-3.098 0-0.833-0.45-1.52-1.071-2.071 0.047 0.188 0.071 0.378 0.071 0.571 0 1.134-0.826 2.172-2.327 2.922-1.39 0.695-3.227 1.078-5.173 1.078s-3.783-0.383-5.173-1.078c-1.5-0.75-2.327-1.788-2.327-2.922 0-0.193 0.024-0.383 0.071-0.571z" />
    </Lini>
  );
}

LiniDownload.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
