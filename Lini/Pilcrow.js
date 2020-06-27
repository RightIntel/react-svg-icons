function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPilcrow({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPilcrow';

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
    d: "M15.5 2H7C4.794 2 3 3.794 3 6s1.794 4 4 4h1v7.5a.5.5 0 001 0V3h3v14.5a.5.5 0 001 0V3h2.5a.5.5 0 000-1zM8 9H7C5.346 9 4 7.654 4 6s1.346-3 3-3h1v6z"
  })));
}
LiniPilcrow.propTypes = {
  size: PropTypes.number.isRequired
};