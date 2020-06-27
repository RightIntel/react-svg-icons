function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnterLeft2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnterLeft2';

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
    d: "M0 18.5v-16C0 1.673.673 1 1.5 1h1C3.327 1 4 1.673 4 2.5v5a.5.5 0 01-1 0v-5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-5a.5.5 0 011 0v5c0 .827-.673 1.5-1.5 1.5h-1C.673 20 0 19.327 0 18.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.353 15.853a.5.5 0 000-.707L4.207 11H18.5a.5.5 0 000-1H4.207l4.146-4.146a.5.5 0 00-.707-.707l-5 5a.498.498 0 00.001.708l5 5a.5.5 0 00.707 0z"
  })));
}
LiniEnterLeft2.propTypes = {
  size: PropTypes.number.isRequired
};