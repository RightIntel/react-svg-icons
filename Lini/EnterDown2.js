function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniEnterDown2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniEnterDown2';

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
    d: "M17.5 20h-16C.673 20 0 19.327 0 18.5v-1c0-.827.673-1.5 1.5-1.5h5a.5.5 0 010 1h-5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5a.5.5 0 010-1h5c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.853 11.647a.5.5 0 00-.707 0L10 15.793V1.5a.5.5 0 00-1 0v14.293l-4.146-4.146a.5.5 0 00-.707.707l5 5a.498.498 0 00.708-.001l5-5a.5.5 0 000-.707z"
  })));
}
LiniEnterDown2.propTypes = {
  size: PropTypes.number.isRequired
};