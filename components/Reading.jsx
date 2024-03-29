import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniReading(props = {}) {
  props.name = "Reading";
  
  return (
    <Lini {...props}>
      <path d="M18.5 5c-0.049 0-1.218 0.006-2.955 0.521-1.515 0.449-3.764 1.386-6.045 3.318-2.281-1.931-4.531-2.869-6.045-3.318-1.737-0.515-2.906-0.521-2.955-0.521-0.276 0-0.5 0.224-0.5 0.5v10c0 0.133 0.053 0.26 0.146 0.354s0.221 0.146 0.354 0.146c0.043 0 4.36 0.044 8.668 3.874 0.095 0.084 0.213 0.126 0.332 0.126s0.237-0.042 0.332-0.126c2.241-1.992 4.476-2.939 5.957-3.382 1.609-0.482 2.701-0.492 2.711-0.492 0.276 0 0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5zM1 9h0.5c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5h-0.5v-3zM1 15.029v-2.029h0.5c0.827 0 1.5-0.673 1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5h-0.5v-1.965c1.241 0.131 4.606 0.751 8 3.692v8.704c-2.106-1.658-4.141-2.494-5.545-2.91-1.084-0.321-1.947-0.444-2.455-0.491zM15.545 15.521c-1.404 0.416-3.439 1.252-5.545 2.91v-8.704c2.184-1.891 4.345-2.803 5.789-3.235 0.962-0.288 1.74-0.408 2.211-0.457v1.965h-0.5c-0.827 0-1.5 0.673-1.5 1.5v2c0 0.827 0.673 1.5 1.5 1.5h0.5v2.029c-0.507 0.047-1.37 0.17-2.455 0.491zM18 9v3h-0.5c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h0.5z" />
      <path d="M9.5 7c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zM9.5 1c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5 1.122-2.5 2.5-2.5z" />
    </Lini>
  );
}

LiniReading.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
