function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBowling({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBowling';

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
    d: "M10 20c-2.671 0-5.182-1.04-7.071-2.929S0 12.671 0 10c0-2.671 1.04-5.182 2.929-7.071S7.329 0 10 0c2.671 0 5.182 1.04 7.071 2.929S20 7.329 20 10c0 2.671-1.04 5.182-2.929 7.071S12.671 20 10 20zm0-19c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 6c-.827 0-1.5-.673-1.5-1.5S10.673 3 11.5 3s1.5.673 1.5 1.5S12.327 6 11.5 6zm0-2a.5.5 0 100 1 .5.5 0 000-1zM14.5 8c-.827 0-1.5-.673-1.5-1.5S13.673 5 14.5 5s1.5.673 1.5 1.5S15.327 8 14.5 8zm0-2a.5.5 0 100 1 .5.5 0 000-1zM10 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1z"
  })));
}
LiniBowling.propTypes = {
  size: PropTypes.number.isRequired
};