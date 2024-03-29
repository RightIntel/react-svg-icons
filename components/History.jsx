import React from "react";
import PropTypes from "prop-types";
import Lini from "../Lini.jsx";

export default function LiniHistory(props = {}) {
  props.name = "History";
  
  return (
    <Lini {...props}>
      <path d="M10 20c-3.684 0-7.060-2.017-8.809-5.263-0.131-0.243-0.040-0.546 0.203-0.677s0.546-0.040 0.677 0.203c1.574 2.922 4.612 4.737 7.928 4.737 4.963 0 9-4.037 9-9s-4.037-9-9-9c-3.303 0-6.336 1.805-7.914 4.71-0.119 0.218-0.38 0.317-0.613 0.23s-0.367-0.331-0.315-0.574l0.853-3.972c0.058-0.27 0.324-0.442 0.594-0.384s0.442 0.324 0.384 0.594l-0.349 1.623c1.87-2.032 4.525-3.228 7.36-3.228 2.671 0 5.182 1.040 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.040 5.182-2.929 7.071s-4.4 2.929-7.071 2.929z" />
      <path d="M10 10.5c-0.084 0-0.167-0.021-0.243-0.063l-4.5-2.5c-0.241-0.134-0.328-0.438-0.194-0.68s0.438-0.328 0.68-0.194l4.24 2.355 5.249-3.34c0.233-0.148 0.542-0.080 0.69 0.153s0.080 0.542-0.153 0.69l-5.5 3.5c-0.082 0.052-0.175 0.078-0.268 0.078z" />
    </Lini>
  );
}

LiniHistory.propTypes = {
  /** The height/width in pixels */
  size: PropTypes.number,
  /** The fill color */
  color: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
};
