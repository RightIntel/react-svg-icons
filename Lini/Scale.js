function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniScale({
  size,
  ...props
}) {
  let className = 'Component Lini LiniScale';

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
    d: "M10 8.086V6.5a.5.5 0 00-1 0v1.586c-.582.206-1 .762-1 1.414 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.652-.418-1.208-1-1.414zM9.5 10a.5.5 0 110-1 .5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 5C7.019 5 5 7.019 5 9.5S7.019 14 9.5 14 14 11.981 14 9.5 11.981 5 9.5 5zm.5 7.964V12.5a.5.5 0 00-1 0v.464A3.508 3.508 0 016.036 10H6.5a.5.5 0 000-1h-.464C6.279 7.306 7.74 6 9.5 6s3.221 1.306 3.464 3H12.5a.5.5 0 000 1h.464A3.508 3.508 0 0110 12.964z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 3H12v-.5C12 1.122 10.878 0 9.5 0S7 1.122 7 2.5V3H5.5A2.503 2.503 0 003 5.5v8C3 14.878 4.122 16 5.5 16H9v1.5c0 .276.224.5.5.5a.5.5 0 11-.5.5.5.5 0 00-1 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.652-.418-1.208-1-1.414V16h3.5c1.378 0 2.5-1.122 2.5-2.5v-8C16 4.122 14.878 3 13.5 3zM8 2.5C8 1.673 8.673 1 9.5 1s1.5.673 1.5 1.5V3H8v-.5zm7 11c0 .827-.673 1.5-1.5 1.5h-8c-.827 0-1.5-.673-1.5-1.5v-8C4 4.673 4.673 4 5.5 4h8c.827 0 1.5.673 1.5 1.5v8z"
  })));
}
LiniScale.propTypes = {
  size: PropTypes.number.isRequired
};