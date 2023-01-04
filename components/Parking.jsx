import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniParking(props = {}) {
  props.name = "Parking";
  
  return (
    <Lini {...props}>
      <path d="M5.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM5.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M14.5 16c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM14.5 14c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M17.364 12.252c-0.119-0.126-0.254-0.242-0.406-0.346-0.13-0.794-0.553-3.213-1.011-4.129-0.483-0.966-2.1-1.4-3.372-1.593-0.273-0.042-0.528 0.146-0.57 0.419s0.146 0.528 0.419 0.569c1.678 0.255 2.457 0.711 2.628 1.052 0.287 0.575 0.606 2.096 0.803 3.183-0.048-0.014-0.096-0.028-0.145-0.041-1.268-0.336-3.034-0.364-5.21-0.366-0 0-0 0-0 0-0.276 0-0.5 0.224-0.5 0.5s0.223 0.5 0.5 0.5c2.103 0.002 3.804 0.027 4.955 0.332 1.098 0.291 1.545 0.774 1.545 1.668v2.5c0 0.276-0.224 0.5-0.5 0.5h-13c-0.276 0-0.5-0.224-0.5-0.5v-2.5c0-0.308 0.053-0.561 0.161-0.774 0.125-0.246 0.027-0.547-0.22-0.672s-0.547-0.027-0.672 0.22c-0.179 0.352-0.269 0.764-0.269 1.226v2.5c0 0.652 0.418 1.208 1 1.414v1.086c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1h8v1c0 0.551 0.449 1 1 1h1c0.551 0 1-0.449 1-1v-1.086c0.582-0.206 1-0.762 1-1.414v-2.5c0-0.711-0.214-1.299-0.636-1.748zM5 19h-1v-1h1v1zM15 19v-1h1v1h-1z" />
      <path d="M4.5 10c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.5c1.103 0 2 0.897 2 2s-0.897 2-2 2h-1v1.5c0 0.276-0.224 0.5-0.5 0.5zM5 7h1c0.551 0 1-0.449 1-1s-0.449-1-1-1h-1v2z" />
      <path d="M5.5 12c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zM5.5 2c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z" />
    </Lini>
  );
}

LiniParking.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
