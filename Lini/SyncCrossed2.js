function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSyncCrossed2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSyncCrossed2';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.854 8.646a.5.5 0 00-.707 0l-1.149 1.149a7.94 7.94 0 00-2.341-5.452l-.05-.049 1.271-1.467a.5.5 0 00-.755-.655l-1.27 1.466A7.941 7.941 0 0010.001 2a7.988 7.988 0 00-7.077 4.266.5.5 0 00.884.468A6.99 6.99 0 0110.001 3c1.571 0 3.024.521 4.193 1.398L5.052 14.946A6.977 6.977 0 013 10V9a.5.5 0 00-.854-.354l-2 2a.5.5 0 00.707.707l1.149-1.149a7.94 7.94 0 002.341 5.452l.05.049-1.271 1.467a.5.5 0 10.755.654l1.27-1.466a7.941 7.941 0 004.852 1.638 7.988 7.988 0 007.077-4.266.5.5 0 00-.884-.468 6.99 6.99 0 01-6.193 3.734A6.965 6.965 0 015.806 15.6l9.142-10.548A6.977 6.977 0 0117 9.998v1a.5.5 0 00.854.354l2-2a.5.5 0 000-.707z"
  })));
}
LiniSyncCrossed2.propTypes = {
  size: PropTypes.number.isRequired
};