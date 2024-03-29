import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniLaundry(props = {}) {
  props.name = "Laundry";
  
  return (
    <Lini {...props}>
      <path d="M14 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M16 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z" />
      <path d="M9.5 18c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zM9.5 8c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5z" />
      <path d="M9.5 16c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c1.378 0 2.5-1.122 2.5-2.5 0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.93-1.57 3.5-3.5 3.5z" />
      <path d="M15.5 1h-12c-1.378 0-2.5 1.122-2.5 2.5v15c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-15c0-1.378-1.122-2.5-2.5-2.5zM3.5 2h12c0.827 0 1.5 0.673 1.5 1.5v1.5h-15v-1.5c0-0.827 0.673-1.5 1.5-1.5zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-14c-0.276 0-0.5-0.224-0.5-0.5v-12.5h15v12.5z" />
      <path d="M5.5 4h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
    </Lini>
  );
}

LiniLaundry.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
