function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniChevronDownSquare({
  size,
  ...props
}) {
  let className = 'Component Lini LiniChevronDownSquare';

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
    d: "M17.5 1h-16C.673 1 0 1.673 0 2.5v16c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-16c0-.827-.673-1.5-1.5-1.5zm-16 18a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v16a.5.5 0 01-.5.5h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 7.5a.502.502 0 00-.354.146L9.5 12.292 4.854 7.646a.5.5 0 00-.707.707l5 5a.5.5 0 00.707 0l5-5A.5.5 0 0014.5 7.5z"
  })));
}
LiniChevronDownSquare.propTypes = {
  size: PropTypes.number.isRequired
};