function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSortTimeAsc({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSortTimeAsc';

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
    d: "M8.854 14.646a.5.5 0 00-.707 0l-3.146 3.146V.499a.5.5 0 00-1 0v17.293L.855 14.646a.5.5 0 00-.707.707l4 4a.498.498 0 00.708 0l4-4a.5.5 0 000-.707zM16.5 15a.497.497 0 01-.223-.053l-2-1a.5.5 0 01.224-.947c2.481 0 4.5-2.019 4.5-4.5S16.982 4 14.501 4s-4.5 2.019-4.5 4.5a.5.5 0 01-1 0c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5a5.509 5.509 0 01-3.873 5.254l.597.298a.5.5 0 01-.224.948z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 10a.49.49 0 01-.223-.053l-2-1a.5.5 0 01.447-.895l1.678.839 1.745-1.745a.5.5 0 01.707.707l-2 2a.5.5 0 01-.354.146z"
  })));
}
LiniSortTimeAsc.propTypes = {
  size: PropTypes.number.isRequired
};