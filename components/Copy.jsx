import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniCopy(props = {}) {
  props.name = "Copy";
  
  return (
    <Lini {...props}>
      <path d="M16.5 4h-2.5v-2.5c0-0.827-0.673-1.5-1.5-1.5h-7.5c-0.133 0-0.26 0.053-0.354 0.146l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v10.5c0 0.827 0.673 1.5 1.5 1.5h2.5v2.5c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-13c0-0.827-0.673-1.5-1.5-1.5zM5 1.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793zM2.5 15c-0.276 0-0.5-0.224-0.5-0.5v-9.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h6.5c0.276 0 0.5 0.224 0.5 0.5v2.5h-4c-0.133 0-0.26 0.053-0.354 0.146l-3.5 3.5c-0.094 0.094-0.146 0.221-0.146 0.354v7h-2.5zM9 5.207v2.293c0 0.276-0.224 0.5-0.5 0.5h-2.293l2.793-2.793zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-10c-0.276 0-0.5-0.224-0.5-0.5v-9.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-2.5h6.5c0.276 0 0.5 0.224 0.5 0.5v13z" />
    </Lini>
  );
}

LiniCopy.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
