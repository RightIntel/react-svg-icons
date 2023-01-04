import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniGhostHipster(props = {}) {
  props.name = "GhostHipster";
  
  return (
    <Lini {...props}>
      <path d="M18.5 20c-1.645 0-2.506-0.413-3.134-0.715-0.344-0.165-0.592-0.285-0.866-0.285-0.349 0-0.638 0.193-0.973 0.416-0.411 0.274-0.876 0.584-1.527 0.584s-1.117-0.31-1.527-0.584c-0.335-0.223-0.624-0.416-0.973-0.416s-0.638 0.193-0.973 0.416c-0.411 0.274-0.876 0.584-1.527 0.584-0.662 0-1.158-0.319-1.595-0.601-0.332-0.214-0.619-0.399-0.905-0.399-0.22 0-0.455 0.112-0.779 0.266-0.651 0.31-1.542 0.734-3.221 0.734-0.276 0-0.5-0.224-0.5-0.5v-9c0-2.538 0.988-4.923 2.783-6.717s4.18-2.783 6.717-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.717v9c0 0.276-0.224 0.5-0.5 0.5zM9.5 18c0.651 0 1.117 0.31 1.527 0.584 0.335 0.223 0.624 0.416 0.973 0.416s0.638-0.193 0.973-0.416c0.411-0.274 0.876-0.584 1.527-0.584 0.501 0 0.889 0.186 1.299 0.383 0.5 0.24 1.108 0.532 2.201 0.601v-8.485c0-4.687-3.813-8.5-8.5-8.5s-8.5 3.813-8.5 8.5v8.485c1.131-0.070 1.767-0.373 2.291-0.622 0.393-0.187 0.763-0.363 1.209-0.363 0.579 0 1.040 0.296 1.446 0.558 0.368 0.237 0.687 0.442 1.054 0.442 0.349 0 0.638-0.193 0.973-0.416 0.411-0.274 0.876-0.584 1.527-0.584z" />
      <path d="M6.5 10c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M12.5 10c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 8c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M15.923 14.233c-0.111-0.175-0.318-0.264-0.521-0.224-0.187 0.037-0.368 0.056-0.536 0.056-0 0-0 0-0 0-0.872-0-1.402-0.503-1.962-1.036-0.533-0.506-1.084-1.030-1.903-1.030-0.597 0-1.133 0.263-1.5 0.679-0.367-0.416-0.903-0.679-1.5-0.679-0.819 0-1.37 0.524-1.903 1.030-0.561 0.533-1.090 1.036-1.962 1.036-0.169 0-0.349-0.019-0.536-0.056-0.203-0.041-0.411 0.048-0.521 0.224s-0.101 0.401 0.023 0.567c1.157 1.543 2.642 1.867 3.685 1.867 0.621 0 1.115-0.117 1.355-0.187 0.531-0.154 1.018-0.542 1.36-1.028 0.343 0.486 0.83 0.873 1.36 1.028 0.24 0.070 0.734 0.187 1.355 0.187 1.042-0 2.528-0.324 3.685-1.867 0.124-0.166 0.134-0.391 0.023-0.567zM7.86 15.52c-0.188 0.055-0.579 0.147-1.076 0.147-0.585 0-1.349-0.131-2.069-0.654 0.935-0.179 1.556-0.768 2.070-1.258 0.492-0.468 0.815-0.755 1.214-0.755 0.551 0 1 0.449 1 1 0 0.611-0.554 1.349-1.14 1.52zM12.215 15.667c-0.497 0-0.887-0.092-1.076-0.147-0.586-0.17-1.14-0.909-1.14-1.52 0-0.551 0.449-1 1-1 0.4 0 0.722 0.287 1.214 0.755 0.515 0.489 1.135 1.079 2.070 1.257-0.721 0.523-1.485 0.654-2.069 0.654z" />
    </Lini>
  );
}

LiniGhostHipster.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
