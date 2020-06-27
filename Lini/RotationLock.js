function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRotationLock({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRotationLock';

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
    d: "M13 9.086V8.5C13 7.122 11.878 6 10.5 6S8 7.122 8 8.5v.586c-.582.206-1 .762-1 1.414v3c0 .827.673 1.5 1.5 1.5h4c.827 0 1.5-.673 1.5-1.5v-3c0-.652-.418-1.208-1-1.414zM10.5 7c.827 0 1.5.673 1.5 1.5V9H9v-.5c0-.827.673-1.5 1.5-1.5zm2.5 6.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 20a9.478 9.478 0 01-5.009-1.426 9.538 9.538 0 01-3.435-3.717.5.5 0 11.889-.459 8.478 8.478 0 007.556 4.603c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5-8.5 3.813-8.5 8.5a.5.5 0 01-.985.121l-1-4a.5.5 0 11.97-.242l.377 1.508a9.45 9.45 0 012.42-4.104c1.794-1.794 4.18-2.782 6.718-2.782s4.923.988 6.718 2.783c1.794 1.794 2.782 4.18 2.782 6.717s-.988 4.923-2.782 6.718a9.438 9.438 0 01-6.718 2.782z"
  })));
}
LiniRotationLock.propTypes = {
  size: PropTypes.number.isRequired
};