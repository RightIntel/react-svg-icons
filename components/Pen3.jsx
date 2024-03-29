import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniPen3(props = {}) {
  props.name = "Pen3";
  
  return (
    <Lini {...props}>
      <path d="M19.354 6.146l-6-6c-0.165-0.165-0.421-0.194-0.619-0.070l-8 5c-0.146 0.091-0.235 0.25-0.235 0.422-0 0.010-0.013 1.011-0.566 3.14-0.511 1.965-1.599 5.321-3.886 10.147-0.090 0.191-0.051 0.418 0.098 0.568 0.096 0.096 0.224 0.146 0.354 0.146 0.072 0 0.146-0.016 0.214-0.048 4.826-2.286 8.182-3.375 10.147-3.886 2.13-0.553 3.13-0.566 3.139-0.566 0.172 0 0.333-0.089 0.424-0.235l5-8c0.123-0.197 0.094-0.454-0.070-0.619zM13.714 14.014c-0.963 0.073-4.362 0.531-10.907 3.386l6.714-6.714c0.324 0.199 0.705 0.314 1.112 0.314 1.176 0 2.133-0.957 2.133-2.133s-0.957-2.133-2.133-2.133c-1.176 0-2.133 0.957-2.133 2.133 0 0.407 0.115 0.788 0.314 1.112l-6.714 6.714c2.856-6.546 3.313-9.945 3.386-10.907l7.441-4.651 5.437 5.438-4.651 7.441zM9.5 8.867c0-0.625 0.508-1.133 1.133-1.133s1.133 0.508 1.133 1.133-0.508 1.133-1.133 1.133-1.133-0.508-1.133-1.133z" />
    </Lini>
  );
}

LiniPen3.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
