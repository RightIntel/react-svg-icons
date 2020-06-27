function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniDrawers({
  size,
  ...props
}) {
  let className = 'Component Lini LiniDrawers';

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
    d: "M15.5 3h-11C3.673 3 3 3.673 3 4.5v12a.5.5 0 001 0V16h12v.5a.5.5 0 001 0v-12c0-.827-.673-1.5-1.5-1.5zm-11 1h11a.5.5 0 01.5.5V7H4V4.5a.5.5 0 01.5-.5zM16 8v3H4V8h12zM4 15v-3h12v3H4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 6h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10.5 10h-1a.5.5 0 010-1h1a.5.5 0 010 1zM10.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1z"
  })));
}
LiniDrawers.propTypes = {
  size: PropTypes.number.isRequired
};