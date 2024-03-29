import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniInbox(props = {}) {
  props.name = "Inbox";
  
  return (
    <Lini {...props}>
      <path d="M19.557 10.383l-2.698-6.168c-0.298-0.682-1.115-1.216-1.859-1.216h-10c-0.744 0-1.561 0.534-1.859 1.216l-2.698 6.168c-0.248 0.568-0.443 1.497-0.443 2.117v4c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.619-0.194-1.549-0.443-2.117zM4.057 4.617c0.141-0.323 0.591-0.617 0.943-0.617h10c0.352 0 0.802 0.294 0.943 0.617l2.698 6.168c0.030 0.069 0.060 0.148 0.089 0.233-0.075-0.012-0.152-0.018-0.23-0.018h-6c-0.276 0-0.5 0.224-0.5 0.5v0.5c0 1.103-0.897 2-2 2s-2-0.897-2-2v-0.5c0-0.276-0.224-0.5-0.5-0.5h-6c-0.078 0-0.155 0.006-0.23 0.018 0.029-0.085 0.058-0.164 0.089-0.233l2.698-6.168zM19 16.5c0 0.276-0.224 0.5-0.5 0.5h-17c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h5.5c0 1.654 1.346 3 3 3s3-1.346 3-3h5.5c0.276 0 0.5 0.224 0.5 0.5v4z" />
    </Lini>
  );
}

LiniInbox.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
