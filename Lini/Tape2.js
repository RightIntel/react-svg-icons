function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTape2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTape2';

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
    d: "M5.5 13C4.122 13 3 11.878 3 10.5S4.122 8 5.5 8 8 9.122 8 10.5 6.878 13 5.5 13zm0-4C4.673 9 4 9.673 4 10.5S4.673 12 5.5 12 7 11.327 7 10.5 6.327 9 5.5 9zM14.5 13c-1.378 0-2.5-1.122-2.5-2.5S13.122 8 14.5 8 17 9.122 17 10.5 15.878 13 14.5 13zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S15.327 9 14.5 9zM11.5 7h-6a.5.5 0 010-1h6a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 4h-17C.673 4 0 4.673 0 5.5v10c0 .827.673 1.5 1.5 1.5h17.001c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zM4.309 16l.5-1h10.382l.5 1H4.309zM19 15.5a.5.5 0 01-.5.5h-1.691l-.862-1.724A.5.5 0 0015.5 14h-11a.5.5 0 00-.447.276L3.191 16H1.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v10z"
  })));
}
LiniTape2.propTypes = {
  size: PropTypes.number.isRequired
};