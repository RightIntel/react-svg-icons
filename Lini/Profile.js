function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniProfile({
  size,
  ...props
}) {
  let className = 'Component Lini LiniProfile';

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
    d: "M18.5 17h-17C.673 17 0 16.327 0 15.5v-11C0 3.673.673 3 1.5 3h17c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5zM1.5 4a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-17z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.501 14H3.5a.5.5 0 01-.5-.5c0-.066.011-.661.388-1.265C3.74 11.672 4.479 11 6 11s2.259.672 2.612 1.235c.338.541.382 1.074.388 1.227l.001.038a.5.5 0 01-.5.5zm-4.384-1h3.766a1.563 1.563 0 00-.14-.267C7.421 12.246 6.835 12 6 12s-1.421.247-1.743.733c-.059.09-.105.18-.14.267zM16.5 8h-5a.5.5 0 010-1h5a.5.5 0 010 1zM15.5 10h-4a.5.5 0 010-1h4a.5.5 0 010 1zM15.5 12h-4a.5.5 0 010-1h4a.5.5 0 010 1zM6 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM16.5 14h-5a.5.5 0 010-1h5a.5.5 0 010 1z"
  })));
}
LiniProfile.propTypes = {
  size: PropTypes.number.isRequired
};