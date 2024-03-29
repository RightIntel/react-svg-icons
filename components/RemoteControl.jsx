import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniRemoteControl(props = {}) {
  props.name = "RemoteControl";
  
  return (
    <Lini {...props}>
      <path d="M11.5 20h-4c-0.827 0-1.5-0.673-1.5-1.5v-7c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v7c0 0.827-0.673 1.5-1.5 1.5zM7.5 11c-0.276 0-0.5 0.224-0.5 0.5v7c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5h-4z" />
      <path d="M9.5 15c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5c0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5zM9.5 13c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
      <path d="M11.767 8.035c-0.14 0-0.279-0.058-0.378-0.172-0.476-0.548-1.164-0.863-1.889-0.863s-1.414 0.314-1.889 0.863c-0.181 0.209-0.497 0.231-0.705 0.050s-0.231-0.497-0.050-0.705c0.666-0.767 1.63-1.208 2.645-1.208s1.979 0.44 2.645 1.208c0.181 0.209 0.158 0.524-0.050 0.705-0.095 0.082-0.211 0.122-0.327 0.122z" />
      <path d="M4.966 6.070c-0.116 0-0.233-0.040-0.327-0.122-0.209-0.181-0.231-0.497-0.050-0.705 1.236-1.425 3.027-2.243 4.912-2.243s3.676 0.817 4.912 2.243c0.181 0.209 0.159 0.524-0.050 0.705s-0.524 0.158-0.705-0.050c-1.046-1.206-2.561-1.898-4.156-1.898s-3.11 0.692-4.157 1.898c-0.099 0.114-0.238 0.172-0.378 0.172z" />
      <path d="M2.698 4.106c-0.116 0-0.233-0.040-0.327-0.122-0.209-0.181-0.231-0.497-0.050-0.705 1.807-2.083 4.424-3.278 7.179-3.278s5.372 1.195 7.179 3.278c0.181 0.209 0.159 0.524-0.050 0.705s-0.524 0.159-0.705-0.050c-1.617-1.864-3.958-2.933-6.423-2.933s-4.807 1.069-6.424 2.933c-0.099 0.114-0.238 0.172-0.378 0.172z" />
    </Lini>
  );
}

LiniRemoteControl.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
