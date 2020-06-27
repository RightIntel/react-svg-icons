function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFileSpreadsheet({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFileSpreadsheet';

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
    d: "M17.854 5.646l-4.5-4.5A.5.5 0 0013 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 00-.146-.354zM16.793 6H13.5a.5.5 0 01-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 10h-9a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zm-.5 3h-2v-2h2v2zm-5 0v-2h2v2H9zm2 1v2H9v-2h2zm-3-3v2H6v-2h2zm-2 3h2v2H6v-2zm6 2v-2h2v2h-2z"
  })));
}
LiniFileSpreadsheet.propTypes = {
  size: PropTypes.number.isRequired
};