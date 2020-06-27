function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCheese({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCheese';

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
    d: "M13.5 2a.51.51 0 00-.21.046l-2.005.926A.503.503 0 0011 3.5c0 .017-.054.132-.309.26-.305.153-.739.24-1.191.24-.09 0-.181-.003-.269-.01a.492.492 0 00-.248.045L.291 8.047A.5.5 0 000 8.501v3a.5.5 0 00.5.5 1.502 1.502 0 011.061 2.561c-.283.284-.66.439-1.061.439a.498.498 0 00-.5.5v2a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-9c0-3.584-2.916-6.5-6.5-6.5zM9.287 4.995c.071.003.142.005.213.005.61 0 1.192-.123 1.638-.346.451-.225.737-.538.83-.896l1.64-.757A5.506 5.506 0 0118.977 8h-4.045c-.14-.51-.495-.971-1.034-1.33-.648-.432-1.5-.67-2.399-.67s-1.751.238-2.399.67c-.539.359-.894.82-1.034 1.33H2.775l6.511-3.005zM14 8.5c0 1.378-1.122 2.5-2.5 2.5S9 9.878 9 8.5C9 7.687 10.145 7 11.5 7s2.5.687 2.5 1.5zm5 8.5H1v-1.05c.477-.096.916-.33 1.268-.683.472-.472.732-1.1.732-1.768 0-1.207-.86-2.217-2-2.45v-2.05h7.036c.243 1.694 1.704 3 3.464 3s3.221-1.306 3.464-3H19v8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 15c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM7 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
  })));
}
LiniCheese.propTypes = {
  size: PropTypes.number.isRequired
};