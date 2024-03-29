import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniUsersMinus(props = {}) {
  props.name = "UsersMinus";
  
  return (
    <Lini {...props}>
      <path d="M11.5 18h-4c-0.827 0-1.5-0.673-1.5-1.5 0-0.073 0.012-0.741 0.43-1.558 0.383-0.749 1.197-1.771 2.9-2.387 0.26-0.094 0.546 0.040 0.64 0.3s-0.040 0.546-0.3 0.64c-2.597 0.94-2.668 2.904-2.67 3.006 0.001 0.275 0.225 0.498 0.5 0.498h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M10.525 9.975c-0.128 0-0.256-0.049-0.354-0.146-0.756-0.755-1.172-1.76-1.172-2.828 0-2.206 1.794-4 4-4s4 1.794 4 4c0 0.191-0.014 0.383-0.041 0.571-0.039 0.273-0.292 0.463-0.566 0.424s-0.463-0.292-0.424-0.566c0.020-0.141 0.030-0.285 0.030-0.429 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 0.801 0.312 1.555 0.879 2.121 0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
      <path d="M4.5 18h-3c-0.827 0-1.5-0.673-1.5-1.5 0-0.037 0.008-0.927 0.663-1.8 0.378-0.505 0.894-0.904 1.533-1.188 0.764-0.34 1.708-0.512 2.805-0.512 0.179 0 0.356 0.005 0.527 0.014 0.276 0.015 0.487 0.25 0.473 0.526s-0.25 0.488-0.526 0.473c-0.153-0.008-0.312-0.012-0.473-0.012-3.895 0-3.997 2.38-4 2.503 0.001 0.274 0.225 0.497 0.5 0.497h3c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
      <path d="M5 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM5 7c-1.103 0-2 0.897-2 2s0.897 2 2 2 2-0.897 2-2c0-1.103-0.897-2-2-2z" />
      <path d="M15.5 18c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zM15.5 10c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
      <path d="M17.5 14h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniUsersMinus.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
