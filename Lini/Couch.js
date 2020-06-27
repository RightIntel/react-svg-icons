function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCouch({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCouch';

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
    d: "M4.5 19h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 19h-1a.5.5 0 010-1h1a.5.5 0 010 1zM17.993 7.049c-.077-2.512-.81-4.119-2.292-5.037C14.339 1.169 12.51 1 10 1s-4.339.169-5.701 1.012c-1.482.917-2.215 2.524-2.292 5.037A2.504 2.504 0 000 9.5c0 1.207.86 2.217 2 2.45v4.55c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5v-4.55c1.14-.232 2-1.242 2-2.45 0-1.21-.864-2.221-2.007-2.451zM4.826 2.863C5.986 2.145 7.666 2 10 2s4.014.144 5.174.863c1.166.722 1.749 2.059 1.818 4.189A2.504 2.504 0 0014.999 9.5V11h-10V9.5a2.504 2.504 0 00-1.993-2.448c.07-2.13.653-3.467 1.818-4.189zM5 12h10v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V12zm12.5-1a.5.5 0 00-.5.5v5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-5a.5.5 0 00-.5-.5C1.673 11 1 10.327 1 9.5S1.673 8 2.5 8 4 8.673 4 9.5v4c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-4c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 6H15c-1.103 0-2-.897-2-2v-.5a.5.5 0 00-1 0V4c0 1.103-.897 2-2 2s-2-.897-2-2v-.5a.5.5 0 00-1 0V4c0 1.103-.897 2-2 2h-.5a.5.5 0 000 1H5c1.103 0 2 .897 2 2v.5a.5.5 0 001 0V9c0-1.103.897-2 2-2s2 .897 2 2v.5a.5.5 0 001 0V9c0-1.103.897-2 2-2h.5a.5.5 0 000-1zm-8 1.344a3.028 3.028 0 00-.844-.844c.334-.222.621-.509.844-.844.222.334.509.621.844.844a3.015 3.015 0 00-.844.844zm5 0a3.028 3.028 0 00-.844-.844c.334-.222.622-.509.844-.844.222.334.509.621.844.844a3.015 3.015 0 00-.844.844z"
  })));
}
LiniCouch.propTypes = {
  size: PropTypes.number.isRequired
};