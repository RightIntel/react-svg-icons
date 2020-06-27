import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMouseLeft({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMouseLeft';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 4A5.506 5.506 0 004 9.5v5C4 17.533 6.467 20 9.5 20s5.5-2.467 5.5-5.5v-5C15 6.467 12.533 4 9.5 4zm4.472 5H10V5.028A4.507 4.507 0 0113.972 9zM9 5.028V9H5.028A4.507 4.507 0 019 5.028zM9.5 19A4.505 4.505 0 015 14.5V10h9v4.5c0 2.481-2.019 4.5-4.5 4.5zM5.5 3a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM2.5 6h-2a.5.5 0 010-1h2a.5.5 0 010 1zM3.5 4a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l2 2A.5.5 0 013.499 4z"
  })));
}
LiniMouseLeft.propTypes = {
  size: PropTypes.number.isRequired
};