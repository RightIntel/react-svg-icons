import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniSignalLock(props = {}) {
  props.name = "SignalLock";
  
  return (
    <Lini {...props}>
      <path d="M18.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-17c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v17c0 0.276-0.224 0.5-0.5 0.5zM17 18h1v-16h-1v16z" />
      <path d="M14.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-12c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v12c0 0.276-0.224 0.5-0.5 0.5zM13 18h1v-11h-1v11z" />
      <path d="M10.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-8c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v8c0 0.276-0.224 0.5-0.5 0.5zM9 18h1v-7h-1v7z" />
      <path d="M6.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM5 18h1v-4h-1v4z" />
      <path d="M2.5 19h-2c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5zM1 18h1v-2h-1v2z" />
      <path d="M6 4.086v-0.586c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v0.586c-0.582 0.206-1 0.762-1 1.414v3c0 0.827 0.673 1.5 1.5 1.5h4c0.827 0 1.5-0.673 1.5-1.5v-3c0-0.652-0.418-1.208-1-1.414zM3.5 2c0.827 0 1.5 0.673 1.5 1.5v0.5h-3v-0.5c0-0.827 0.673-1.5 1.5-1.5zM6 8.5c0 0.276-0.224 0.5-0.5 0.5h-4c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276 0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5v3z" />
    </Lini>
  );
}

LiniSignalLock.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
