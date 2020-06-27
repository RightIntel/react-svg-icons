function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDocument2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDocument2';

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
    d: "M16.5 20h-13c-.827 0-1.5-.673-1.5-1.5v-16C2 1.673 2.673 1 3.5 1h13c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5zM3.5 2a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5h-13z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 5h-3a.5.5 0 010-1h3a.5.5 0 010 1zM8.5 7h-3a.5.5 0 010-1h3a.5.5 0 010 1zM8.5 9h-3a.5.5 0 010-1h3a.5.5 0 010 1zM8.5 11h-3a.5.5 0 010-1h3a.5.5 0 010 1zM14.5 13h-9a.5.5 0 010-1h9a.5.5 0 010 1zM14.5 15h-9a.5.5 0 010-1h9a.5.5 0 010 1zM14.5 17h-9a.5.5 0 010-1h9a.5.5 0 010 1zM14.5 11h-4a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zM11 10h3V5h-3v5z"
  })));
}
LiniDocument2.propTypes = {
  size: PropTypes.number.isRequired
};