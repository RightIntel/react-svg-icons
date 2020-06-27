function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPencil4({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPencil4';

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
    d: "M3.5 17a.5.5 0 01-.47-.671l2-5.5a.51.51 0 01.116-.183l10.5-10.5a.5.5 0 01.707 0l3.5 3.5a.5.5 0 010 .707l-10.5 10.5a.496.496 0 01-.183.116l-5.5 2a.505.505 0 01-.171.03zm2.432-5.725l-1.596 4.389 4.389-1.596L18.793 4 16 1.207 5.932 11.275z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 20h-16C.673 20 0 19.327 0 18.5v-16C0 1.673.673 1 1.5 1h10a.5.5 0 010 1h-10a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-10a.5.5 0 011 0v10c0 .827-.673 1.5-1.5 1.5z"
  })));
}
LiniPencil4.propTypes = {
  size: PropTypes.number.isRequired
};