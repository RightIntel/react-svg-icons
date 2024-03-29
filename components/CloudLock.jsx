import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCloudLock(props = {}) {
  props.name = "CloudLock";
  
  return (
    <Lini {...props}>
      <path d="M16 16h-0.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h0.5c1.654 0 3-1.346 3-3s-1.346-3-3-3c-0.343 0-0.679 0.057-1 0.17-0.217 0.077-0.458-0.005-0.584-0.197s-0.105-0.446 0.051-0.614c0.343-0.371 0.533-0.853 0.533-1.359 0-1.103-0.897-2-2-2-1.055 0-1.931 0.823-1.996 1.875-0.013 0.212-0.159 0.393-0.363 0.45s-0.423-0.020-0.545-0.194c-0.937-1.334-2.468-2.131-4.096-2.131-2.757 0-5 2.243-5 5 0 2.605 1.954 4.746 4.545 4.98 0.275 0.025 0.478 0.268 0.453 0.543s-0.268 0.478-0.543 0.453c-1.486-0.134-2.862-0.815-3.875-1.917-1.019-1.109-1.581-2.551-1.581-4.058 0-3.308 2.692-6 6-6 1.611 0 3.143 0.65 4.261 1.776 0.471-1.050 1.527-1.776 2.739-1.776 1.654 0 3 1.346 3 3 0 0.346-0.059 0.685-0.172 1.004 0.057-0.002 0.115-0.004 0.172-0.004 2.206 0 4 1.794 4 4s-1.794 4-4 4z" />
      <path d="M13 12.086v-0.586c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.586c-0.582 0.206-1 0.762-1 1.414v3c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.652-0.418-1.208-1-1.414zM10.5 10c0.827 0 1.5 0.673 1.5 1.5v0.5h-3v-0.5c0-0.827 0.673-1.5 1.5-1.5zM13 16.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3z" />
    </Lini>
  );
}

LiniCloudLock.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
