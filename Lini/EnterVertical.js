function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnterVertical({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnterVertical';

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
    d: "M17.5 12h-5a.5.5 0 010-1h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5a.5.5 0 010-1h5c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5zM6.5 12h-5C.673 12 0 11.327 0 10.5v-1C0 8.673.673 8 1.5 8h5a.5.5 0 010 1h-5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5a.5.5 0 010 1zM12.854 5.646a.5.5 0 00-.707 0l-2.146 2.146V.499a.5.5 0 00-1 0v7.293L6.855 5.646a.5.5 0 00-.707.707l3 3a.498.498 0 00.708 0l3-3a.5.5 0 000-.707zM12.854 13.646l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707L9 12.207V19.5a.5.5 0 001 0v-7.293l2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  })));
}
LiniEnterVertical.propTypes = {
  size: PropTypes.number.isRequired
};