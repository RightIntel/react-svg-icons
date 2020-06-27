import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCheckSquare({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCheckSquare';

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
    d: "M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h16c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM1.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 14.5a.502.502 0 01-.354-.146l-3-3a.5.5 0 01.707-.707l2.646 2.646 6.646-6.646a.5.5 0 01.707.707l-7 7a.498.498 0 01-.354.146z"
  })));
}
LiniCheckSquare.propTypes = {
  size: PropTypes.number.isRequired
};