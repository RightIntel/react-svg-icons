function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnterUp2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnterUp2';

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
    d: "M17.5 1h-16C.673 1 0 1.673 0 2.5v1C0 4.327.673 5 1.5 5h5a.5.5 0 000-1h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 000 1h5c.827 0 1.5-.673 1.5-1.5v-1c0-.827-.673-1.5-1.5-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.853 9.353a.5.5 0 01-.707 0L10 5.207V19.5a.5.5 0 01-1 0V5.207L4.854 9.353a.5.5 0 01-.707-.707l5-5a.498.498 0 01.708.001l5 5a.5.5 0 010 .707z"
  })));
}
LiniEnterUp2.propTypes = {
  size: PropTypes.number.isRequired
};