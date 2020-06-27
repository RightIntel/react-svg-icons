function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniVault({
  size,
  ...props
}) {
  let className = 'Component Lini LiniVault';

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
    d: "M18.361 2.391l-.891-1.336C17.069.454 16.222 0 15.499 0h-12c-.723 0-1.57.453-1.971 1.055L.637 2.391C.279 2.928-.002 3.855-.002 4.5v14c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-14c0-.646-.281-1.572-.639-2.109zm-16-.782C2.574 1.29 3.116 1 3.5 1h12c.383 0 .926.29 1.139.609l.891 1.336.036.056-.065-.002h-16l-.065.002.036-.056.891-1.336zM18 18.5a.5.5 0 01-.5.5h-16a.5.5 0 01-.5-.5v-14a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 11a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H16v-.5c0-.827-.673-1.5-1.5-1.5h-11C2.673 5 2 5.673 2 6.5v10c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5V16h.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H16v-1h.5zm-.5-1h-1V8h1v2zm0 5h-1v-2h1v2zm-1-3h-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h.5v.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h11a.5.5 0 01.5.5V7h-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h.5v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 13c-.827 0-1.5-.673-1.5-1.5 0-.206.059-.581.567-1.458.257-.443.51-.811.521-.826a.5.5 0 01.822 0c.011.015.264.383.521.826.509.877.567 1.252.567 1.458 0 .827-.673 1.5-1.5 1.5zm0-2.573c-.288.485-.496.921-.5 1.074a.5.5 0 001-.001c-.004-.153-.212-.588-.5-1.073z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 7C6.019 7 4 9.019 4 11.5S6.019 16 8.5 16s4.5-2.019 4.5-4.5S10.981 7 8.5 7zm2.802 6.595l-.449-.449a.5.5 0 00-.707.707l.449.449A3.486 3.486 0 019 14.964V14.5a.5.5 0 00-1 0v.464a3.486 3.486 0 01-1.595-.662l.449-.449a.5.5 0 00-.707-.707l-.449.449A3.486 3.486 0 015.036 12H5.5a.5.5 0 000-1h-.464a3.486 3.486 0 01.662-1.595l.449.449a.498.498 0 00.708 0 .5.5 0 000-.707l-.449-.449a3.486 3.486 0 011.595-.662V8.5a.5.5 0 001 0v-.464a3.486 3.486 0 011.595.662l-.449.449a.5.5 0 00.708.707l.449-.449c.343.458.577 1.003.662 1.595h-.464a.5.5 0 000 1h.464a3.486 3.486 0 01-.662 1.595z"
  })));
}
LiniVault.propTypes = {
  size: PropTypes.number.isRequired
};