function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniIcons2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniIcons2';

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
    d: "M3.5 19h-2C.673 19 0 18.327 0 17.5v-2c0-.827.673-1.5 1.5-1.5h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM10.5 19h-2c-.827 0-1.5-.673-1.5-1.5v-2c0-.827.673-1.5 1.5-1.5h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM17.5 19h-2c-.827 0-1.5-.673-1.5-1.5v-2c0-.827.673-1.5 1.5-1.5h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM3.5 12h-2C.673 12 0 11.327 0 10.5v-2C0 7.673.673 7 1.5 7h2C4.327 7 5 7.673 5 8.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM10.5 12h-2c-.827 0-1.5-.673-1.5-1.5v-2C7 7.673 7.673 7 8.5 7h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM17.5 12h-2c-.827 0-1.5-.673-1.5-1.5v-2c0-.827.673-1.5 1.5-1.5h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM3.5 5h-2C.673 5 0 4.327 0 3.5v-2C0 .673.673 0 1.5 0h2C4.327 0 5 .673 5 1.5v2C5 4.327 4.327 5 3.5 5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM10.5 5h-2C7.673 5 7 4.327 7 3.5v-2C7 .673 7.673 0 8.5 0h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM17.5 5h-2c-.827 0-1.5-.673-1.5-1.5v-2c0-.827.673-1.5 1.5-1.5h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm-2-4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2z"
  })));
}
LiniIcons2.propTypes = {
  size: PropTypes.number.isRequired
};