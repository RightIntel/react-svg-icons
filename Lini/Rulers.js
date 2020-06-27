function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniRulers({
  size,
  ...props
}) {
  let className = 'Component Lini LiniRulers';

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
    d: "M17.5 3H9v-.5C9 1.673 8.327 1 7.5 1h-2C4.673 1 4 1.673 4 2.5V3H1.5C.673 3 0 3.673 0 4.5v2C0 7.327.673 8 1.5 8H4v10.5c0 .827.673 1.5 1.5 1.5h2c.827 0 1.5-.673 1.5-1.5V8h8.5c.827 0 1.5-.673 1.5-1.5v-2c0-.827-.673-1.5-1.5-1.5zM5 2.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V3H5v-.5zM8 10h-.5a.5.5 0 000 1H8v2h-.5a.5.5 0 000 1H8v2h-.5a.5.5 0 000 1H8v1.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V8h3v2zm10-3.5a.5.5 0 01-.5.5H16v-.5a.5.5 0 00-1 0V7h-2v-.5a.5.5 0 00-1 0V7h-2v-.5a.5.5 0 00-1 0V7H7v-.5a.5.5 0 00-1 0V7H4v-.5a.5.5 0 00-1 0V7H1.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v2z"
  })));
}
LiniRulers.propTypes = {
  size: PropTypes.number.isRequired
};