function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniStrikethrough({
  size,
  ...props
}) {
  let className = 'Component Lini LiniStrikethrough';

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
    d: "M16.5 2h-14a.5.5 0 000 1H9v4.5a.5.5 0 001 0V3h6.5a.5.5 0 000-1zM9.5 18a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM18.5 12H.5a.5.5 0 01-.5-.5v-2A.5.5 0 01.5 9h18a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zM1 11h17v-1H1v1z"
  })));
}
LiniStrikethrough.propTypes = {
  size: PropTypes.number.isRequired
};