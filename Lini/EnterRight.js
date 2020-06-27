function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnterRight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnterRight';

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
    d: "M10.646 7.146a.5.5 0 000 .707l2.146 2.146H.499a.5.5 0 000 1h12.293l-2.146 2.146a.5.5 0 00.707.707l3-3a.498.498 0 000-.708l-3-3a.5.5 0 00-.707 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 4.5v12c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4C6 3.673 6.673 3 7.5 3h10c.827 0 1.5.673 1.5 1.5z"
  })));
}
LiniEnterRight.propTypes = {
  size: PropTypes.number.isRequired
};